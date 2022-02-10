import { markdownToMJML, renderMJML } from "lib/mjml";
import { siteData } from "lib/site-data";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const wantedPath = request.query.path as string;
  const post = siteData.posts.find(
    (p) => p.path === "/" + wantedPath.replace(".mjml", "")
  )!;
  const mjml = markdownToMJML(post.body);
  response.setHeader("Content-Type", "text/plain");
  response.status(200).send(renderMJML(mjml));
}
