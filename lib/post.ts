import {
  array,
  decodeType,
  field,
  record,
  string,
  union,
} from "typescript-json-decoder";
import { getFilesRecursively, withDefault } from "./utils";
import matter from "gray-matter";
import fs from "fs";

export type Metadata = decodeType<typeof decodeMetadata>;

export interface BlogPost extends Metadata {
  body: string;
}

export const decodeMetadata = record({
  title: string,
  authorId: field("author", string),
  coverImageUrl: field("cover", string),
  date: string,
  slug: string,
  description: string,
  lang: withDefault(union("cs", "en"), "cs"),
  tags: withDefault(array(string), []),
});

/** Decode article from a standard frontmatter + body text file */
export function decodeBlogPost(
  src: string,
  defaults: Record<string, any> = {}
): BlogPost {
  const { content, data } = matter(src);
  const mergedMeta = { ...defaults, ...data };
  return {
    body: content,
    ...decodeMetadata(mergedMeta),
  };
}

/**
 * Parse article path to get article date and slug
 *
 * The expected filename format is `2022-01-26-cist-digital-30.md`.
 */
export function parsePath(path: string): [Date, string] {
  const filename = path.replace(/^.*[\\\/]/, "");
  const matches = filename.match(/^(\d+-\d+-\d+)-(.*)\.md$/);

  if (!matches || matches.length < 2) {
    throw `Invalid file name format: ${filename}`;
  }

  const date = new Date(matches[1]);
  const slug = matches[2];

  if (isNaN(date.getTime())) {
    throw `Invalid date ${date} in ${filename}`;
  }

  if (!slug.match(/^[a-z0-9-_]+$/i)) {
    throw `Invalid slug “${slug}” in ${filename}`;
  }

  return [date, slug];
}

/**
 * Read blog post from a file
 *
 * This also automatically fills in the correct default values for
 * `slug` and `date`.
 */
export function readBlogPost(path: string): BlogPost {
  const src = fs.readFileSync(path, { encoding: "utf-8" });
  const [date, slug] = parsePath(path);
  return decodeBlogPost(src, { date, slug });
}

/** Read all blog posts under a given directory root */
export function getAllPosts(root: string): BlogPost[] {
  return getFilesRecursively(root)
    .filter((path) => path.endsWith(".md"))
    .map(readBlogPost);
}

/** Get public post URL */
export function getPublicPostURL(
  post: Pick<BlogPost, "date" | "slug">
): string | undefined {
  const matches = post.date.match(/^(\d+)-(\d+)/);
  if (!matches || matches.length < 2) {
    return;
  }
  const year = matches[1];
  const month = matches[2].padStart(2, "0");
  return `https://blog.cesko.digital/${year}/${month}/${post.slug}`;
}
