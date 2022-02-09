import { NextPage, GetStaticProps } from "next";
import { Author } from "lib/author";
import { BlogPost } from "lib/post";
import { siteData } from "lib/site-data";
import PostListing from "components/post-listing";
import Layout from "components/layout";

interface Props {
  posts: readonly BlogPost[];
  pressReleases: readonly BlogPost[];
  authors: readonly Author[];
}

const Home: NextPage<Props> = ({ posts, pressReleases, authors }) => {
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { posts, authors } = siteData;
  const pressReleases = siteData.pressReleases.slice(0, 6);
  return {
    props: {
      posts,
      pressReleases,
      authors,
    },
  };
};

export default Home;
