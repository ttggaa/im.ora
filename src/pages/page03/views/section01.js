import React from 'react';
import SectionTitle from './title.js';
import MentorTheme from './mentorTheme.js';

import mentorImage01 from './images/mentor01.png';
import mentorImage02 from './images/mentor02.png';
import mentorImage03 from './images/mentor03.png';
import mentorImage04 from './images/mentor04.png';
import mentorImage05 from './images/mentor05.png';

const mentorInfos = [
  {
    themeType: 'themeOne',
    mentorImage: mentorImage01,
    alt: 'Henry 导师',
    title: 'Henry 导师',
    des01: '进化心理学专家',
    des02: '国家二级心理咨询师',
    para: '没有完全合适的两个人，你觉得感情出现了问题，其实是你自身出现了问题！每一段感情都值得你全力以赴！'
  },
  {
    themeType: 'themeTwo',
    mentorImage: mentorImage02,
    alt: '艾薇导师',
    title: '艾薇导师',
    des01: '国内资深婚恋挽回专家',
    des02: '国内资深性心理专家',
    para: '完美的两性关系，不是彼此控制和支配，而是允许对方有自由呼吸的空间，同时保持自身的魅力值，活出精彩，做到平衡、平等、平权。'
  },
  {
    themeType: 'themeOne',
    mentorImage: mentorImage03,
    alt: '亚米导师',
    title: '亚米导师',
    des01: '小鱼情感高级形象设计师',
    des02: '应用心理学专业毕业',
    para: '凡事有果必有因，每个人都应在了解自己的基础上，获得情感的自由！'
  },
  {
    themeType: 'themeTwo',
    mentorImage: mentorImage04,
    alt: 'Sunny 导师',
    title: 'Sunny 导师',
    des01: '小鱼情感高级导师',
    des02: '两性心理侧写师',
    para: '每个人面对爱情陷入僵局，都会陷入迷茫，有时候换个角度去思考，你会看到不一样的人生风景，了解自己，才更懂得去爱。'
  },
  {
    themeType: 'themeOne',
    mentorImage: mentorImage05,
    alt: 'Andy 导师',
    title: 'Andy 导师',
    des01: '小鱼情感资深分析导师',
    des02: '两性权威专家',
    para: '恋爱的节奏和人们成长的节奏，理应是同步的，只有你有价值，你的爱才有价值。'
  }
];

const Section01 = () => (
  <div className="page03-section01">
    <SectionTitle title="小鱼情感首席导师" />
    {
      mentorInfos.map((item, index) => {
	return (
	  <MentorTheme 
	    key={index}
	    themeType={item.themeType}
	    mentorImage={item.mentorImage}
	    alt={item.alt}
	    title={item.title}
	    des01={item.des01}
	    des02={item.des02}
	    para={item.para}
	  />
	);
      })
    }
  </div>
);

export default Section01;
