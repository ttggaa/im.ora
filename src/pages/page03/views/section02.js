import React from 'react';
import SectionTitle from './title.js';

import mentorImage02 from './images/avatar_mentor02.png';
import mentorImage03 from './images/avatar_mentor03.png';
import mentorImage04 from './images/avatar_mentor04.png';
import mentorImage05 from './images/avatar_mentor05.png';

const mentorInfos = [
  {
    mentorImage: mentorImage02,
    mentorName: '木子导师',
    des: '国家首批挽回专家'
  },
  {
    mentorImage: mentorImage03,
    mentorName: '文琪导师',
    des: '高级两性心理学专家'
  },
  {
    mentorImage: mentorImage04,
    mentorName: '泊乔导师',
    des: '国家首批情感挽回专家'
  },
  {
    mentorImage: mentorImage05,
    mentorName: '心怡导师',
    des: '国家首批情感挽回专家'
  }
];

const Section02 = () => (
  <div className="page03-section02">
    <SectionTitle title="情感导师" />
    {
      mentorInfos.map((item, index) => {
	return (
	  <div className="page03-section02-content" key={index}>
	    <img src={item.mentorImage} alt={item.mentorName} />
	    <div>
	      <h4>{item.mentorName}</h4>
	      <p>{item.des}</p>
	    </div>
	  </div>
	);
      })
    }
  </div>
);

export default Section02;
