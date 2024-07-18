import { PostMetadata } from "shared/post";
import { getAllAuthors, getAllBlogPosts } from "shared/site-data";
import PostCard from "components/PostCard";
import PressReleaseListing from "components/PressReleaseListing";
import { Metadata } from "next";

const Home = () => {
  const authors = getAllAuthors();
  const [firstPost, ...otherPosts] = getAllBlogPosts();
  const authorOf = (post: PostMetadata) =>
    authors.find((a) => a.id === post.authorId)!;
  return (
    <div className="grid lg:grid-cols-3 gap-7">
      <div className="lg:col-span-2">
        <PostCard
          post={firstPost}
          author={authorOf(firstPost)}
          showCover={true}
        />
      </div>
      <PressReleaseListing />
      {otherPosts.map((post) => (
        <div className="post-listing-post" key={post.path}>
          <PostCard post={post} author={authorOf(post)} />
        </div>
      ))}
    </div>
  );
};

export const metadata: Metadata = {
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

export default Home;
