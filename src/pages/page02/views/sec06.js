import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import Title from './title';

const slides = [
  {number: 1, text: '资讯专业导师'},
  {number: 2, text: '付费签约'},
  {number: 3, text: '多对一导师团'},
  {number: 4, text: '执行挽回方案'},
  {number: 5, text: '后期情感维稳'},
  {number: 6, text: '客户档案销毁'},
];

class Content extends Component {
  render() {
    return (
      <div className="page02-sec06-content">
	<div className="swiper-container" ref="swiper">
	  <div className="swiper-wrapper">
	    {
	      slides.map((item, index) => {
		return (
		  <div className="swiper-slide" key={index}>
		    <span className="number text-center">{item.number}</span>
		    <span className="text">{item.text}</span>
		  </div>
		);
	      })
	    }
	  </div>
	  <div class="swiper-scrollbar" ref="scrollbar"></div>
	</div>
      </div>
    );
  }

  componentDidMount() {
    new Swiper(this.refs.swiper, {
      observer: true,
      autoplay: false,  // 不自动播放
      delay: 5000,
      loop: false,  // 不循环
      slidesPerView: 3,  // 预览个数
      spaceBetween: 30,  // 自定义宽度
      freeMode: true,  // 自由模式
      scrollbar: {
        el: this.refs.scrollbar
      }
    });
  }
}

class Sec06 extends Component {
  render() {
    return (
      <div className="page02-sec06">
	<Title title="挽回爱情服务流程" />
	<Content />
      </div>
    );
  }
}

export default Sec06;
