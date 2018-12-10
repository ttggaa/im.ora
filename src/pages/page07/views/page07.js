import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';

import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

import bannerImg from './images/banner.png';
import mentor01 from './images/mentor01.png';
import mentor02 from './images/mentor02.png';
import mentor03 from './images/mentor03.png';
import mentor04 from './images/mentor04.png';
import mentor05 from './images/mentor05.png';

const Banner = (props) => (  // banner
  <div className="page07-banner">
    <img
      src={bannerImg}
      alt="权威专家 | 橘子情感" 
      title="权威专家 | 橘子情感" 
    />
  </div>
);

const Sec01 = () => (  // 模块一
  <div className="page07-sec01">
    <p className="text-indent text-justify">橘子情感的导师团队，均为资深全职导师，其中包括平均从业4年以上的国家心理咨询师、专业心理侧写师、国家级婚恋咨询师、庸感挽回专家、情感维稳师等专业导师，为您的爱情保驾护航。</p>
    <p className="text-indent text-justify">每一段感情，都值得被珍惜；而每一位用户，都会在这里得到最专业、最全面的指导服务。橘子情感的所有情感导师，均秉承着“专业、责任、奉献”的核心价值观，将挽回爱情、捍卫幸福视为己任。因为专业，所以卓越，橘子情感的成功率和口碑，也一直引领业界。而主导师团队开设的“全国情感导师培植计划”，多年来也为整个行业输送了大批优秀的从业人才。</p>
  </div>
);

class Sec02 extends React.Component {  // 模块二：橘子情感首席导师
  render() {
    return (
      <div className="page07-sec02">
        <h1 className="title text-center">橘子情感首席导师</h1>
	<div className="mentor-item">
	  <img src={mentor01} alt="导师配图" />
	</div>
	<div className="mentor-item">
	  <img src={mentor02} alt="导师配图" />
	</div>
	<div className="mentor-item">
	  <img src={mentor03} alt="导师配图" />
	</div>
	<div className="mentor-item">
	  <img src={mentor04} alt="导师配图" />
	</div>
	<div className="mentor-item">
	  <img src={mentor05} alt="导师配图" />
	</div>
      </div>
    );
  }
}

class Page07 extends React.Component {
  render() {
    return (
      <div className="page07">
	<Header home={false} title="权威专家" />
        <Banner />
	<Sec01 />
	<Sec02 />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page07;

