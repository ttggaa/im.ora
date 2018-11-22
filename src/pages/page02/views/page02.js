import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import Service from './service.js';
import Circuit from './circuit.js';
import Guarantee from './guarantee.js';

import toPc from '../../../utilities/toPc';

import './style.css';

import bannerImage from './images/banner.png';

toPc();

const Page02 = () => (
  <div className="page02">
    <Header home={false} title="服务范围"/>
    <img className="page02-banner" src={bannerImage} alt="服务范围_权威专家" />
    <Service />
    <Circuit />
    <Guarantee />
    <Footer />
  </div>
);

export default Page02;
