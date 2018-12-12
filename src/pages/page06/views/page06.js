import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Title} from '../../../components/pageTitle/';
import {view as ArticleList} from '../../../components/articleList/';

import toPc from '../../../utilities/toPc';

import 'swiper/dist/css/swiper.min.css';
import '../../style.css';
import './style.css';

// 轮播图图片
import bannerImg01 from './images/banner01.png';
import bannerImg02 from './images/banner02.png';
import bannerImg03 from './images/banner03.png';

// 文章列表图片
import img01 from './images/img01.png';
import img02 from './images/img02.png';
import img03 from './images/img03.png';
import img04 from './images/img04.png';
import img05 from './images/img05.png';
import img06 from './images/img06.png';
import img07 from './images/img07.png';
import img08 from './images/img08.png';
import img09 from './images/img09.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
import img12 from './images/img12.png';
import img13 from './images/img13.png';
import img14 from './images/img14.png';
import img15 from './images/img15.png';

const bannerItems = [  // 模块一轮播图数据
  {
    img: bannerImg01,
    title: '嘉伟导师十本好书推荐'
  },
  {
    img: bannerImg02,
    title: 'title of banner02'
  },
  {
    img: bannerImg03,
    title: 'title of banner03'
  }
];

const sec02Items = [
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img01
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img02
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img03
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img04
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img05
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img06
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img07
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img08
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img09
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img10
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img11
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img12
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img13
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img14
  },
  {
    url: './',
    title: 'title of article',
    des: 'des of article',
    img: img15
  },
];

class BannerSwiper extends React.Component {  // 模块一：轮播图
  render() {
    return (
       <div className="page06-banner">
	 <div className="content">
	   <div className="swiper-container" ref="swiper">
	     <div className="swiper-wrapper">
	       {
		 bannerItems.map((item, index) => (
		   <div className="swiper-slide" key={index}>
		     <div className="img">
		       <img src={item.img} alt={item.title} />
		     </div>
		     <div className="title">
		       <p>{item.title}</p>
		     </div>
		   </div>
		 ))
	       }
	     </div>
	     <div className="swiper-pagination"></div>
	   </div>
	 </div>
       </div>
    );
  }

  componentDidMount() {
    new Swiper(this.refs.swiper, {
      observer: true,
      autoplay: false,
      delay: 5000,
      loop: true,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}

const Sec02 = () => (  // 模块二：情感问答
  <div className="page06-sec02">
    <Title title="情感问答" />
    <div className="content">
      {
        sec02Items.map((item, index) => (
	  <ArticleList 
	    key={index}
	    articleUrl={item.url}
	    articleTitle={item.title}
	    articleDescription={item.des}
	    articleImage={item.img}
	  />
	))
      }
    </div>
  </div>
);

class Page06 extends React.Component {
  render() {
    return (
      <div className="page06">
	<Header home={false} title="情感论坛" />
	<BannerSwiper />
	<Sec02 />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page06;
