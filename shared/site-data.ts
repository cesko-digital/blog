import { getAllAuthors as getAllAuthorsFromFile } from "./author";
import { compareBlogPostsByDate } from "./post";
import { getAllPosts } from "./post-loading";
import { join, resolve } from "path";
import { cache } from "react";

const contentRoot = resolve(process.cwd(), "content");

export const getAllBlogPosts = cache(() =>
  getAllPosts(join(contentRoot, "posts")).sort(compareBlogPostsByDate)
);

export const getAllPressReleases = cache(() =>
  getAllPosts(join(contentRoot, "press")).sort(compareBlogPostsByDate)
);

export const getAllAuthors = cache(() =>
  getAllAuthorsFromFile(join(contentRoot, "authors.yaml"))
);
