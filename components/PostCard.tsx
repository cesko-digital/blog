import { Author } from "shared/author";
import { PostMetadata } from "shared/post";
import Link from "next/link";

interface Props {
  post: PostMetadata;
  author: Author;
  showCover?: boolean;
}

const PostCard = ({ post, author, showCover = false }: Props) => {
  const formatDate = (stamp: string) =>
    new Date(stamp).toLocaleDateString("cs-CZ", { dateStyle: "medium" });
  return (
    <Link
      href={post.path}
      className="block border-2 border-gray rounded-xl post-card h-full overflow-clip hover:shadow-lg"
    >
      {/* TBD: Convert to next/image */}
      {showCover && (
        <img alt="" loading="lazy" width="100%" src={post.coverImageUrl} />
      )}
      <div className="p-5 flex flex-col gap-4">
        <div className="-mb-2 flex flex-row gap-2">
          <span>{formatDate(post.date)}</span>
          <span>{author.name}</span>
        </div>
        <h2 className="typo-title2">{post.title}</h2>
        <p className="line-clamp-3">{post.description}</p>
      </div>
    </Link>
  );
};

export default PostCard;
