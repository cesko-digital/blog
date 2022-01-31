import { NextPage, GetStaticProps } from "next";
import { Author, getAllAuthors } from "lib/author";
import { BlogPost, getAllPosts } from "lib/post";
import { filterUndefines } from "lib/utils";

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
  const posts = getAllPosts("content/posts");
  const authors = getAllAuthors("content/authors.yaml");
  return {
    props: filterUndefines({
      posts,
      authors,
    }),
  };
};

export default Home;
