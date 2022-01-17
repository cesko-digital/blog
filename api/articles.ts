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

function getArticleMetadata(path: string): Record<string, unknown> {
  const src = fs.readFileSync(path, { encoding: 'utf-8' });
  const { content, data } = matter(src);
  return data;
}

export default async (_: VercelRequest, response: VercelResponse) => {
  const root = __dirname + '/../content/posts';
  const posts = getFilesRecursively(root)
    .filter((path) => path.endsWith('.md'))
    .map(getArticleMetadata);
  const out = JSON.stringify(posts, null, 2);
  response.status(200);
  response.setHeader('Content-type', 'application/json');
  response.send(out);
};
