import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import Swiper from 'swiper/dist/js/swiper.min.js';

import toPc from '../../../utilities/toPc';

import 'swiper/dist/css/swiper.min.css';
import '../../style.css';
import './style.css';

import bannerImg01 from './images/banner01.png';
import bannerImg02 from './images/banner02.png';
import bannerImg03 from './images/banner03.png';

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

class Page06 extends React.Component {
  render() {
    return (
      <div className="page06">
	<Header home={false} title="情感论坛" />
	<BannerSwiper />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page06;
