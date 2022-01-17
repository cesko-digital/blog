import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';

/** Returns a flat array of all files under given directory */
function getFilesRecursively(dir: string): string[] {
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

function getArticleURL(metadata: Record<string, unknown>): string | undefined {
  const date = metadata['date'];
  if (typeof date !== 'string') {
    return;
  }
  const slug = metadata['slug'];
  if (typeof slug !== 'string') {
    return;
  }
  const matches = date.match(/^(\d+)-(\d+)/);
  if (!matches || matches.length < 2) {
    return;
  }
  const year = matches[1];
  const month = matches[2];
  return `https://blog.cesko.digital/${year}/${month}/${slug}`;
}

function getArticleMetadata(path: string): Record<string, unknown> {
  const src = fs.readFileSync(path, { encoding: 'utf-8' });
  const { content, data } = matter(src);
  return {
    url: getArticleURL(data),
    ...data,
  };
}

export default async (_: VercelRequest, response: VercelResponse) => {
  const root = __dirname + '/../content/posts';
  const posts = getFilesRecursively(root)
    .filter((path) => path.endsWith('.md'))
    .map(getArticleMetadata);
  const out = JSON.stringify(posts, null, 2);
  response.status(200);
  response.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate=300');
  response.setHeader('Content-type', 'application/json');
  response.send(out);
};
