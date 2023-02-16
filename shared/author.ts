import { decodeType, record, string } from "typescript-json-decoder";
import * as yaml from "js-yaml";
import fs from "fs";

export type Author = decodeType<typeof decodeAuthor>;

export const decodeAuthor = record({
  id: string,
  name: string,
  email: string,
});

export function getAllAuthors(path: string): Author[] {
  const src = fs.readFileSync(path, { encoding: "utf-8" });
  const value = yaml.load(src);
  if (!Array.isArray(value)) {
    throw `Expected author list to be an array, got ${typeof value} instead.`;
  }
  return value.map(decodeAuthor);
}
