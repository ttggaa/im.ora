import React, {Component} from 'react';
import Title from './title';

import sectionIcon01 from './images/sec05-icon01.png';
import sectionIcon02 from './images/sec05-icon02.png';
import sectionIcon03 from './images/sec05-icon03.png';

const sections = [{
  icon: sectionIcon01,
  para: [
    '橘子情感作为行业标杆，所有导师全部经过官方',
    '认证以及资格认证，权利保障用户服务'
  ]
}, {
  icon: sectionIcon02,
  para: [
    '付款签订正式合同，若对服务不满意',
    '可根据用户保障条款，申请部分或者全额退款'
  ]
}, {
  icon: sectionIcon03,
  para: [
    '“挽爱计划”将全程保护用户隐私',
    '不向任何第三方泄露',
    '服务结束用户档案将由系统自动销毁'
  ]
}];

class Content extends Component {
  render() {
    return (
      <div className="page05-sec05-content">
	{
	  sections.map((item, index) => {
	    return (
	      <div className="item" key={index}>
		<img src={item.icon} alt="图表配图" />
		{
		  item.para.map((innerItem, innerIndex) => {
		    return (
		      <span key={innerIndex}>{innerItem}</span>
		    );
		  })
		}
	      </div>
	    );
	  })
	}
      </div>
    );
  }
}

class Sec05 extends Component {
  render() {
    return (
      <div className="page05-sec01">
	<Title title="给您的保障" />
	<Content />
      </div>
    );
  }
}

export default Sec05;
