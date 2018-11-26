import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import Title from './title';

import icon01 from './images/sec03-icon01.png';
import icon02 from './images/sec03-icon02.png';
import icon03 from './images/sec03-icon03.png';
import icon04 from './images/sec03-icon04.png';
import icon05 from './images/sec03-icon05.png';
import icon06 from './images/sec03-icon06.png';
import icon07 from './images/sec03-icon07.png';
import icon08 from './images/sec03-icon08.png';
import icon09 from './images/sec03-icon09.png';

class Content extends Component {
  render() {
    return(
      <div className="page02-sec03-content">
	<div className="para">
	  <p className="text-justify text-indent">你的专属导师团队，将从九大维度，全面分析指导您的具体情感问题。你在情感中会遇到的每个问题，都会被导师团队预估，并且解决。</p>
	</div>
	<div className="swiper-container" ref="swiper">
	  <div className="swiper-wrapper">
	    <div className="swiper-slide">
	      <div className="item">
		<img src={icon01} alt="配图" />
		<span>见面约会</span>
		<span>计划设计</span>
	      </div>
	      <div className="item">
		<img src={icon02} alt="配图" />
		<span>与对方的聊天</span>
		<span>实时指导</span>
	      </div>
	      <div className="item">
		<img src={icon03} alt="配图" />
		<span>长期恋爱关系</span>
		<span>维护计划</span>
	      </div>
	    </div>
	    <div className="swiper-slide">
	      <div className="item">
		<img src={icon04} alt="配图" />
		<span>成功概率</span>
		<span>全面分析</span>
	      </div>
	      <div className="item">
		<img src={icon05} alt="配图" />
		<span>具体的挽回</span>
		<span>行动方案</span>
	      </div>
	      <div className="item">
		<img src={icon06} alt="配图" />
		<span>对方心理的</span>
		<span>专业分析</span>
	      </div>
	    </div>
	    <div className="swiper-slide">
	      <div className="item">
		<img src={icon07} alt="配图" />
		<span>潜在竞争对手</span>
		<span>风险评估</span>
	      </div>
	      <div className="item">
		<img src={icon08} alt="配图" />
		<span>自身恋爱能力</span>
		<span>提升学习计划</span>
	      </div>
	      <div className="item">
		<img src={icon09} alt="配图" />
		<span>私人定制魅力</span>
		<span>提升计划</span>
	      </div>
	    </div>
	  </div>
	  <div className="swiper-pagination"></div>
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

class Sec03 extends Component {
  render() {
    return (
      <div className="page02-sec03">
	<Title title="“挽爱计划”九维帮助服务体系"/>
	<Content />
      </div>
    );
  }
}

export default Sec03;
