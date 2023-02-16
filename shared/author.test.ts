import { getAllAuthors } from "./author";

test("Decode authors", () => {
  const authors = getAllAuthors("content/authors.yaml");
  console.log(`Successfully decoded ${authors.length} authors.`);
});
