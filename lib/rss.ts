import { Item } from "feed";
import { BlogPost } from "./post";
import { markdownToHTML } from "./utils";

export function feedItemFromBlogPost(
  post: Pick<BlogPost, "title" | "description" | "body" | "date" | "path">
): Item {
  return {
    title: post.title,
    link: "https://blog.cesko.digital" + post.path,
    description: post.description,
    date: new Date(post.date),
    content: markdownToHTML(post.body),
  };
}
