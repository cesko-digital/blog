import { BlogPost } from "lib/post";

interface Props {
  posts: readonly BlogPost[];
}

const PressReleaseListing: React.FC<Props> = ({ posts }) => {
  const formatDate = (stamp: string) =>
    new Date(stamp).toLocaleDateString("cs-CZ", { dateStyle: "medium" });
  return (
    <div className="press-release-listing">
      <div className="press-release-row">
        <img src={"/press-releases.svg"} className="press-release-icon" />
        <h2 className="press-release-title">Tiskové zprávy</h2>
      </div>
      {posts.map((post) => (
        <div key={post.path}>
          <div className="press-release-divider" />
          <a href={post.path} className="press-release-link">
            <span className="press-release-text">
              {formatDate(post.date)} • {post.title}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PressReleaseListing;
