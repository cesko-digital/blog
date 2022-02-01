import { BlogPost } from "lib/post";
import { siteData } from "lib/site-data";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  post: BlogPost;
}

interface QueryParams extends ParsedUrlQuery {
  path: string[];
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props, QueryParams> = async (
  context
) => {
  const { path } = context.params!;
  const mergedPath = "/" + path.join("/");
  const post = siteData.posts.find((post) => post.path === mergedPath)!;
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths<QueryParams> = async () => {
  const paths = siteData.posts.map((post) => ({
    params: { path: post.path.split("/").slice(1) },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
