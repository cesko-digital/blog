import fs from "fs";
import { resolve } from "path";
import { BlogPost, decodeBlogPost } from "./post";
import { convertThrowsToNulls, notEmpty } from "./utils";

/** Return a flat array of all files under given directory */
export function getFilesRecursively(dir: string): string[] {
  let found: string[] = [];
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const path = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      found = found.concat(getFilesRecursively(path));
    } else {
      found.push(path);
    }
  }
  return found;
}

/**
 * Read blog post from a file
 *
 * This also automatically fills in the correct default values for
 * `slug` and `date`.
 */
export function readBlogPost(path: string): BlogPost {
  const src = fs.readFileSync(path, { encoding: "utf-8" });
  const [date, slug] = parsePostPath(path);
  return decodeBlogPost(src, { date, slug });
}

/** Read all blog posts under a given directory root */
export function getAllPosts(root: string): BlogPost[] {
  const warn = (path: string) =>
    console.warn(`Failed to decode ${path}, skipping.`);
  return getFilesRecursively(root)
    .filter((path) => path.endsWith(".md"))
    .map(convertThrowsToNulls(readBlogPost, warn))
    .filter(notEmpty);
}

/**
 * Parse post path to get post date and slug
 *
 * The expected filename format is `2022-01-26-cist-digital-30.md`.
 */
export function parsePostPath(path: string): [Date, string] {
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
