export const DATE_FORMAT = 'D. M. Y';

export const edgeToPost = postEdge => {
  const node = postEdge.node;
  let author = node.frontmatter.author || { name: null };
  return {
    slug: node.fields.slug,
    tags: node.frontmatter.tags,
    author: author.name,
    cover: node.frontmatter.cover,
    description: node.frontmatter.description,
    title: node.frontmatter.title,
    date: node.fields.date,
    excerpt: node.excerpt,
    timeToRead: node.timeToRead,
  };
};
