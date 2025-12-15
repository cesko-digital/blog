import {
  decodeMetadata,
  decodePostDate,
  stripBlogPostBody,
  getPostPath,
  dateWithTimeZone,
} from "./post";
import {
  parsePostPath,
  readBlogPost,
  getFilesRecursively,
} from "./post-loading";
import test from "node:test";
import assert from "node:assert";

test("Decode date with timezone support", () => {
  assert.deepEqual(
    dateWithTimeZone("UTC", 2022, 0, 10),
    new Date("2022-01-10T00:00:00.000Z")
  );
  assert.deepEqual(
    dateWithTimeZone("UTC", 2022, 0, 10, 10),
    new Date("2022-01-10T10:00:00.000Z")
  );
  assert.deepEqual(
    dateWithTimeZone("Europe/Prague", 2022, 0, 10, 10),
    new Date("2022-01-10T09:00:00.000Z")
  );
});

test("Get post path", () => {
  assert.equal(
    getPostPath(new Date("2022-01-10T00:25:00.000Z"), "foo"),
    "/2022/01/foo"
  );
  assert.equal(
    getPostPath(new Date("2022-12-10T00:25:00.000Z"), "foo"),
    "/2022/12/foo"
  );
});

test("Decode post date", () => {
  assert.strictEqual(
    decodePostDate("2022-01-10-01-25").toISOString(),
    "2022-01-10T00:25:00.000Z"
  );
  assert.strictEqual(
    decodePostDate("2021-8-24").toISOString(),
    "2021-08-23T22:00:00.000Z"
  );
});

test("Decode basic metadata", () => {
  assert.deepStrictEqual(
    decodeMetadata({
      title: "Spolupráce s Česko.Digital",
      author: "marek",
      cover: "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
      date: "2022-01-10-01-25",
      slug: "pribeh-inkubacniho-procesu",
      description: "Příběh tříměsíčního designového procesu…",
    }),
    {
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
    }
  );
});

test("Decode metadata for language versions", () => {
  assert.deepStrictEqual(
    decodeMetadata({
      title: "Spolupráce s Česko.Digital",
      author: "marek",
      cover: "https://data.cesko.digital/img/clanek-pohyb-je-reseni/2.png",
      date: "2022-01-10-01-25",
      slug: "pribeh-inkubacniho-procesu",
      description: "Příběh tříměsíčního designového procesu…",
      langVersion: { cs: "/2019/11/rozhovor-vereha" },
    }),
    {
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
    }
  );
});

test("Parse post path", () => {
  assert.deepStrictEqual(parsePostPath("2022-01-26-cist-digital-30.md"), [
    new Date("2022-01-26"),
    "cist-digital-30",
  ]);
  assert.throws(() => parsePostPath("2021-2-90-cist-digital.md"));
  assert.throws(() => parsePostPath("2021-2-cist-digital.md"));
  assert.throws(() => parsePostPath("2021-2-12-.md"));
  assert.throws(() => parsePostPath("2021-2-12-křeč.md"));
  assert.throws(() => parsePostPath("2021-2-12-sleva-50%.md"));
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
  assert.equal(meta["body"], undefined);
});
