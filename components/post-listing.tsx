import { Author } from "lib/author";
import { BlogPost } from "lib/post";
import PostCard from "./post-card";

interface Props {
  posts: readonly BlogPost[];
  authors: readonly Author[];
}

const PostListing: React.FC<Props> = ({ posts, authors }) => {
  const firstPost = posts[0];
  const otherPosts = [...posts.slice(1, posts.length)];
  const authorOf = (post: BlogPost) =>
    authors.find((a) => a.id === post.authorId)!;
  return (
    <div className="post-listing-row">
      <div className="main-post">
        <PostCard post={firstPost} author={authorOf(firstPost)} />
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
