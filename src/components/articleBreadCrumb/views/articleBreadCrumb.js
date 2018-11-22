import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ArticleBreadCrumb = ({text, url}) => (
  <div className="article-breadCrumb">
    <a href="../../../">首页</a>
    <i></i>
    <a href={url}>{text}</a>
  </div>
);

ArticleBreadCrumb.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ArticleBreadCrumb;
