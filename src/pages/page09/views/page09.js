import React from 'react';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Title} from '../../../components/pageTitle/';

import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

import bannerImg from './images/banner.png';

const Banner = () => (  // Banner
  <div className="page09-banner">
    <img
      src={bannerImg}
      alt="嘉伟导师十本好书推荐 | 橘子情感" 
      title="嘉伟导师十本好书推荐 | 橘子情感" 
    />
  </div>
);

class Page09 extends React.Component {
  render() {
    return (
      <div className="page09">
	<Header home={false} title="嘉伟导师十本好书推荐" />
	<Banner />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page09;
