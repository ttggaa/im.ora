import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import Title from './title.js';

import 'swiper/dist/css/swiper.min.css';
import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

import icon01 from './images/sec01-icon01.png';
import icon02 from './images/sec01-icon02.png';
import icon03 from './images/sec01-icon03.png';
import icon04 from './images/sec01-icon04.png';
import icon05 from './images/sec01-icon05.png';
import icon06 from './images/sec01-icon06.png';

import img01 from './images/image-1.png';
import img02 from './images/image-2.png';
import img03 from './images/image-3.png';
import img04 from './images/image-4.png';
import img05 from './images/image-5.png';

import anli01 from './images/anli-1.png';
import anli02 from './images/anli-2.png';
import anli03 from './images/anli-3.png';
import anli04 from './images/anli-4.png';
import anli05 from './images/anli-5.png';

const sec01Items = [  // 模块一数据: 擅长挽回的婚姻类型
  [
    {
      icon: icon01,
      text: '第三者插足'
    },
    {
      icon: icon02,
      text: '性格不合'
    }
  ],
  [
    {
      icon: icon03,
      text: '两地分局'
    },
    {
      icon: icon04,
      text: '经济矛盾'
    }
  ],
  [
    {
      icon: icon05,
      text: '婆媳关系'
    },
    {
      icon: icon06,
      text: '家庭冷暴力'
    }
  ]
];

const sec02Items = [  // 模块二数据: 婚姻危机出现的原因
  [
    {
      title: '两地分居，信任缺失',
      img: img01
    }
  ],
  [
    {
      title: '性格不合，长期争吵',
      img: img02
    }
  ],
  [
    {
      title: '婆媳关系，子女教育',
      img: img03
    }
  ],
  [
    {
      title: '沟通不畅，三观不合',
      img: img04
    }
  ],
  [
    {
      title: '婚外情，第三者',
      img: img05
    }
  ]
];

const articles = [{  // 模块三数据: 成功案例
  title: '文章标题',
  des: '文章描述',
  image: anli01
}, {
  title: '文章标题',
  des: '文章描述',
  image: anli02
}, {
  title: '文章标题',
  des: '文章描述',
  image: anli03
}, {
  title: '文章标题',
  des: '文章描述',
  image: anli04
}, {
  title: '文章标题',
  des: '文章描述',
  image: anli05
}];

const Sec01 = () => (  // 模块一: 擅长挽回的婚姻类型
  <div className="page02-sec01">
    <Title title="擅长挽回的婚姻类型" />
    <div className="page02-sec01-content">
      {
	sec01Items.map((item, index) => {
	  return (
	    <div className="group" key={index}>
	      {
		item.map((innerItem, innerIndex) => {
		  return (
		    <div className="group-item" key={innerIndex}>
		      <div className="img">
			<img src={innerItem.icon} alt={innerItem.text} />
		      </div>
		      <span>{innerItem.text}</span>
		    </div>
		  )
		})
	      }
	    </div>
	  );
	})
      }
    </div>
  </div>
);

class Sec02 extends React.Component {  // 模块二: 婚姻危机出现的原因
  render() {
    return (
      <div className="page02-sec02">
	<Title title="婚姻危机出现的原因" />
	<div className="page02-sec02-content">
	  <div className="swiper-container" ref="swiper">
	    <div className="swiper-wrapper">
	      {
		sec02Items.map((item, index) => {
		  return (
		    <div className="swiper-slide" key={index}>
		      <div className="title text-center">
		        <i></i>
			<span>{item[0].title}</span>
		      </div>
		      <div className="img text-center">
		        <img src={item[0].img} alt={item[0].title} />
		      </div>
		    </div>
		  )
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

const Sec03 = () => (  // 模块三: 成功案例
  <div className="page02-sec03">
    <Title title="成功案例" />
    <div className="page02-sec03-content">
      {
	articles.map((item, index) => {
	  return (
	    <div className="page02-sec03-content-item" key={index}>
	      <div className="page02-sec03-content-item-text">
		<h3 className="text-justify">{item.title}</h3>
		<p className="text-justify">{item.des}</p>
	      </div>
	      <div className="page02-sec03-content-item-img">
		<img src={item.image} alt={item.title} />
	      </div>
	    </div>
	  );
	})
      }
    </div>
  </div>
);

const Content = () => (
  <div className="page02-content">
    <Sec01 />
    <Sec02 />
    <Sec03 />
  </div>
);

class Page02 extends React.Component {
  render() {
    return (
      <div className="page02">
	<Header home={false} title="挽救婚姻" />
	<Content />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page02;

