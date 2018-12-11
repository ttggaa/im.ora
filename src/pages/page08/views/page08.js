import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Title} from '../../../components/pageTitle/';

import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

import bannerImg from './images/banner.png';

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
    sec01 ...
  </div>
);

class Page08 extends React.Component {
  render() {
    return (
      <div className="page08">
	<Header home={false} title="成功案例" />
	<Banner />
	<Sec01 />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page08;
