import {
  array,
  decodeType,
  dict,
  field,
  fields,
  optional,
  record,
  string,
  union,
} from "typescript-json-decoder";
import { DecoderFunction, Pojo } from "typescript-json-decoder";
import matter from "gray-matter";

/** Post metadata such as the author, title, tags, etc. */
export type PostMetadata = decodeType<typeof decodeMetadata>;

/** Blog post consisting of metadata and body */
export interface BlogPost extends PostMetadata {
  body: string;
}

/** Try a decoder and return a default value in case it fails */
export const withDefault = <T>(
  decoder: DecoderFunction<T>,
  defaultValue: T
) => {
  return (value: Pojo) => {
    try {
      return decoder(value);
    } catch (_) {
      return defaultValue;
    }
  };
};

/**
 * Create date assuming a given time zone
 *
 * The returned date has no time zone information attached as usual,
 * the time zone is just used to correctly initialize it.
 */
export function dateWithTimeZone(
  tz: string,
  year: number,
  zeroBasedMonth: number,
  day: number,
  hour = 0,
  minute = 0,
  second = 0
): Date {
  const date = new Date(
    Date.UTC(year, zeroBasedMonth, day, hour, minute, second)
  );
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const tzDate = new Date(date.toLocaleString("en-US", { timeZone: tz }));
  const offset = utcDate.getTime() - tzDate.getTime();
  return new Date(date.getTime() + offset);
}

/**
 * Decode a date from the `YYYY-MM-DD-hh-mm` / `YYY-MM-DD` format used in posts
 *
 * Since there is no time zone information in posts, we assume the time zone to
 * be “Europe/Prague”. This is slightly hacky, could it break something when we
 * move between standard and summer time?
 */
export const decodePostDate = (value: Pojo) => {
  const implicitTimeZone = "Europe/Prague";
  const str = string(value);
  const matches = str.split("-");
  if (matches.length == 5) {
    const [year, month, day, hour, minute] = matches.map((s) => parseInt(s));
    return dateWithTimeZone(
      implicitTimeZone,
      year,
      month - 1,
      day,
      hour,
      minute
    );
  } else if (matches.length == 3) {
    const [year, month, day] = matches.map((s) => parseInt(s));
    return dateWithTimeZone(implicitTimeZone, year, month - 1, day);
  } else {
    throw `Failed to parse post date: ${str}.`;
  }
};

/** Decode post metadata from an object */
export const decodeMetadata = record({
  title: string,
  authorId: field("author", string),
  coverImageUrl: field("cover", string),
  date: (val) => decodePostDate(val).toISOString(),
  path: fields({ date: decodePostDate, slug: string }, ({ date, slug }) =>
    getPostPath(date, slug)
  ),
  slug: string,
  description: string,
  lang: withDefault(union("cs", "en"), "cs"),
  tags: withDefault(array(string), []),
  langVersion: optional(dict(string)),
});

/** Decode post from a standard frontmatter + body text file */
export function decodeBlogPost(
  src: string,
  defaults: Record<string, any> = {}
): BlogPost {
  const { content, data } = matter(src);
  const mergedMeta = { ...defaults, ...data };
  return {
    body: content,
    ...decodeMetadata(mergedMeta),
  };
}

export function compareBlogPostsByDate(a: BlogPost, b: BlogPost): number {
  const da = new Date(a.date);
  const db = new Date(b.date);
  return db.getTime() - da.getTime();
}

/** Get post path such as `/2022/01/cist-digital-30` */
export function getPostPath(date: Date, slug: string): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `/${year}/${month.toString().padStart(2, "0")}/${slug}`;
}

/** Strip blog post body, returning just the metadata */
export function stripBlogPostBody(post: BlogPost): PostMetadata {
  const { body, ...meta } = post;
  return meta;
}
