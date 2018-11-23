import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import Sec1 from './sec1';
import Sec2 from './sec2';
import Sec3 from './sec3';

import bannerImage from './images/banner.png';

import toPc from '../../../utilities/toPc';

import '../../style.css';
import './style.css';

class Page01 extends React.Component {
  componentWillMount() {
    toPc();
  }

  render() {
    return (
      <div className="page01">
	<Header home={false} title="挽回爱情" />
	<img className="page01-banner" src={bannerImage} alt="关于我们" title="关于我们" />
	<Sec1 />
	<Sec2 />
	<Sec3 />
	<Footer />
      </div>
    );
  }
}

export default Page01;
