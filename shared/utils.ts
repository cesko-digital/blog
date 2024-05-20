import { marked } from "marked";
import { Item } from "feed";
import { BlogPost } from "./post";

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

export function markdownToHTML(source: string): string {
  return marked.parse(source, {
    breaks: true,
    gfm: true,
    pedantic: false,
  }) as string;
}

/**
 * Convert a throwing function to return `null` instead of throwing
 *
 * The optional `warn` callback is called for inputs that throw, so
 * you can log them or something.
 */
export function convertThrowsToNulls<T, U>(
  f: (_: T) => U,
  warn: (item: T, error: any) => void = () => {}
): (_: T) => U | null {
  return (args: T) => {
    try {
      return f(args);
    } catch (e) {
      warn(args, e);
      return null;
    }
  };
}

export function notEmpty<T>(value: T | null | undefined): value is T {
  if (value === null || value === undefined) return false;
  const testDummy: T = value;
  return true;
}
