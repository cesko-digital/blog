import { stripBlogPostBody } from "lib/post";
import { siteData } from "lib/site-data";
import PostListing from "components/post-listing";

export const metadata = {
  title: "Blog Česko.Digital",
  openGraph: {
    title: "Blog Česko.Digital",
    description: "Skrz jedničky a nuly měníme Česko k lepšímu",
    locale: "cs-CZ",
    type: "website",
    images: [
      {
        url: "https://data.cesko.digital/img/172a1526.png",
      },
    ],
  },
};

const Home = () => {
  const { authors } = siteData;
  const posts = siteData.posts.map(stripBlogPostBody);
  return (
    <div>
      <PostListing posts={posts} authors={authors} />
    </div>
  );
};

export default Home;
