var visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'image', node => {
    if (node.url.startsWith('/')) {
      node.url = node.url + '?nf_resize=fit&w=720';
    }
  });
};
