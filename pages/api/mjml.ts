import { blogPostToMJML, renderMJML } from "lib/mjml";
import { siteData } from "lib/site-data";
import type { NextApiRequest, NextApiResponse } from "next";
import mjml2html from "mjml";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const queryPath = request.query.path as string;
  const wantsHtml = !!request.query.html;
  const extension = wantsHtml ? ".newsletter" : ".mjml";

  if (!queryPath) {
    response.status(400).send("Missing “path” parameter.");
    return;
  }

  const wantedPath = "/" + queryPath.replace(extension, "");
  const post = siteData.posts.find((p) => p.path === wantedPath);
  if (!post) {
    response.status(404).send(`Source post not found for path: ${wantedPath}`);
    return;
  }

  const mjml = renderMJML(blogPostToMJML(post));
  if (wantsHtml) {
    response.setHeader("Content-Type", "text/html; encoding=utf-8");
    response.status(200).send(mjml2html(mjml).html);
  } else {
    response.setHeader("Content-Type", "text/plain; encoding=utf-8");
    response.status(200).send(mjml);
  }
}
