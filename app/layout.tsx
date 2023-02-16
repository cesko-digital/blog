import Footer from "app/footer";
import NavigationBar from "app/navigation-bar";
import "../global.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://blog.cesko.digital/rss.xml"
        ></link>
        <script
          data-domain="blog.cesko.digital"
          src="https://plausible.io/js/plausible.js"
          defer
        />
      </head>
      <body>
        <div className="main-wrapper">
          <NavigationBar />
          <div className="content-wrapper">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
