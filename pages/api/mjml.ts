import { blogPostToMJML, renderMJML } from "lib/mjml";
import { siteData } from "lib/site-data";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const queryPath = request.query.path as string;

  if (!queryPath) {
    response.status(400).send("Missing “path” parameter.");
    return;
  }

  const wantedPath = "/" + queryPath.replace(".mjml", "");
  const post = siteData.posts.find((p) => p.path === wantedPath);
  if (!post) {
    response.status(404).send(`Source post not found for path: ${wantedPath}`);
    return;
  }

  const mjml = blogPostToMJML(post);
  response.setHeader("Content-Type", "text/plain; encoding=utf-8");
  response.status(200).send(renderMJML(mjml));
}
