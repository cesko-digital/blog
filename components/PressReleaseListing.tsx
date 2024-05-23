import { getAllPressReleases } from "shared/site-data";
import Link from "next/link";
import Image from "next/image";

const PressReleaseListing = () => {
  const posts = getAllPressReleases().slice(0, 6);
  const formatDate = (stamp: string) =>
    new Date(stamp).toLocaleDateString("cs-CZ", { dateStyle: "medium" });
  return (
    <div className="border-2 border-gray rounded-xl p-5">
      <div className="flex flex-row items-center mb-4 gap-2">
        <Image src="/press-releases.svg" width={22} height={20} alt="" />
        <h2 className="typo-title3">Tiskové zprávy</h2>
      </div>
      {posts.map((post) => (
        <div key={post.path}>
          <Link
            href={post.path}
            className="block border-t-[1px] border-gray py-3 hover:bg-pebble hover:px-5 hover:-mx-5"
          >
            {formatDate(post.date)} • {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PressReleaseListing;
