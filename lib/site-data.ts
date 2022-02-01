import { Author, getAllAuthors } from "./author";
import { BlogPost } from "./post";
import { getAllPosts } from "./post-loading";

export interface SiteData {
  posts: readonly BlogPost[];
  pressReleases: readonly BlogPost[];
  authors: readonly Author[];
}

function loadSiteData(): SiteData {
  const posts = getAllPosts("content/posts");
  const pressReleases = getAllPosts("content/press");
  const authors = getAllAuthors("content/authors.yaml");
  return filterUndefines({
    posts,
    pressReleases,
    authors,
  });
}

// This is a hack, see https://github.com/vercel/next.js/issues/11993
const filterUndefines = <T>(data: T): T => JSON.parse(JSON.stringify(data));

export const siteData = loadSiteData();
