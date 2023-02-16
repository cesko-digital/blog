import { siteData } from "shared/site-data";
import Link from "next/link";

const PressReleaseListing = () => {
  const posts = siteData.pressReleases.slice(0, 6);
  const formatDate = (stamp: string) =>
    new Date(stamp).toLocaleDateString("cs-CZ", { dateStyle: "medium" });
  return (
    <div className="press-release-listing">
      <div className="press-release-row">
        <img
          src={"/press-releases.svg"}
          className="press-release-icon"
          alt=""
        />
        <h2 className="press-release-title">Tiskové zprávy</h2>
      </div>
      {posts.map((post) => (
        <div key={post.path}>
          <div className="press-release-divider" />
          <Link href={post.path} className="press-release-link">
            <span className="press-release-text">
              {formatDate(post.date)} • {post.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PressReleaseListing;
