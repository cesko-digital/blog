import { BlogPost } from "shared/post";
import { getAllBlogPosts } from "shared/site-data";

interface PublicParams {
  url: string;
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
    url: "https://blog.cesko.digital" + post.path,
    title: post.title,
    date: post.date,
    author: post.authorId,
    slug: post.slug,
    cover: post.coverImageUrl,
    tags: post.tags,
    description: post.description,
  };
}

export async function GET() {
  const posts = getAllBlogPosts().map(getPublicParamsForPost);
  return new Response(JSON.stringify(posts, null, 2), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
