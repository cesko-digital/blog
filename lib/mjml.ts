import { markdownToHTML } from "./utils";

export type MJText = {
  type: "text";
  text: string;
};

export interface MJImage {
  type: "image";
  src: string;
}

export type MJContent = MJText | MJImage;

export interface MJSection {
  content: MJContent[];
}

export interface MJDocument {
  sections: MJSection[];
}

export function markdownToMJML(markdown: string): MJDocument {
  const text = markdownToHTML(markdown);
  return {
    sections: [
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
  const content = document.sections.map(renderMJMLSection).join("\n\n");
  return `
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="cesko-digital, Helvetica" color="#333" />
      <mj-text font-size="17px" line-height="160%" />
      <mj-section padding="0" />
    </mj-attributes>
    <mj-style>
      @font-face {
        font-family: 'cesko-digital';
        font-style: normal;
        font-weight: 100;
        src: url(https://data.cesko.digital/font/regular.woff) format('woff');
      }

      @font-face {
        font-family: 'cesko-digital';
        font-style: normal;
        font-weight: bold;
        src: url(https://data.cesko.digital/font/bold.woff) format('woff');
      }

      h1 {
        line-height: 130%;
      }

      a {
        color: blue;
      }

      em {
        font-style: normal;
        font-weight: bold;
      }
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
  return `
    <mj-section>
        <mj-column>
            ${content}
        </mj-column>
    </mj-section>
  `;
}

function renderMJMLContent(content: MJContent): string {
  if (content.type === "image") {
    return `<mj-image src="${content.src}" />`;
  } else if (content.type === "text") {
    return `<mj-text>${content.text}</mj-text>`;
  }
  throw "Unknown MJML content type.";
}
