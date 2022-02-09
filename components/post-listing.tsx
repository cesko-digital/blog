import { Author } from "lib/author";
import { Metadata } from "lib/post";
import PostCard from "./post-card";
import PressReleaseListing from "./press-releases";

interface Props {
  posts: readonly Metadata[];
  pressReleases: readonly Metadata[];
  authors: readonly Author[];
}

const PostListing: React.FC<Props> = ({ posts, pressReleases, authors }) => {
  const firstPost = posts[0];
  const otherPosts = [...posts.slice(1, posts.length)];
  const authorOf = (post: Metadata) =>
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
        <PressReleaseListing posts={pressReleases} />
      </div>

      {otherPosts.map((post) => (
        <div className="post-listing-post" key={post.path}>
          <PostCard post={post} author={authorOf(post)} />
        </div>
      ))}
    </div>
  );
};

export default PostListing;
