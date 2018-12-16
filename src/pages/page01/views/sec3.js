import React, {Component} from 'react';

import {view as Title} from '../../../components/pageTitle/';
import {view as ArticleList} from '../../../components/articleList/';

import anliImg1 from './images/anli-1.png';
import anliImg2 from './images/anli-2.png';
import anliImg3 from './images/anli-3.png';
import anliImg4 from './images/anli-4.png';
import anliImg5 from './images/anli-5.png';

const articles = [
  {
    url: 'articles/a1/a1_1/',
    title: '「挽回女人」断联拉黑之后，好的心态才是拯救爱情的致胜之道',
    des: '如果有人问我，挽回成功的秘诀是什么?那我会毫不犹豫的说：心态。心态决定行为，行为养成习惯，习惯形成性格，性格决定结局。',
    image: anliImg1
  }, 
  {
    url: 'articles/a1/a1_2/',
    title: '深陷苦恋，多次表白没有结果，幸亏遇到你',
    des: '当你喜欢上一个女生，也向她坦露了你的心意，但她却没有明确表现出想跟你在一起的意思，甚至在言谈中传达出一些不想和你在一起的信息，这时候应该怎么办呢？',
    image: anliImg2
  }, 
  {
    url: 'articles/a1/a1_3/',
    title: '表白无果，只用了三十天逆袭',
    des: '那晚我俩不仅仅聊的是关于挽回的话题，还聊了很多很多;虽然小月有着迷人的大眼睛，黑黑的长发，曼妙的身材，但那时的我因为刚分手，并没有产生太多的感觉，所以我们也就像普通朋友那样相处着。',
    image: anliImg3
  }, 
  {
    url: 'articles/a1/a1_4/',
    title: '提升“恋爱价值感”，女人不会因跪求而回心转意',
    des: '你的思维进入了一个误区。当你的付出已经达到了对方感情需求的时候，分手的原因就不是你付出够不够的问题了，这时候你要从自身找找原因。',
    image: anliImg4
  }, 
  {
    url: 'articles/a1/a1_5/',
    title: '“没感觉”不可怕，三招教你挽回她',
    des: '有一种分手叫“我对你已经没感觉了，我们分手吧”，听到这个理由，相信很多人都一头雾水，恋爱中什么叫感觉？怎么会没感觉了？',
    image: anliImg5
  }
];

class Sec3 extends Component {
  render() {
    return (
      <div className="page01-sec03">
	<Title title="成功案例" />
	{
	  articles.map((item, index) => {
	    return (
	      <ArticleList key={index}
		articleUrl={`../${item.url}`}
		articleTitle={item.title}
		articleDescription={item.des}
		articleImage={item.image}
	      />
	    );
	  })
	}
      </div>
    );
  }
}

export default Sec3;
