import React, {Component} from 'react';

import {view as Title} from '../../../components/pageTitle/';
import {view as ArticleList} from '../../../components/articleList/';

import anliImg1 from './images/anli-1.png';
import anliImg2 from './images/anli-2.png';
import anliImg3 from './images/anli-3.png';
import anliImg4 from './images/anli-4.png';
import anliImg5 from './images/anli-5.png';

const articles = [{
  url: 'page01_article01',
  title: '文章标题',
  des: '文章描述',
  image: anliImg1
}, {
  url: 'page01_article02',
  title: '文章标题',
  des: '文章描述',
  image: anliImg2
}, {
  url: 'page01_article03',
  title: '文章标题',
  des: '文章描述',
  image: anliImg3
}, {
  url: 'page01_article04',
  title: '文章标题',
  des: '文章描述',
  image: anliImg4
}, {
  url: 'page01_article05',
  title: '文章标题',
  des: '文章描述',
  image: anliImg5
}];

class Sec3 extends Component {
  render() {
    return (
      <div className="page01-sec03">
	<Title title="成功案例" />
	{
	  articles.map((item, index) => {
	    return (
	      <ArticleList key={index}
		articleUrl={`../${item.url}`}
		articleTitle={item.title}
		articleDescription={item.des}
		articleImage={item.image}
	      />
	    );
	  })
	}
      </div>
    );
  }
}

export default Sec3;
