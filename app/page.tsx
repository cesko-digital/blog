import { PostMetadata } from "shared/post";
import { getAllAuthors, getAllBlogPosts } from "shared/site-data";
import PostCard from "shared/post-card";
import PressReleaseListing from "shared/press-releases";
import { Metadata } from "next";

const Home = () => {
  const authors = getAllAuthors();
  const [firstPost, ...otherPosts] = getAllBlogPosts();
  const authorOf = (post: PostMetadata) =>
    authors.find((a) => a.id === post.authorId)!;
  return (
    <div className="post-listing-row">
      <div className="main-post">
        <PostCard
          post={firstPost}
          author={authorOf(firstPost)}
          showCover={true}
        />
      </div>

      <div className="press-release-box">
        <PressReleaseListing />
      </div>

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
