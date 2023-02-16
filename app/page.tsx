import { PostMetadata } from "lib/post";
import { siteData } from "lib/site-data";
import PostCard from "components/post-card";
import PressReleaseListing from "components/press-releases";

const Home = () => {
  const authors = siteData.authors;
  const [firstPost, ...otherPosts] = siteData.posts;
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

export default Home;
