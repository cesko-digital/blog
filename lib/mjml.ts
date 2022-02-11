import { markdownToHTML } from "./utils";
import { BlogPost } from "./post";
import fs from "fs";

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
  const text = markdownToHTML(post.body);
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
      {
        content: [
          {
            type: "text",
            text,
          },
        ],
      },
    ],
  };
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
