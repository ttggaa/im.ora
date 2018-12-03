import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';

import toPc from '../../../utilities/toPc';

import 'swiper/dist/css/swiper.min.css';
import '../../style.css';
import './style.css';

import bannerImage from './images/banner.png';
import icon01 from './images/icon-1.png';
import icon02 from './images/icon-2.png';
import icon03 from './images/icon-3.png';
import icon04 from './images/icon-4.png';
import icon05 from './images/icon-5.png';
import icon06 from './images/icon-6.png';
import articleImg01 from './images/image-1.png';
import articleImg02 from './images/image-2.png';
import articleImg03 from './images/image-3.png';
import articleImg04 from './images/image-4.png';
import articleImg05 from './images/image-5.png';

const sec01Items = [  // 模块一数据
  [  // 第一页轮播图数据
    {
      icon: icon01,
      title: '有了目标',
      des: [
	'有了心仪已久的目标，整日关注',
	'却畏手畏脚，不知如何行动'
      ]
    },
    {
      icon: icon02,
      title: '不会表达',
      des: [
	'不懂得如何表达自己的心意',
	'担心贸然行动，会让关系闹僵'
      ]
    },
    {
      icon: icon03,
      title: '没有机会',
      des: [
	'没有机会和对方接触，感觉和TA',
	'像两条平行线，永远没有交集'
      ]
    }
  ],
  [  // 第二页轮播图数据
    {
      icon: icon04,
      title: '目标抵触',
      des: [
	'尝试过，失败过，TA似乎对你没',
	'有兴趣，不接受你的任何行为'
      ]
    },
    {
      icon: icon05,
      title: '目标喜欢别人',
      des: [
	'你爱的人，爱的人不是你',
	'TA有另一位心仪的对象，你的竞争力不足'
      ]
    },
    {
      icon: icon06,
      title: '甘为备胎',
      des: [
	'你一味地付出，最终却只能沦落为备胎',
	'你很无奈，担心不这样更没有机会'
      ]
    }
  ]
];

const sec02Items = [  // 模块二数据
  [  // 第一组
    {
      title: '盲目付出',
      para: '一味地投入时间、金钱、感情，却给对方徒增压力导致滋生价值感低下'
    },
    {
      title: '贸然表白',
      para: '在关系热度不到位的情况下，盲目表白，结果让自己的处境陷入被动和尴尬'
    }
  ],
  [  // 第二组
    {
      title: '频繁邀约',
      para: '目的性强烈，不顾及对方感受，频繁邀约导致对方反感'
    },
    {
      title: '线上缠聊',
      para: '需求感爆棚，将对方作为生活全部，一有时间就缠着对方聊天'
    }
  ]
];

const sec03Items = [  // 模块三数据
  {
    title: '文章标题',
    des: 'des',
    img: articleImg01
  },
  {
    title: '文章标题',
    des: 'des',
    img: articleImg02
  },
  {
    title: '文章标题',
    des: 'des',
    img: articleImg03
  },
  {
    title: '文章标题',
    des: 'des',
    img: articleImg04
  },
  {
    title: '文章标题',
    des: 'des',
    img: articleImg05
  }
];

const SecTitle = ({title}) => (  // 模块标题
  <h1 className="page03-title">{title}</h1>
);

class Sec01 extends React.Component {  // 模块一：单身原因
  render() {
    return (
      <div className="page03-sec01">
	<SecTitle title="单身原因" />
	<div className="page03-sec01-content">
	  <div className="swiper-container" ref="swiper">
	    <div className="swiper-wrapper">
	      {
		sec01Items.map((item, index) => {
		  return (
		    <div className="swiper-slide" key={index}>
		      {
			item.map((innerItem, innerIndex) => {
			  return (
			    <div className="item" key={innerIndex}>
			      <div className="item-icon">
			        <img src={innerItem.icon} alt={innerItem.title} />
			      </div>
			      <div className="item-text">
			        <h3 className="text-center">{innerItem.title}</h3>
				{
				  innerItem.des.map((desItem, desIndex) => {
				    return (
				      <p key={desIndex}>{desItem}</p>
				    );
				  })
				}
			      </div>
			    </div>
			  );
			})
		      }
		    </div>
		  );
		})
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
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}

const Sec02 = () => (  // 模块二：错误做法导致后果
  <div className="page03-sec02">
    <SecTitle title="错误做法导致后果" />
    {
      sec02Items.map((item, index) => {
	return (
	  <div className="page03-sec02-group" key={index}>
	    {
	      item.map((innerItem, innerIndex) => {
		return (
		  <div className="page03-sec02-group-item" key={innerIndex}>
		    <h2 className="text-center">{innerItem.title}</h2>
		    <p className="text-justify">{innerItem.para}</p>
		  </div>
		);
	      })
	    }
	  </div>
	);
      })
    }
  </div>
);

const Sec03 = () => (  // 模块三：成功案例
  <div className="page03-sec03">
    <SecTitle title="成功案例" />
    <div className="page03-sec03-content">
      {
	sec03Items.map((item, index) => {
	  return (
	    <div className="item" key={index}>
	      <div className="item-text">
	        <h3>{item.title}</h3>
	        <p>{item.des}</p>
	      </div>
	      <div className="item-img">
		<img src={item.img} alt="文章配图" />
	      </div>
	    </div>
	  );
	})
      }
    </div>
  </div>
);

class Content extends React.Component {  // 页面三内容
  render() {
    return (
      <div className="page03-content">
	<Sec01 />
	<Sec02 />
	<Sec03 />
      </div>
    );
  }
}

class Page03 extends React.Component {
  componentWillMount() {
    toPc();
  }

  render() {
    return (
      <div className="page03">
	<Header home={false} title="定制爱情" />
	<img className="page03-bannerImage" src={bannerImage} alt="权威专家" />
	<Content />
	<Footer />
      </div>
    );
  }
}

export default Page03;
