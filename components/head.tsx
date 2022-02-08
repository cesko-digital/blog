import { default as NextHead } from "next/head";

interface HeadProps {
  title: string;
  description: string;
  coverUrl?: string;
}

const Head: React.FC<HeadProps> = (props) => {
  const { title, description, coverUrl } = props;
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={coverUrl} />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <script
        defer
        data-domain="blog.cesko.digital"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </NextHead>
  );
};

export default Head;
