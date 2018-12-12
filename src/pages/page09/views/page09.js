import React from 'react';

import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Title} from '../../../components/pageTitle/';

import '../../style.css';
import './style.css';

import toPc from '../../../utilities/toPc';

import bannerImg from './images/banner.png';
import bookImg01 from './images/img01.png';
import bookImg02 from './images/img02.png';
import bookImg03 from './images/img03.png';
import bookImg04 from './images/img04.png';
import bookImg05 from './images/img05.png';
import bookImg06 from './images/img06.png';
import bookImg07 from './images/img07.png';
import bookImg08 from './images/img08.png';
import bookImg09 from './images/img09.png';
import bookImg10 from './images/img10.png';

const bookItems = [
  {
    bookName: '心理学与生活',
    bookAuthor: '津巴多',
    img: bookImg01,
    para: '最经典最基础的心理学书籍，美国斯坦福大学多年来使用的教材。由浅入深，交给你如何在心理方面，给自己在生活中一个良好的定位。'
  },
  {
    bookName: '爱的艺术',
    bookAuthor: '艾.弗洛姆',
    img: bookImg02,
    para: '必读书籍，让你有更好的感悟和收获。爱情是一种积极地，而不是消极的情绪，是人内心生长的东西，而不是被俘虏的情绪。'
  },
  {
    bookName: '情商',
    bookAuthor: '丹尼尔.戈尔曼',
    img: bookImg03,
    para: '智商即命运吗？其实智商并没有我们想象的那样重要。《情商》不仅打破了长久以来智商的天生决定论，更为心理学界探讨已久的“情绪智慧”问题提出关键性的解释。'
  },
  {
    bookName: '爱情心理学',
    bookAuthor: '罗伯特.J.斯腾伯格',
    img: bookImg04,
    para: '经典作家的经典之作。爱情心理学是探讨男女在恋爱、婚姻中，爱情的获得及稳固的心理规律，包括恋爱心理和婚姻心理两部分。'
  },
  {
    bookName: '人生困境整理术',
    bookAuthor: '李子勋',
    img: bookImg05,
    para: '很多问题，不仅仅是情感本身，而是由情感问题的困扰，导致心态崩溃，而延伸出很多次生问题。在生活的方方面面，都困扰着你。这本书，能够更全面的，来帮助你走出困境。'
  },
  {
    bookName: '发展心理学',
    bookAuthor: '林崇德',
    img: bookImg06,
    para: '讲述了一个人从受精卵开始，直至死亡的整个生命过程中，所有的心理发展。很多人在爱情中，目的性太强，能够静下心来，看一下这本书，会让你对生命、人生、有一个更深刻的认识。'
  },
  {
    bookName: '社会心理学',
    bookAuthor: '章志光',
    img: bookImg07,
    para: '人是社会动物，只要是在这个社会上生活，总要有本行为指南。你的思维，决定着你的行为，而你的行为会直接导致他人对你的看法和定位。'
  },
  {
    bookName: '咨询心理学',
    bookAuthor: '乐国安',
    img: bookImg08,
    para: '通过反向思维阅读，更加了解自身的当下心理状态，更好的找到心态问题。更好的与人沟通，更好的懂得如何疏导、分析问题，你也可以做到心理学入门。'
  },
  {
    bookName: '异常心理学',
    bookAuthor: '詹姆斯.布彻',
    img: bookImg09,
    para: '部分人多多少少存在心理病理性人格，甚至轻微性变态，存在问题，该正视而不是逃避。正视自身的某些问题，或者多去了解一些问题，知识面的扩充带来的从来不是消极的影响。'
  },
  {
    bookName: '性学与爱情心理学',
    bookAuthor: '弗洛伊德',
    img: bookImg10,
    para: '这是一本弗洛伊德的论文集，主要包括《性学三论》、《儿童的性理论》、《无意识》、《爱情心理学》等论文。从性这一基础的两性和心理论出发，让你更清晰地认识到性学和爱情的关系。'
  },
];

const Banner = () => (  // Banner
  <div className="page09-banner">
    <img
      src={bannerImg}
      alt="嘉伟导师十本好书推荐 | 橘子情感" 
      title="嘉伟导师十本好书推荐 | 橘子情感" 
    />
  </div>
);

const Main = () => (  // Main
  <div className="page09-main">
    <div className="book-group">
      <div className="title">
	<h1 className="text-center">
	  <span className="line"></span>
	  十本好书推荐
	  <span className="line"></span>
	</h1>
      </div>

      <div className="paras">
	<p className="text-justify text-indent">多读书，读好书，毋庸置疑是人类进步的阶梯。在我们的企业当中，所有的情感导师、情感分析师、运营人员、文案编辑等，甚至几乎所有岗位的员工，都有经常阅读、研究的良好学习氛围。而公司的读书角，也是大家工作闲暇时间，呆的最多的地方。</p>
	<p className="text-justify text-indent">此次，我们整理出来10本，比较基础且有代表性的书籍，也是相对更能够对你有帮助，让你有收获的。以心理学为主，延伸至两性情感交往的方方面面，也是我们新员工入职的基础教材之一。</p>
      </div>

      {
        bookItems.map((item, index) => (
	  <div className="book-item" key={index}>
	    <div className="title">
	      <h3 className="bookname">《{item.bookName}》</h3>
	      <span className="bookauthor">作者：{item.bookAuthor}</span>
	    </div>
	    <div className="content">
	      <div className="img">
	        <img src={item.img} alt={item.bookName} />
	      </div>
	      <div className="para">
	        <p className="text-justify">{item.para}</p>
	      </div>
	    </div>
	  </div>
	))
      }
    </div>
  </div>
);

class Page09 extends React.Component {
  render() {
    return (
      <div className="page09">
	<Header home={false} title="嘉伟导师十本好书推荐" />
	<Banner />
	<Main />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page09;
