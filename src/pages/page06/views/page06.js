import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';
import {view as Title} from '../../../components/pageTitle/';
import {view as ArticleList} from '../../../components/articleList/';

import toPc from '../../../utilities/toPc';

import 'swiper/dist/css/swiper.min.css';
import '../../style.css';
import './style.css';

// 轮播图图片
import bannerImg01 from './images/banner01.png';
import bannerImg02 from './images/banner02.png';
import bannerImg03 from './images/banner03.png';

// 文章列表图片
import img01 from './images/img01.png';
import img02 from './images/img02.png';
import img03 from './images/img03.png';
import img04 from './images/img04.png';
import img05 from './images/img05.png';
import img06 from './images/img06.png';
import img07 from './images/img07.png';
import img08 from './images/img08.png';
import img09 from './images/img09.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
import img12 from './images/img12.png';
import img13 from './images/img13.png';
import img14 from './images/img14.png';
import img15 from './images/img15.png';

const bannerItems = [  // 模块一轮播图数据
  {
    url: '../page09/',
    img: bannerImg01,
    title: '嘉伟导师十本好书推荐'
  },
  {
    url: '##',
    img: bannerImg02,
    title: 'title of banner02'
  },
  {
    url: '##',
    img: bannerImg03,
    title: 'title of banner03'
  }
];

const sec02Items = [
  {
    url: 'articles/a1/a1_1/',
    title: '「挽回女人」断联拉黑之后，好的心态才是拯救爱情的致胜之道',
    des: '如果有人问我，挽回成功的秘诀是什么?那我会毫不犹豫的说：心态。心态决定行为，行为养成习惯，习惯形成性格，性格决定结局。',
    img: img01
  },
  {
    url: 'articles/a1/a1_2/',
    title: '深陷苦恋，多次表白没有结果，幸亏遇到你',
    des: '鼓起勇气继续表白，努力尝试让对方接受你？无数案例证明这样非但不会看到效果反而会死的更快。',
    img: img02
  },
  {
    url: 'articles/a1/a1_3/',
    title: '表白无果，只用了三十天逆袭',
    des: '那晚我俩不仅仅聊的是关于挽回的话题，还聊了很多很多;虽然小月有着迷人的大眼睛，黑黑的长发，曼妙的身材，但那时的我因为刚分手，并没有产生太多的感觉，所以我们也就像普通朋友那样相处着。',
    img: img03
  },
  {
    url: 'articles/a1/a1_4/',
    title: '提升“恋爱价值感”，女人不会因跪求而回心转意',
    des: '你对她嘘寒问暖，每天送她上下班；你对她有求必应，凡是想要的，都能买回来；家务你一手包，从厨房到厕所完全不用她动手……你对她这么好，为什么她还要离开你？是你付出的还不够吗？你需要对她更加好才能挽回她吗？',
    img: img04
  },
  {
    url: 'articles/a1/a1_5/',
    title: '“没感觉”不可怕，三招教你挽回她',
    des: '所谓的感觉，就是指客观刺激作用于感觉器官所产生的对事物个别属性的反映。在恋爱中，感觉的含义是指对方让自己感兴趣，愿意去探索，给自己愉悦的一种感受。她说对你没感觉了是什么意思？是指她对你已经不感兴趣了，你身上没有任何一个点能吸引她。',
    img: img05
  },
  {
    url: 'articles/a2/a2_1/',
    title: '百依百顺没有用，读懂女人心你才能挽回你的爱情',
    des: '男女思维方式有本质的不同，男性的思维方式侧重于理性思维，而女性的思维方式则偏重于感性思维。我们没必要去批判这两种思维方式谁比谁更优越，这是毫无意义的。你现在要学习的是这两种思维方式的差异在哪里。',
    img: img06
  },
  {
    url: 'articles/a2/a2_2/',
    title: '当你下跪都无法挽回心死女友时，你该试试“幽灵心态”',
    des: '这样的结果令他难以接受，自己堂堂男子汉最后连膝盖都献上了，却仍然无法让她回来，这么多年的感情说不要就不要了，女人真的太绝情了！',
    img: img07
  },
  {
    url: 'articles/a2/a2_3/',
    title: '挽回攻略：如何跟女朋友复联进行二次吸引恢复爱情？',
    des: '女人是念旧的动物，她会在一段感情结束后，即使是这段感情给予她很大的伤害，她也会在很长的一段时间内念念不忘；女人是感性的动物，她会在看到别的情侣或者偶然去到你们曾经留下回忆的地方，甚至是一句歌词，都会使她回忆起之前的爱情。但矜持是女人相伴于前两种特性所存在的本能，即使她对你百般的思念，也不会想要去主动联系你。',
    img: img08
  },
  {
    url: 'articles/a2/a2_4/',
    title: '普通白领男 逆袭法国留学白富美',
    des: '“懵懵懂懂27年，做着一份收入还不错的工作，大学毕业后就再没谈过恋爱，家人安排过相亲，朋友介绍过对象，可总是双方不合适。到了这个年纪，也会担心自己感情的归宿到底在哪，更不会想到，通过改变，会让我拥有之前只存在于幻想中的生活和故事。”',
    img: img09
  },
  {
    url: 'articles/a2/a2_5/',
    title: '女人说分手拉黑后给你机会，掌握攻略教你复联挽回爱情',
    des: '有很对男人在和女人恋爱的时候，为了追到女生，曾经立下各种山盟海誓。好像各种情话都无法将自己的感情直抒胸臆。',
    img: img10
  },
  {
    url: 'articles/a3/a3_1/',
    title: '你还说你无法挽回爱情？这才是挽回的正确打开方式！',
    des: '最近，我们总结了近万例的挽回真实案例，就是希望能够使大家学习到这些总结出来的经验，避免犯相识的错误。今天我们来详细讲解在挽回中当对方态度决绝，情绪冷淡，拉黑，应该怎样扭转局面，进行复联，重新建立稳定的关系，进而打开复合的窗口。',
    img: img11
  },
  {
    url: 'articles/a3/a3_2/',
    title: '你被定义渣男，分手后被拉黑，你懂得怎么挽回女人吗？',
    des: '怎样才能改变对方的态度，重新建立目标对你的兴趣？',
    img: img12
  },
  {
    url: 'articles/a3/a3_3/',
    title: '男人做好这关键的四点，就能快速挽回她！',
    des: '为了帮助大家快速提升自己，我们团队也一直在开发研究新的理论，如广受好评的“三步挽回成功法则”“情感落差提升法则”“健康长期关系循环法则”等等，帮助了无数的获得幸福。也感谢粉丝们长期以来的支持，橘子情感也一直在好评榜和课程中心的首位。',
    img: img13
  },
  {
    url: 'articles/a3/a3_4/',
    title: '坏男人教你：没有追不到的女生，只有不会聊天的愣头青',
    des: '世界上最远的距离，不是生与死的距离，而是我想撩你，却话不投机。',
    img: img14
  },
  {
    url: 'articles/a3/a3_5/',
    title: '了解女人的爱情心理，分分钟破解拉黑复联成功，挽回爱情',
    des: '分手之后，尘满面，没有人在身边陪伴。两个人的伤心，一个人的孤单。',
    img: img15
  },
];

class BannerSwiper extends React.Component {  // 模块一：轮播图
  render() {
    return (
       <div className="page06-banner">
	 <div className="content">
	   <div className="swiper-container" ref="swiper">
	     <div className="swiper-wrapper">
	       {
		 bannerItems.map((item, index) => (
		   <a className="swiper-slide" key={index} href={item.url}>
		     <div className="img">
		       <img src={item.img} alt={item.title} />
		     </div>
		     <div className="title">
		       <p>{item.title}</p>
		     </div>
		   </a>
		 ))
	       }
	     </div>
	     <div className="swiper-pagination"></div>
	   </div>
	 </div>
       </div>
    );
  }

  componentDidMount() {
    new Swiper(this.refs.swiper, {
      observer: true,
      autoplay: false,
      delay: 5000,
      loop: true,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}

const Sec02 = () => (  // 模块二：情感问答
  <div className="page06-sec02">
    <Title title="情感问答" />
    <div className="content">
      {
        sec02Items.map((item, index) => (
	  <ArticleList 
	    key={index}
	    articleUrl={`../${item.url}`}
	    articleTitle={item.title}
	    articleDescription={item.des}
	    articleImage={item.img}
	  />
	))
      }
    </div>
  </div>
);

class Page06 extends React.Component {
  render() {
    return (
      <div className="page06">
	<Header home={false} title="情感论坛" />
	<BannerSwiper />
	<Sec02 />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page06;
