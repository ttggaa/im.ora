import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import Sec01 from './sec01';
import Sec02 from './sec02';
import Sec03 from './sec03';
import Sec04 from './sec04';
import Sec05 from './sec05';
import Sec06 from './sec06';

import toPc from '../../../utilities/toPc';

import '../../style.css';
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
	<Sec01 />
	<Sec02 />
	<Sec03 />
	<Sec04 />
	<Sec05 />
	<Sec06 />
	<Footer />
      </div>
    )
  }
};

export default Page02;
