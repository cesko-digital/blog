import { BlogPost } from "./post";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { Heading, Content, Root } from "mdast";

export interface MailingSection {
  title?: string;
  content: string;
}

export interface Mailing {
  title: string;
  mainPhotoUrl: string;
  sections: MailingSection[];
}

export function mailingFromBlogPost(
  post: Pick<BlogPost, "body" | "coverImageUrl" | "title">
): Mailing {
  return {
    title: post.title,
    mainPhotoUrl: post.coverImageUrl,
    sections: parseSectionsFromMarkdown(post.body),
  };
}

export function parseSectionsFromMarkdown(markdown: string): MailingSection[] {
  const parser = unified().use(remarkParse);
  const renderer = unified().use(remarkStringify);

  const root = parser.parse(markdown);
  console.log(JSON.stringify(root, null, 2));

  let sections: MailingSection[] = [];
  let currentSection: Content[] = [];
  let lastSeenTitle: string | undefined = undefined;

  const outputSection = () => {
    sections.push({
      title: lastSeenTitle,
      content: renderer.stringify(wrap(currentSection)),
    });
    currentSection = [];
  };

  for (const node of root.children) {
    // H2 always starts a new section
    if (node.type === "heading" && node.depth === 2) {
      if (currentSection.length > 0) {
        outputSection();
      }
      lastSeenTitle = getHeadingText(node);
    } else {
      currentSection.push(node);
    }
  }

  if (currentSection.length > 0) {
    outputSection();
  }

  return sections;
}

function getHeadingText(heading: Heading): string {
  if (heading.children.length != 1) {
    throw "Assertion failed, got heading with more children.";
  }
  const child = heading.children[0];
  if (child.type !== "text") {
    throw "Assertion failed, got heading with non-text child.";
  }
  return child.value;
}

function wrap(children: Content[]): Root {
  return {
    type: "root",
    children,
  };
}
