import { Item } from "feed";
import { feedItemFromBlogPost } from "./utils";

test("Convert blog post to feed item", () => {
  expect(
    feedItemFromBlogPost({
      title: "Nice!",
      description: "This is why things are nice.",
      date: "Wed Feb 02 2022 11:54:20 GMT+0100 (CET)",
      body: "**Yada yada**",
      path: "/2022/02/nice",
    })
  ).toEqual<Item>({
    title: "Nice!",
    description: "This is why things are nice.",
    date: new Date("Wed Feb 02 2022 11:54:20 GMT+0100 (CET)"),
    content: "<p><strong>Yada yada</strong></p>\n",
    link: "https://blog.cesko.digital/2022/02/nice",
  });
});
