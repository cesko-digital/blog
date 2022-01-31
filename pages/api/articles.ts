import type { NextApiRequest, NextApiResponse } from "next";
import { BlogPost, getAllPosts, getPublicPostURL } from "lib/post";

interface PublicParams {
  url?: string;
  title: string;
  date: string;
  author: string;
  slug: string;
  cover: string;
  tags: string[];
  description: string;
}

function getPublicParamsForPost(post: BlogPost): PublicParams {
  return {
    url: getPublicPostURL(post),
    title: post.title,
    date: post.date,
    author: post.authorId,
    slug: post.slug,
    cover: post.coverImageUrl,
    tags: post.tags,
    description: post.description,
  };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const posts = getAllPosts("content/posts").map(getPublicParamsForPost);
  response.setHeader("Content-Type", "application/json");
  response.status(200).send(JSON.stringify(posts, null, 2));
}
