import { NextApiRequest, NextApiResponse } from "next";
import { Feed } from "feed";
import { getAllBlogPosts } from "shared/site-data";
import { feedItemFromBlogPost } from "shared/utils";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const feed = new Feed({
    title: "Česko.Digital",
    description: "Skrz jedničky a nuly měníme Česko k lepšímu",
    id: "https://blog.cesko.digital/",
    link: "https://blog.cesko.digital/",
    language: "cs",
    image: "https://data.cesko.digital/img/172a1526.png",
    copyright: "Česko.Digital a přispěvatelé",
  });
  getAllBlogPosts().map(feedItemFromBlogPost).forEach(feed.addItem);
  response.setHeader(
    "Content-Type",
    request.query.plain ? "text/plain" : "application/rss+xml"
  );
  response.setHeader(
    "Cache-Control",
    "max-age=0, s-maxage=60, stale-while-revalidate=86400"
  );
  response.status(200).send(feed.rss2());
}
