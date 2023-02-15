import { stripBlogPostBody } from "lib/post";
import { siteData } from "lib/site-data";
import PostListing from "components/post-listing";
import Layout from "components/layout";

const Home = () => {
  const { authors } = siteData;
  const pressReleases = siteData.pressReleases
    .map(stripBlogPostBody)
    .slice(0, 6);
  const posts = siteData.posts.map(stripBlogPostBody);
  return (
    <Layout
      title="Blog Česko.Digital"
      description="Skrz jedničky a nuly měníme Česko k lepšímu"
      coverUrl="https://data.cesko.digital/img/172a1526.png"
    >
      <div>
        <PostListing
          posts={posts}
          pressReleases={pressReleases}
          authors={authors}
        />
      </div>
    </Layout>
  );
};

export default Home;
