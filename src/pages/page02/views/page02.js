import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';

import toPc from '../../../utilities/toPc';

import './style.css';

import bannerImage from './images/banner.png';

class Page02 extends React.Component {
  componentWillMount() {
    toPc();
  }

  render() {
    return (
      <div className="page02">
	<Header home={false} title="服务范围"/>
	<img className="page02-banner" src={bannerImage} alt="服务范围_权威专家" />
	<Footer />
      </div>
    )
  }
};

export default Page02;
