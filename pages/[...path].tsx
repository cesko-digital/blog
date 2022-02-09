import Layout from "components/layout";
import PostCard from "components/post-card";
import PressReleaseListing from "components/press-releases";
import { Author } from "lib/author";
import { BlogPost, PostMetadata, stripBlogPostBody } from "lib/post";
import { siteData } from "lib/site-data";
import { markdownToHTML } from "lib/utils";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  post: BlogPost;
  otherPosts: PostMetadata[];
  pressReleases: PostMetadata[];
  authors: readonly Author[];
  author: Author;
}

interface QueryParams extends ParsedUrlQuery {
  path: string[];
}

const Post: NextPage<Props> = (props) => {
  const { post, otherPosts, pressReleases, authors } = props;
  const authorOf = (post: PostMetadata) =>
    authors.find((a) => a.id === post.authorId)!;
  return (
    <Layout
      title={post.title}
      description={post.description}
      coverUrl={post.coverImageUrl}
    >
      <div className="post-listing-row">
        <div className="main-post">
          <PostBody {...props} />
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

const PostBody: React.FC<Props> = ({ post, author }) => {
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
          <img src="/arrow-light.svg" />
          Zpět na všechny články
        </a>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props, QueryParams> = async (
  context
) => {
  const { path } = context.params!;
  const mergedPath = "/" + path.join("/");
  const post = siteData.posts.find((post) => post.path === mergedPath)!;
  const author = siteData.authors.find((a) => a.id === post.authorId)!;
  const authors = siteData.authors;
  const otherPosts = siteData.posts
    .filter((p) => p.path !== post.path)
    .map(stripBlogPostBody)
    .slice(0, 3);
  const pressReleases = siteData.pressReleases
    .map(stripBlogPostBody)
    .slice(0, 6);
  return {
    props: {
      post,
      author,
      authors,
      otherPosts,
      pressReleases,
    },
  };
};

export const getStaticPaths: GetStaticPaths<QueryParams> = async () => {
  const paths = siteData.posts.map((post) => ({
    params: { path: post.path.split("/").slice(1) },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
