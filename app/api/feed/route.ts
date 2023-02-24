import { Feed } from "feed";
import { getAllBlogPosts } from "shared/site-data";
import { feedItemFromBlogPost } from "shared/utils";

export async function GET(request: Request) {
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
  const { searchParams } = new URL(request.url);
  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "Content-Type": searchParams.get("plain")
        ? "text/plain"
        : "application/rss+xml",
    },
  });
}
