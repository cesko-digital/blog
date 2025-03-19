import PostCard from "shared/post-card";
import PressReleaseListing from "shared/press-releases";
import { Author } from "shared/author";
import { BlogPost, PostMetadata, stripBlogPostBody } from "shared/post";
import {
  getAllAuthors,
  getAllBlogPosts,
  getAllPressReleases,
} from "shared/site-data";
import { getResizedImageUrl, markdownToHTML } from "shared/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  path: string[];
};

type Props = {
  params: Params;
};

const Post = ({ params }: Props) => {
  const post = postForPath(params.path) || notFound();
  const authors = getAllAuthors();
  const author = authors.find((a) => a.id === post.authorId)!;
  const otherPosts = getAllBlogPosts()
    .filter((p) => p.path !== post.path)
    .map(stripBlogPostBody)
    .slice(0, 3);
  const authorOf = (post: PostMetadata) =>
    authors.find((a) => a.id === post.authorId)!;

  return (
    <div className="post-listing-row">
      <div className="main-post">
        <PostBody post={post} author={author} />
      </div>

      <div className="press-release-box">
        <PressReleaseListing />
      </div>

      {otherPosts.map((post) => (
        <div className="post-listing-post" key={post.path}>
          <PostCard post={post} author={authorOf(post)} />
        </div>
      ))}
    </div>
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
  const allPosts = [...getAllBlogPosts(), ...getAllPressReleases()];
  return allPosts.find((post) => post.path === mergedPath);
};

export async function generateStaticParams(): Promise<Params[]> {
  const allPosts = [...getAllBlogPosts(), ...getAllPressReleases()];
  return allPosts.map((post) => ({
    path: post.path.split("/").slice(1),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = postForPath(params.path) || notFound();
  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.description,
      images: getResizedImageUrl(post.coverImageUrl, 1920),
    },
  };
}

export default Post;
