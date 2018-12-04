import React, {Component} from 'react';
import {view as Title} from '../../../components/pageTitle/';

import sectionImg01 from './images/sec04-img01.png';
import sectionImg02 from './images/sec04-img02.png';

const sections = [{
  title: '中国情感挽回行业服务首批从业者',
  para: '橘子情感是国内首家情感行业开创者，开启国内情感婚姻挽回问题专业解决的先河。其创始人嘉伟独创了情感危机专家和倩感分析师两个新兴行业，受到业界同行的纷纷效仿支持，被誉为中国情感挽回行业开创者和首批从业者。',
  img: sectionImg01
}, {
  title: '七大系统专家竭诚服务',
  para: '由国内顶尖情感挽回专家、进化心理学专家、婚姻家庭咨询师、情感挽回师、情感维稳师、女性心理侧写师、国家二级心理咨询师联合组成专注于两性情感解决方案提供面对面实战服务，挽回婚姻。',
  img: sectionImg02
}];

class Content extends Component {
  render() {
    return (
      <div className="page05-sec03-content">
	{
	  sections.map((item, index) => {
	    return (
	      <div className="section" key={index}>
		<div className="title">
		  <i></i>
		  <h3>{item.title}</h3>
		</div>
		<div className="inner">
		  <p>{item.para}</p>
		  <div className="img">
		    <img src={item.img} alt="配图" />
		  </div>
		</div>
	      </div>
	    );
	  })
	}
      </div>
    );
  }
}

class Sec04 extends Component {
  render() {
    return (
      <div className="page05-sec04">
	<Title title="橘子情感优势" />
	<Content />
      </div>
    );
  }
}

export default Sec04;
