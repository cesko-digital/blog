import {
  decodeMetadata,
  decodePostDate,
  stripBlogPostBody,
  getPostPath,
  PostMetadata,
} from "./post";
import {
  parsePostPath,
  readBlogPost,
  getFilesRecursively,
} from "./post-loading";

describe("Decoding primitives", () => {
  test("Post date", () => {
    expect(decodePostDate("2022-01-10-01-25")).toEqual(
      new Date("2022-01-10T00:25:00.000Z")
    );
    expect(decodePostDate("2021-8-24")).toEqual(
      new Date("2021-08-23T22:00:00.000Z")
    );
  });
  test("Post path", () => {
    expect(getPostPath(new Date("2022-01-10T00:25:00.000Z"), "foo")).toBe(
      "/2022/01/foo"
    );
    expect(getPostPath(new Date("2022-12-10T00:25:00.000Z"), "foo")).toBe(
      "/2022/12/foo"
    );
    expect(getPostPath(new Date("2022-01-31T23:00:00.000Z"), "foo")).toBe(
      "/2022/02/foo"
    );
  });
});

describe("Decode post metadata", () => {
  test("Basic metadata", () => {
    expect(
      decodeMetadata({
        title: "Spolupráce s Česko.Digital",
        author: "marek",
        cover: "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
        date: "2022-01-10-01-25",
        slug: "pribeh-inkubacniho-procesu",
        description: "Příběh tříměsíčního designového procesu…",
      })
    ).toEqual<PostMetadata>({
      title: "Spolupráce s Česko.Digital",
      path: "/2022/01/pribeh-inkubacniho-procesu",
      authorId: "marek",
      coverImageUrl:
        "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
      date: "2022-01-10T00:25:00.000Z",
      slug: "pribeh-inkubacniho-procesu",
      description: "Příběh tříměsíčního designového procesu…",
      lang: "cs",
      langVersion: undefined,
      tags: [],
    });
  });
  test("Language versions", () => {
    expect(
      decodeMetadata({
        title: "Spolupráce s Česko.Digital",
        author: "marek",
        cover: "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
        date: "2022-01-10-01-25",
        slug: "pribeh-inkubacniho-procesu",
        description: "Příběh tříměsíčního designového procesu…",
        langVersion: { cs: "/2019/11/rozhovor-vereha" },
      })
    ).toEqual<PostMetadata>({
      title: "Spolupráce s Česko.Digital",
      path: "/2022/01/pribeh-inkubacniho-procesu",
      authorId: "marek",
      coverImageUrl:
        "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
      date: "2022-01-10T00:25:00.000Z",
      slug: "pribeh-inkubacniho-procesu",
      description: "Příběh tříměsíčního designového procesu…",
      lang: "cs",
      langVersion: new Map([["cs", "/2019/11/rozhovor-vereha"]]),
      tags: [],
    });
  });
});

test("Parse post path", () => {
  expect(parsePostPath("2022-01-26-cist-digital-30.md")).toEqual([
    new Date("2022-01-26"),
    "cist-digital-30",
  ]);
  expect(() => parsePostPath("2021-2-90-cist-digital.md")).toThrow();
  expect(() => parsePostPath("2021-2-cist-digital.md")).toThrow();
  expect(() => parsePostPath("2021-2-12-.md")).toThrow();
  expect(() => parsePostPath("2021-2-12-křeč.md")).toThrow();
  expect(() => parsePostPath("2021-2-12-sleva-50%.md")).toThrow();
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
});

test("Strip blog post body", () => {
  const meta = stripBlogPostBody({
    title: "Spolupráce s Česko.Digital",
    path: "/2022/01/pribeh-inkubacniho-procesu",
    authorId: "marek",
    coverImageUrl:
      "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
    date: "2022-01-10T00:25:00.000Z",
    slug: "pribeh-inkubacniho-procesu",
    description: "Příběh tříměsíčního designového procesu…",
    lang: "cs",
    langVersion: undefined,
    tags: [],
    body: "foo",
  }) as any;
  expect(meta["body"]).toBeUndefined();
});
