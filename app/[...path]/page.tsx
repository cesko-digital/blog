import PostCard from "components/PostCard";
import PressReleaseListing from "components/PressReleaseListing";
import { Author } from "shared/author";
import { BlogPost, PostMetadata, stripBlogPostBody } from "shared/post";
import {
  getAllAuthors,
  getAllBlogPosts,
  getAllPressReleases,
} from "shared/site-data";
import { markdownToHTML } from "shared/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

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
    <div className="grid lg:grid-cols-3 gap-7">
      <div className="lg:col-span-2">
        <PostBody post={post} author={author} />
      </div>
      <PressReleaseListing />
      {otherPosts.map((post) => (
        <PostCard key={post.path} post={post} author={authorOf(post)} />
      ))}
    </div>
  );
};

const PostBody = ({ post, author }: { post: BlogPost; author: Author }) => {
  const formatDate = (stamp: string) =>
    new Date(stamp).toLocaleDateString("cs-CZ", { dateStyle: "medium" });

  const BackButton = () => (
    <Link
      className="inline-block rounded-md bg-it px-4 py-3 text-white"
      href="/"
    >
      <div className="flex flex-row gap-2">
        <Image src="/arrow-light.svg" width={24} height={24} alt="" />
        Zpět na všechny články
      </div>
    </Link>
  );

  const PostMetadata = () => (
    <Fragment>
      <div className="flex flex-row gap-2 -mb-2">
        {formatDate(post.date)}
        <a href={`mailto:${author.email}`}>{author.name}</a>
      </div>
      <h1 className="typo-title">{post.title}</h1>
      <p className="text-xl">{post.description}</p>
    </Fragment>
  );

  return (
    <div
      className="border-2 border-gray rounded-xl overflow-clip"
      lang={post.lang}
    >
      {/* TBD: Replace with next/image */}
      <img src={post.coverImageUrl} alt="" loading="lazy" width="100%" />
      <div className="flex flex-col gap-4 p-5">
        <PostMetadata />
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: markdownToHTML(post.body) }}
        />
        <div className="p-4 pl-0 pt-6 text-center">
          <BackButton />
        </div>
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
      images: [
        {
          url: post.coverImageUrl,
        },
      ],
    },
  };
}

export default Post;
