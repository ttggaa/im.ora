import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import Guarantee from './guarantee.js';
import Environment from './environment.js';
import Service from './service.js';
import Cooperation from './cooperation.js';

import bannerImage from './images/banner.png';
import boxImage01 from './images/image-1.png';
import boxImage02 from './images/image-2.png';

import toPc from '../../../utilities/toPc';

import './style.css';

class Page01 extends React.Component {
  componentWillMount() {
    toPc();
  }

  render() {
    return (
      <div className="page01">
	<Header home={false} title="小鱼简介" />
	<img className="page01-banner" src={bannerImage} alt="关于我们" title="关于我们" />
	<p className="page01-para">小鱼情感，是一家专注于情感挽回、婚姻修复、爱情保险等服务的大型互联网教育公司，汇聚了国内知名两性情感咨询师、婚恋家庭咨询师、资深情感挽回师、心理学专家等，创立之初便迅速崛起于中国两性情感资讯市场，用最专业的师资团队，打造全国最专业的情感咨询培训机构，现已是整个行业的领导者树立了行业标杆。</p>
	<div className="page01-box">
	  <div className="page01-box-images">
	    <img src={boxImage01} alt="奖杯" />
	    <img src={boxImage02} alt="奖杯" />
	  </div>
	  <div className="page01-box-content">
	    <h3>情感挽回我们最靠谱</h3>
	    <p>小鱼情感多年来的行业经验，总结了上万案例,结果表示92.6%的情感破裂问题，实际上都能通过科学合理的方法，挽回爱情。但遗憾的是，只有不到7%的人自己挽回成功。绝大部分人因为不了解这个行业，用了错误的方式，错失了原有的幸福。</p>
	    <p>小鱼情感作为行业的领军企业，已经累计帮助了16000+位用户，解决情感问题，成功率在92.6%以上。</p>
	  </div>
	</div>
	<div className="page01-infos">
	  <div>
	    <i></i>
	    <span>累计帮助用户</span>
	    <span>16000+</span>
	  </div>
	  <div>
	    <i></i>
	    <span>但是自己挽回的</span>
	    <span>成功率不到 <span className="orange">7%</span></span>
	  </div>
	</div>
	<Guarantee />
	<Environment />
	<Service />
	<Cooperation />
	<Footer />
      </div>
    );
  }
}

export default Page01;
