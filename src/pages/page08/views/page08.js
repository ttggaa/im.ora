import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Title} from '../../../components/pageTitle/';

import 'swiper/dist/css/swiper.min.css';
import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

import bannerImg from './images/banner.png';
import icon2012 from './images/2012.png';
import icon2013 from './images/2013.png';
import icon2014 from './images/2014.png';
import icon2015 from './images/2015.png';
import icon2016 from './images/2016.png';
import icon2017 from './images/2017.png';

// 模块二图标
import swiperImg01 from './images/image01.png';
import swiperImg02 from './images/image02.png';

// 模块三图标
import sec03icon01 from './images/icon-1.png';
import sec03icon02 from './images/icon-2.png';
import sec03icon03 from './images/icon-3.png';
import sec03icon04 from './images/icon-4.png';

// 模块四图片
import sec04icon01 from './images/01.png';
import sec04icon02 from './images/02.png';
import sec04icon03 from './images/03.png';
import sec04icon04 from './images/04.png';
import sec04icon05 from './images/05.png';
import sec04icon06 from './images/06.png';
import sec04icon07 from './images/07.png';
import sec04icon08 from './images/08.png';
import sec04icon09 from './images/09.png';
import sec04icon10 from './images/10.png';
import sec04icon11 from './images/11.png';
import sec04icon12 from './images/12.png';

const sec01Items = [  // 模块一数据
  {
    icon: icon2012,
    title: '2012年',
    para: '嘉伟导师携手业内众多顶尖导师，在香港、澳门、台湾等地，开设巡讲班，将行业推至更高的高度。深化社会使命感，受到各界认可。'
  },
  {
    icon: icon2013,
    title: '2013年',
    para: '设立行业标准，开设了全国情感导师培植计划，统一规范了从业资格，提高整体行业平均水平。被众多主流媒体争相报道。'
  },
  {
    icon: icon2014,
    title: '2014年',
    para: '获得山东省心理讲课教育资讯中心授权单位资格。在解决情感心理健康方面，橘子情感不断不遗余力实现自己的社会价值。'
  },
  {
    icon: icon2015,
    title: '2015年',
    para: '荣获山东省婚恋资讯协会先进单位。橘子情感开创的情感挽回师、婚恋维稳师等职业，为行业输送了大量人才，并开设分公司，填补市场需求。'
  },
  {
    icon: icon2016,
    title: '2016年',
    para: '获得家庭婚恋服务协会理事单位资格。以信仰幸福、学会感恩的态度，帮助数万名用户，重获幸福。并且受中美澳联合国际医学研究院邀请，开设《幸福讲座》。'
  },
  {
    icon: icon2017,
    title: '2017年',
    para: '荣获十大杰出诚信企业，橘子情感一直以做有良心、有社会责任感的阳光企业为方向，客户好评率高达98.5%，引领着整个行业的发展方向。'
  }
];

const sec02Items = [  // 模块二数据
  {
    img: swiperImg01,
    alt: '橘子环境配图'
  },
  {
    img: swiperImg02,
    alt: '橘子环境配图'
  }
];

const sec03Items = [  // 模块三数据
  {
    title: '无微不至',
    para: '所有付费用户的清况都会有专属的专业导师组，多对一进行指导，任何问题及时得到解答，用户情感状况的每一个转折点，都在导师掌握中。',
    icon: sec03icon01
  },
  {
    title: '专业团队',
    para: '橘子情感所有导师，均为业内资深导师，有着平均多年以上的实战指导经验，在两性情感学都有着多年的研究经验。',
    icon: sec03icon02
  },
  {
    title: '私人定制',
    para: '每一位用户的清况，都会得到重视，无论是总体战略，还是每一步细节操作，均为结合具体清况的私人订制方案确保成功率。',
    icon: sec03icon03
  },
  {
    title: '用户保障',
    para: '橘子情感作为行业的标杆，对行业的发展有着一份沉甸甸的责任。以身作则，将用户的权益放在首位，保障用户隐私以及情况解决。',
    icon: sec03icon04
  }
];

const sec04Items = [  // 模块四数据
  [sec04icon01, sec04icon02, sec04icon03, sec04icon04],
  [sec04icon05, sec04icon06, sec04icon07, sec04icon08],
  [sec04icon09, sec04icon10, sec04icon11, sec04icon12]
];

const Banner = () => (  // Banner
  <div className="page08-banner">
    <img
      src={bannerImg}
      alt="关于我们 | 橘子情感" 
      title="关于我们 | 橘子情感" 
    />
    <div className="text">
      <p className="text-indent text-justify">橘子情感，自创办以来，一直引领着整个行业的进步和发展。为了让广大用户更好的学会爱与被爱的能力，让用户在爱情中更加有尊严，更加从容，更加自由。橘子情感汇聚了国内知名两性情感咨询师、婚恋家庭咨询师、资深情感挽回师、心理学专家等，用最专业的师资团队，打造全国最专业的情感咨询机构。</p>
      <p className="text-indent text-justify">橘子情感的创办初衷，是针对解决广大民众的情感挽回、婚姻修复等社会问题，但逐渐发现，中国在情感教育方面是完全缺失的。现在，我们要解决的，不仅仅是简单的情感问题，更是整个时代的情感教育缺失。</p>
    </div>
  </div>
);

const Sec01 = () => (  // 模块一
  <div className="page08-sec01">
    <div className="group">
      {
        sec01Items.map((item, index) => (
	  <div className="item" key={index}>
	    <div className="icon">
	      <img src={item.icon} alt={item.title} />
	    </div>
	    <div className="text">
	      <h4>{item.title}</h4>
	      <p className="text-justify">{item.para}</p>
	    </div>
	  </div>
	))
      }
    </div>
    <span className="line"></span>
  </div>
);

class Sec02 extends React.Component {  // 模块二：橘子环境
  render() {
    return (
      <div className="page08-sec02">
        <Title title="橘子环境" />
        <div className="content">
	  <div className="swiper-container" ref="swiper">
	    <div className="swiper-wrapper">
	      {
	        sec02Items.map((item, index) => (
		  <div className="swiper-slide" key={index}>
		    <img src={item.img} alt={item.alt} />
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
      spaceBetween: 15,  // 间隔
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}

const Sec03 = () => (  // 模块三：给您的保障
  <div className="page08-sec03">
    <Title title="给您的保障" />
    <div className="content-group">
      {
        sec03Items.map((item, index) => (
	  <div className="item" key={index}>
	    <h3>
	      <i></i> {item.title}
	    </h3>
	    <div className="item-box">
	      <p className="text-justify">{item.para}</p>
	      <img src={item.icon} alt="图标" />
	    </div>
	  </div>
	))
      }
    </div>
  </div>
);

const Sec04 = () => (  // 模块四：合作媒体
  <div className="page08-sec04">
    <Title title="合作媒体" />
    <div className="content">
      {
        sec04Items.map((item, index) => (
	  <div className="item" key={index}>
	    {
	      item.map((innerItem, innerIndex) => (
		<img src={innerItem} key={innerIndex} />
	      ))
	    }
	  </div>
	))
      }
    </div>
  </div>
);

class Page08 extends React.Component {
  render() {
    return (
      <div className="page08">
	<Header home={false} title="成功案例" />
	<Banner />
	<Sec01 />
	<Sec02 />
	<Sec03 />
	<Sec04 />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page08;
