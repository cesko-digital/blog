import { Author, getAllAuthors } from "./author";
import { BlogPost, compareBlogPostsByDate } from "./post";
import { getAllPosts } from "./post-loading";
import { join, resolve } from "path";

export interface SiteData {
  posts: readonly BlogPost[];
  pressReleases: readonly BlogPost[];
  authors: readonly Author[];
}

function loadSiteData(): SiteData {
  const content = resolve(process.cwd(), "content");
  console.log(`Loading data files from ${content}`);
  const byDate = compareBlogPostsByDate;
  const posts = getAllPosts(join(content, "posts")).sort(byDate);
  const pressReleases = getAllPosts(join(content, "press")).sort(byDate);
  const authors = getAllAuthors(join(content, "authors.yaml"));
  console.log(
    `Loaded ${posts.length} posts, ${pressReleases.length} press releases, ${authors.length} authors.`
  );
  return {
    posts,
    pressReleases,
    authors,
  };
}

export const siteData = loadSiteData();
