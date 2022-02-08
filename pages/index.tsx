import { NextPage, GetStaticProps } from "next";
import { Author } from "lib/author";
import { BlogPost } from "lib/post";
import { siteData } from "lib/site-data";
import Head from "components/head";
import PostListing from "components/post-listing";

interface Props {
  posts: readonly BlogPost[];
  authors: readonly Author[];
}

const Home: NextPage<Props> = ({ posts, authors }) => {
  return (
    <div className="main-wrapper">
      <div className="index-container">
        <Head
          title="Blog Česko.Digital"
          description="Skrz jedničky a nuly měníme svět k lepšímu."
          coverUrl="https://data.cesko.digital/img/172a1526.png"
        />
        <PostListing posts={posts} authors={authors} />
        <p>Here be dragons.</p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { posts, authors } = siteData;
  return {
    props: {
      posts,
      authors,
    },
  };
};

export default Home;
