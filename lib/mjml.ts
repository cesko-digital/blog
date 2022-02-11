import fs from "fs";
import { BlogPost } from "./post";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { Content } from "mdast";

export type MJText = {
  type: "text";
  text: string;
};

export interface MJImage {
  type: "image";
  src: string;
  padding?: string;
}

export type MJContent = MJText | MJImage;

export interface MJSection {
  backgroundColor?: string;
  fullWidth?: boolean;
  content: MJContent[];
}

export interface MJDocument {
  styles?: string;
  sections: MJSection[];
}

export function blogPostToMJML(post: BlogPost): MJDocument {
  const styles = fs.readFileSync("content/mailing.css", { encoding: "utf-8" });
  return {
    styles: styles,
    sections: [
      /* Cover image */
      {
        fullWidth: true,
        backgroundColor: "blue",
        content: [
          {
            type: "image",
            src: post.coverImageUrl,
            padding: "0",
          },
        ],
      },
      /* Intro text */
      {
        fullWidth: true,
        backgroundColor: "#f3f3f3",
        content: [
          {
            type: "text",
            text: `<p>${post.description}</p>`,
          },
        ],
      },
      /* Post body */
      ...parseMarkdownToSections(post.body),
    ],
  };
}

/**
 * Parse Markdown to sections with HTML content
 *
 * Theoretically we could just produce one big section with all the HTML content
 * inside. Practically, images in such section would not be responsive 💩 So let’s
 * break the HTML content by block images and place those in separate sections using
 * <mj-image>, that way they should be responsive.
 *
 * The algorithm is to look for top-level paragraphs that only have one single image
 * as a sole child. These images should break the document into separate <mj-section>s.
 */
export function parseMarkdownToSections(markdown: string): MJSection[] {
  const parser = unified().use(remarkParse);
  const renderer = unified().use(remarkHtml);
  const root = parser.parse(markdown);

  let accumulatedContent: Content[] = [];
  let sections: MJSection[] = [];

  const wrap = (children: Content[]) => ({
    type: "root",
    children,
  });

  const flushAccumulatedContent = () => {
    if (accumulatedContent.length > 0) {
      const html = renderer.stringify(
        wrap(accumulatedContent)
      ) as any as string;
      sections.push({
        content: [
          {
            type: "text",
            text: html,
          },
        ],
      });
    }
  };

  for (const node of root.children) {
    if (
      node.type === "paragraph" &&
      node.children.length === 1 &&
      node.children[0].type === "image"
    ) {
      const img = node.children[0];
      flushAccumulatedContent();
      sections.push({
        content: [
          {
            type: "image",
            src: img.url,
          },
        ],
      });
    } else {
      accumulatedContent.push(node);
    }
  }

  flushAccumulatedContent();

  return sections;
}

export function renderMJML(document: MJDocument): string {
  const { sections, styles } = document;
  const content = sections.map(renderMJMLSection).join("\n\n");
  return `
    <mjml>
      <mj-head>
        <mj-attributes>
          <mj-all font-family="cesko-digital, Helvetica" color="#333" />
          <mj-text font-size="17px" line-height="160%" />
          <mj-section padding="0" />
        </mj-attributes>
        <mj-style>
        ${styles}
        </mj-style>
      </mj-head>
      <mj-body>
      ${content}
      </mj-body>
    </mjml>
    `;
}

function renderMJMLSection(section: MJSection): string {
  const content = section.content.map(renderMJMLContent).join("\n\n");
  const { backgroundColor, fullWidth } = section;
  const attributes = {
    "background-color": backgroundColor,
    "full-width": fullWidth ? "full-width" : undefined,
  };
  const str = Object.entries(attributes)
    .filter(([_, value]) => !!value)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
  return `
    <mj-section ${str}>
        <mj-column>
            ${content}
        </mj-column>
    </mj-section>
    `;
}

function renderMJMLContent(content: MJContent): string {
  if (content.type === "image") {
    return `<mj-image src="${content.src}" padding=${content.padding}/>`;
  } else if (content.type === "text") {
    return `<mj-text>${content.text}</mj-text>`;
  }
  throw "Unknown MJML content type.";
}
