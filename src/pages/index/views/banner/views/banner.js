import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';

import './style.css';

import bannerImage from './images/banner.png';

class Banner extends React.Component {
  render() {
    return (
      <div className="index-banner">
	<img src={bannerImage} alt="首页 | 橘子情感" title="首页 | 橘子情感" />
      </div>
    );
  }
}

export default Banner;
