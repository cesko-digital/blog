import {
  decodeMetadata,
  getPublicPostURL,
  Metadata,
  parsePath,
  readBlogPost,
} from "./post";
import { getFilesRecursively } from "./utils";

test("Decode post metadata", () => {
  expect(
    decodeMetadata({
      title: "Spolupráce s Česko.Digital",
      author: "marek",
      cover: "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
      date: "2022-01-10-01-25",
      slug: "pribeh-inkubacniho-procesu",
      description: "Příběh tříměsíčního designového procesu…",
    })
  ).toEqual<Metadata>({
    title: "Spolupráce s Česko.Digital",
    authorId: "marek",
    coverImageUrl:
      "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
    date: "2022-01-10-01-25",
    slug: "pribeh-inkubacniho-procesu",
    description: "Příběh tříměsíčního designového procesu…",
    lang: "cs",
    tags: [],
  });
});

test("Parse post path", () => {
  expect(parsePath("2022-01-26-cist-digital-30.md")).toEqual([
    new Date("2022-01-26"),
    "cist-digital-30",
  ]);
  expect(() => parsePath("2021-2-90-cist-digital.md")).toThrow();
  expect(() => parsePath("2021-2-cist-digital.md")).toThrow();
  expect(() => parsePath("2021-2-12-.md")).toThrow();
  expect(() => parsePath("2021-2-12-křeč.md")).toThrow();
  expect(() => parsePath("2021-2-12-sleva-50%.md")).toThrow();
});

test("Parse all posts", () => {
  const postPaths = getFilesRecursively("content/posts").filter((path) =>
    path.endsWith(".md")
  );
  for (const path of postPaths) {
    try {
      const _ = readBlogPost(path);
    } catch (e) {
      throw `Post fails to decode: ${path}: ${e}`;
    }
  }
  console.log(`Successfully decoded ${postPaths.length} posts.`);
});

test("Parse all press releases", () => {
  const postPaths = getFilesRecursively("content/press").filter((path) =>
    path.endsWith(".md")
  );
  for (const path of postPaths) {
    try {
      const _ = readBlogPost(path);
    } catch (e) {
      throw `Post fails to decode: ${path}: ${e}`;
    }
  }
  console.log(`Successfully decoded ${postPaths.length} press releases.`);
});

test("Get public post URL", () => {
  expect(
    getPublicPostURL({ date: "2022-01-26-12-13", slug: "cist-digital-30" })
  ).toEqual("https://blog.cesko.digital/2022/01/cist-digital-30");
});
