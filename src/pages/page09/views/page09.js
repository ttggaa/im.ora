import React from 'react';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Title} from '../../../components/pageTitle/';

import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

class Page09 extends React.Component {
  render() {
    return (
      <div className="page09">
	<Header home={false} title="嘉伟导师十本好书推荐" />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page09;
