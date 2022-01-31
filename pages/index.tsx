import { NextPage, GetStaticProps } from "next";
import { Author } from "lib/author";
import { BlogPost } from "lib/post";
import { siteData } from "lib/site-data";

interface Props {
  posts: readonly BlogPost[];
  authors: readonly Author[];
}

const Home: NextPage<Props> = ({ posts, authors }) => {
  return (
    <p>
      Máme tu celkem {posts.length} textů od {authors.length} autorů.
    </p>
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
