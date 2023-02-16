import Layout from "components/layout";
import PostCard from "components/post-card";
import PressReleaseListing from "components/press-releases";
import { Author } from "lib/author";
import { BlogPost, PostMetadata, stripBlogPostBody } from "lib/post";
import { siteData } from "lib/site-data";
import { markdownToHTML } from "lib/utils";

const Post = ({ params }: any) => {
  const post = postForPath(params.path);
  const author = siteData.authors.find((a) => a.id === post.authorId)!;
  const authors = siteData.authors;
  const otherPosts = siteData.posts
    .filter((p) => p.path !== post.path)
    .map(stripBlogPostBody)
    .slice(0, 3);
  const pressReleases = siteData.pressReleases
    .map(stripBlogPostBody)
    .slice(0, 6);
  const authorOf = (post: PostMetadata) =>
    authors.find((a) => a.id === post.authorId)!;

  return (
    <Layout>
      <div className="post-listing-row">
        <div className="main-post">
          <PostBody post={post} author={author} />
        </div>

        <div className="press-release-box">
          <PressReleaseListing posts={pressReleases} />
        </div>

        {otherPosts.map((post) => (
          <div className="post-listing-post" key={post.path}>
            <PostCard post={post} author={authorOf(post)} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

const PostBody = ({ post, author }: { post: BlogPost; author: Author }) => {
  const formatDate = (stamp: string) =>
    new Date(stamp).toLocaleDateString("cs-CZ", { dateStyle: "medium" });
  return (
    <div className="post-container" lang={post.lang}>
      <img
        alt=""
        loading="lazy"
        width="100%"
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        src={post.coverImageUrl}
      />

      <div className="post-wrapper">
        <div className="post-metadata">
          {formatDate(post.date)}
          {" • "}
          <a className="post-author" href={`mailto:${author.email}`}>
            {author.name}
          </a>
          {/* TODO: Language versions */}
        </div>

        <h1 className="post-title">{post.title}</h1>
        <p className="post-perex">{post.description}</p>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: markdownToHTML(post.body) }}
        />

        <a className="post-button" href={"/"}>
          <img src="/arrow-light.svg" alt="" />
          Zpět na všechny články
        </a>
      </div>
    </div>
  );
};

//
// Support
//

const postForPath = (path: string[]) => {
  const mergedPath = "/" + path.join("/");
  const allPosts = [...siteData.posts, ...siteData.pressReleases];
  return allPosts.find((post) => post.path === mergedPath)!;
};

export async function generateStaticParams() {
  const allPosts = [...siteData.posts, ...siteData.pressReleases];
  return allPosts.map((post) => ({
    path: post.path.split("/").slice(1),
  }));
}

export async function generateMetadata({ params }: any) {
  const post = postForPath(params.path);
  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.coverImageUrl,
        },
      ],
    },
  };
}

export default Post;
