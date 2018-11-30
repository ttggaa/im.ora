import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';

import toPc from '../../../utilities/toPc';

import './style.css';

import bannerImage from './images/banner.png';

class Page03 extends React.Component {
  componentWillMount() {
    toPc();
  }

  render() {
    return (
      <div className="page03">
	<Header home={false} title="定制爱情" />
	<img className="page03-bannerImage" src={bannerImage} alt="权威专家" />
	<Footer />
      </div>
    );
  }
}

export default Page03;
