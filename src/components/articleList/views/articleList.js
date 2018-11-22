import React from 'react';

import './style.css';

const ArticleList = ({articleUrl, articleTitle, articleDescription, articleImage}) => (
  <div className="section-list articles">
    <a className="section-list-item" href={articleUrl}>
      <div className="section-list-item-text">
	<h3>{articleTitle}</h3>
	<p>{articleDescription}</p>
      </div>
      <div className="section-list-item-image">
	<span className="section-list-item-image-mask"></span>
	<img src={articleImage} alt="文章配图" />
      </div>
    </a>
  </div>
);

export default ArticleList;
