import React from 'react';
import PropTypes from 'prop-types';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Banner} from './banner/';
import {view as Classifies} from './classifies/';
import {view as Section} from './section/';

import toPc from '../../../utilities/toPc';

import '../../style.css';
import './style.css';
import companyIntroImage from './images/company-intro.png';

const CompanyIntro = () => (  // 公司简介
  <div className="index-intro">
    <h3>公司简介</h3>
    <img src={companyIntroImage} alt="公司简介" />
    <p className="text-justify text-indent">橘子清感，自创办以来，一直引领着整个行业的进步和发展。为了让广大用户，学会更好的爱与被爱的能力让用户在爱清中更加有尊严，更加从容，更加自由。橘子清感汇聚了国内知名两陕清感咨询师、婚恋家庭咨询师、资深清感挽回师、心理学专家等用最专业的师资团队，打造全国最专业的清感咨询培训机构。</p>
    <p className="text-justify text-indent">橘子清感的创办初衷，是针对解决广大民众的清感挽回、婚姻修复等社会问题但逐渐发现，中国在清感教育方面是完全缺失的。现在，我们要解决的，不仅仅是简单的清感问题更是整个时代的清感教育缺失。</p>
  </div>
);

class Index extends React.Component {
  componentWillMount() {
    toPc();
  }

  render() {
    const {classifies} = this.context.store.getState();

    return (
      <div>
	<Header home={true}/>
	<Banner />
	<Classifies />
	<CompanyIntro />
	{
	  classifies.map((classify, index) => {
	    return (
	      <Section
		key={index} 
		sectionType={classify.type}
		sectionTitle={classify.title}
		sectionHref={classify.href}
		sectionNav={classify.nav}
		list={classify.list}
		image={classify.image}
		h3={classify.h3}
		des={classify.des}
	      />
	    );
	  })
	}
	<Footer />
      </div>
    );
  }
}

Index.contextTypes = {
  store: PropTypes.object
};

export default Index;
