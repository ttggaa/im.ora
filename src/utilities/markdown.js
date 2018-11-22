import MarkdownIt from 'markdown-it';
// import markdownItContainer from 'markdown-it-container';
import markdownItAttrs from 'markdown-it-attrs';

import 'github-markdown-css/github-markdown.css';

const markdown = new MarkdownIt({
  typographer: true,
  linkify: true
});

markdown
  // .use(markdownItContainer, 'avatar-box')  // 文章页导师头像
  .use(markdownItAttrs)
  ;

export default markdown;
