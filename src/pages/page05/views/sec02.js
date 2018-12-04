import React, {Component} from 'react';
import {view as Title} from '../../../components/pageTitle/';

import img from './images/sec02.png';

class Content extends Component {
  render() {
    return (
      <div className="page05-sec02-content">
	<p className="text-justify text-indent">橘子情感多年来的行业经验，总结了上万案例，结果表示92.6％的情感破裂问题，实际上都能得到解决，通过科学合理的方法，最终挽回爱情。但遗憾的是，只有不到7％的人自己挽回成功。绝大部分人因为不了解这个行业，用了错误的方式错失了原有的幸福。</p>
	<p className="text-justify text-indent">橘子倩剧乍为行业的须军企业一直致力于解决中国情感市场的空缺，为更多人的爱情保驾护航。而执行了多年的“挽爱计划”，已经累计帮助了数万位用户，解决情感问题、拯救婚姻、提高恋爱能力以及维护长期关系不再出问题。</p>
	<div className="img">
	  <img src={img} alt="统计图" />
	</div>
      </div>
    );
  }
}

class Sec02 extends Component {
  render() {
    return (
      <div className="page05-sec02">
	<Title title="当今社会情感现状" />
	<Content />
      </div>
    );
  }
}

export default Sec02;
