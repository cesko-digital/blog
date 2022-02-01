import { siteData } from "lib/site-data";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  foo: string;
}

interface QueryParams extends ParsedUrlQuery {
  path: string;
}

const Post: NextPage<Props> = ({ foo }) => {
  return <h1>{foo}</h1>;
};

export const getStaticProps: GetStaticProps<Props, QueryParams> = async (
  context
) => {
  const { path } = context.params!;
  return {
    props: {
      foo: path,
    },
  };
};

export const getStaticPaths: GetStaticPaths<QueryParams> = async () => {
  const paths = siteData.posts.map((post) => ({ params: { path: post.path } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
