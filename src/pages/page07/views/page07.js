import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';

import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

import bannerImg from './images/banner.png';

const Banner = (props) => (  // banner
  <div className="page07-banner">
    <img
      src={bannerImg}
      alt="权威专家 | 橘子情感" 
      title="权威专家 | 橘子情感" 
    />
  </div>
);

class Sec01 extends React.Component {  // 模块一
  render() {
    return (
      <div className="page07-sec01">
      </div>
    );
  }
}

class Sec02 extends React.Component {  // 模块二：橘子情感首席导师
  render() {
    return (
      <div className="page07-sec02">
        sec02
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

