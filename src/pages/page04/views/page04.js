import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';

import toPc from '../../../utilities/toPc';
import bannerImage from './images/banner.png';
import '../../style.css';
import './style.css';

import avatar01 from './images/avatar01.png';
import avatar02 from './images/avatar02.png';

import icon01 from './images/icon-1.png';
import icon02 from './images/icon-2.png';
import icon03 from './images/icon-3.png';
const icons = [
  {
    icon: icon01, 
    text: [
      '把握“关键时刻”',
      '管理好自己的情绪'
    ]
  },
  {
    icon: icon02, 
    text: [
      '提升“洞察力”',
      '识别对方的情绪'
    ]
  },
  {
    icon: icon03, 
    text: [
      '学会“经营”',
      '驾驭对方的情绪'
    ]
  }
];

const NormalPara = ({text}) => (
  <p className="normal-para text-justify">{text}</p>
);

const GrayBoxParaTakeImg = ({avatarImg, avatarAlt, text}) => (
  <div className="gray-box-para-take-img">
    <div className="img">
      <img src={avatarImg} alt={avatarAlt} />
      <p>{avatarAlt}</p>
    </div>
    <p className="text-justify">{text}</p>
  </div>
);

const RedBoxPara = ({text}) => (
  <p className="red-box-para text-justify">{text}</p>
);

const H3 = ({text, red}) => (
  <h3 className="title-h3">
    {text}
    <span style={{color: '#d66f70'}}>{red}</span>
  </h3>
);

const H4 = ({text}) => (
  <h4 className="title-h4">
    <i></i>
    <span>{text}</span>
  </h4>
);

const PadTop = ({paddingTop}) => (
  <p style={{paddingTop: paddingTop}}></p>
);

const PadBot = ({paddingBottom}) => (
  <p style={{paddingBottom: paddingBottom}}></p>
);

const Content = () => (
  <div className="page04-content">
    <PadTop paddingTop="35px" />
    <NormalPara 
      text="大家好，我们是橘子情感。专注情感，为爱而生。橘子情感，致力于为大家提供挽回爱情、挽救婚姻、分离小三、订制爱情等两性情感服务。"
    />
    <PadBot paddingBottom="35px" />

    <div className="message">
      <div className="title">
        <span className="icon"></span>
	<h2 className="text-center">橘子寄语</h2>
        <span className="icon"></span>
      </div>
      <PadBot paddingBottom="15px" />
      <p className="gray-box-para text-justify">开放式圈套，是指在和女人沟通的过程中直接地描述完整的想法、 而引发对方更大的兴趣故事、情绪或者感受，你没有，从而引发对方更大的兴趣，延伸话题。</p>
    </div>
    <PadBot paddingBottom="15px" />

    <NormalPara 
      text="追心仪的女人也好，挽回放不下的前任也好，又或者想为平淡的感情生活，加点新鲜感，以上种种都需要情商的加持。"
    />

    <PadTop paddingTop="15px" />
    <NormalPara 
      text="就拿我们学员小王（化名）的例子来说吧，他跟她女朋友吵架分手有一段时间了，本来挽回难度挺小的，就是因为他情商太低，生生错过了最佳的挽回时机。"
    /> 
    <PadBot paddingBottom="15px" />

    <NormalPara 
      text="吵架分手是典型的假性分手，这种情况下，需要你稍微地放低姿态，哄哄她，可是小王却看不懂女朋友话里隐藏的含义，错过了最佳的挽回时机，假性分手演变成了真性分手。"
    />
    <PadBot paddingBottom="15px" />

    <RedBoxPara 
      text="所以说，情商不够，真的是硬伤，像小王这样的学员不在少数，那为了避免让大家错过真爱，我在这里，给大家讲一讲，该怎么提升恋爱情商？其实很简单，做好一下三点："
    />
    <PadBot paddingBottom="25px" />

    <div className="icons">
      {
        icons.map((item, index) => {
	  return (
	    <div className="icons-group" key={index}>
	      <img src={item.icon} alt="配图" />
	      <span>{item.text[0]}</span>
	      <span>{item.text[1]}</span>
	    </div>
	  );
	})
      }
    </div>
    <PadBot paddingBottom="35px" />

    <H3 
      text="恋商提高第一步："
      red="管理好自己的情绪"
    />

    <PadTop paddingTop="15px" />
    <NormalPara 
      text="很多人都不会控制自己的情绪，一受到刺激，就失去了理智，变得情绪化，比如，恋爱中有了矛盾，动不动就“提分手”；挽回时被对方拒绝，就要死要活地威胁对方。这就是典型的在该“动脑子”的关键时刻，理智输给了情绪，所以说，如果你能在关键时刻，控制好自己的情绪你就能更好地驾驭感情和生活。"
    />
    <PadBot paddingBottom="35px" />

    <span style={{
      fontSize: '17px',
      color: '#d66f70',
      fontWeight: 'bold',
      display: 'block',
      paddingLeft: '15px'
    }}>那该怎么控制自己的情绪呢？</span>
    <PadBot paddingBottom="15px" />
    <span style={{
      fontSize: '17px',
      color: '#d66f70',
      fontWeight: 'bold',
      display: 'block',
      paddingLeft: '15px'
    }}>有两种方法</span>
    <PadBot paddingBottom="35px" />

    <H4 text="一种是“情绪转换法”：" />
    <PadBot paddingBottom="15px" />

    <GrayBoxParaTakeImg 
      avatarImg={avatar01}
      avatarAlt="Hope导师"
      text="通过转换方式来控制你的清绪，比如，当你遭遇负面情绪的时候，试着将它写到纸上，发泄出来，如果写一遍无法改善那就写两遍直到心态慢慢调整过来。"
    />

    <PadTop paddingTop="25px" />
    <NormalPara 
      text="这种方法可以在转移你的注意力和痛苦，就算挽回时前任拒绝你，或者在恋爱中，伴侣触发了你的情绪点，你都可以很好地转移情绪，让自己恢复冷静理智的一面。"
    />
    <PadBot paddingBottom="25px" />

    <H4 text="另一种方式是“延迟满足法”：" />
    <PadBot paddingBottom="15px" />

    <GrayBoxParaTakeImg 
      avatarImg={avatar02}
      avatarAlt="青恩导师"
      text="延续满足是指；为了长远的、更大的利益去自愿延缓、或者放弃当下的、较小的满足。比如，在挽回一段感情时，不达到一个提升目标，就忍住不和前任联系。"
    />

    <PadTop paddingTop="25px" />
    <NormalPara 
      text="在挽回前任的时候，很多人都控制不住自己去联系她，有时候不是为了想立刻挽回她，仅仅是为了满足自己一时的情感需求，根本不会考虑长远的目标，和伴侣的感受，频繁地纠缠她，电话骚扰，短信轰炸，把对方越推越远。"
    />
    <PadBot paddingBottom="25px" />

    <NormalPara 
      text="所以，挽回也好，恋爱也好，都要学会延迟满足，如果此刻你特别想联系她，先给自己定一个期限，不要急着去发泄你的情绪。"
    />
    <PadBot paddingBottom="25px" />

    <H3 
      text="恋商提高第二步："
      red="识别对方的情绪"
    />

    <PadTop paddingTop="25px" />
    <NormalPara 
      text="识别对方的情绪，虽然听起来简单，但是很多人都不具备这个能力，所以，你才会头疼说“女朋友怎么又生气了”,“女朋友为什么生气”等等。"
    />
    <PadBot paddingBottom="25px" />

    <span style={{
      fontSize: '17px',
      color: '#d66f70',
      fontWeight: 'bold',
      display: 'block',
      paddingLeft: '15px'
    }}>想准确地识别伴侣的情绪</span>
    <PadBot paddingBottom="15px" />

    <H4 
      text="初阶方法是你要学会察言观色"
    />
    <PadBot paddingBottom="15px" />

    <p className="gray-box-para text-justify">
      <span>之前有个男学员，女朋友生气了，他没有察觉到，继续打游戏不说，还让女朋友端茶递水的，结果，女朋友当即提出了分手。</span>
      <span>所以说，正确识别伴侣的情绪非常重要，你可以从表清和语气两方面去觉察，女人大多是会口是心非的，表面上说不生气，但是表情和说话的语气，都透露着冷漠和愤怒，这个时候你就得哄哄她照顾一下她的情绪。</span>
    </p>
    <PadBot paddingBottom="25px" />

    <H4 
      text="还有一种高阶方法，就是共情"
    />
    <PadBot paddingBottom="15px" />

    <p className="gray-box-para text-justify">
      <span>共情能力也可称作移情能力，指的是一种能设身处地体验他人处境，从而达到感受和理解他人情感的能力。共情能力意味着超越自身的自恋而去理解别人自恋的能力。</span>
      <span>但要记住一点共情不是同情，也不是比惨更不是讲道理，你需要做的是感受对方的情绪，把自己带入对方的角色。比如承认分手事实，尊重她的选择，为你的过错道个歉，让她知道你是懂她的，降低前任的防备心，挽回的窗口就很容易打开了。</span>
    </p>
    <PadBot paddingBottom="35px" />

    <H3 
      text="恋商提高第三步："
      red="驾驭对方的情绪"
    />

    <PadTop paddingTop="25px" />
    <NormalPara 
      text="想驾驭伴侣的情绪，其实并没有想象中的难实用的小方法，这也是我给学员们上课时，经常讲到的内容，总的来说呢，就是学会表达爱。"
    />
    <PadBot paddingBottom="25px" />

    <PadTop paddingTop="15px" />
    <H4 text="第一种：肯定的语言" />
    <PadBot paddingBottom="15px" />

    <p className="gray-box-para text-justify">恋爱情商高的人，从来都不会吝窗赞美的语言，不管是跟爱人聊天，还是跟前任聊天，做一个聆听者，都不失为一种好方法，认真倾听对方的话，然后从她的话里，判断她期待得到的回答，给她肯定和鼓励。</p>

    <PadTop paddingTop="15px" />
    <H4 text="第二种：服务型的行动" />
    <PadBot paddingBottom="15px" />

    <p className="gray-box-para text-justify">让你为前任或者为伴侣服务，不是让放低自己的姿态而是做一些，对方期待你会做的事，七匕如从来不做饭的你，花心思为她做了一次烛光晚餐，这种惊喜式的服务，会让她感受到加倍的爱。</p>

    <PadTop paddingTop="15px" />
    <H4 text="第三种：身体的接触" />
    <PadBot paddingBottom="15px" />

    <p className="gray-box-para text-justify">
      <span>最有效的表达爱的方式，就是身体接触，身体接触不单单是指性，包括很多种方式，比如拥抱、接吻、牵手等等这也就是为什么，女朋友难过了，你一个拥抱会比讲道理有用，因为这就是她当下最急切的情感需求，你一个拥抱或者亲吻，远远胜过干言万语。</span>
      <span>恋爱也好，相处也好，挽回也好，两性情感中的关系，远比你能想到的要复杂，每个人的清况都不一样，适合别人的方式，在你身上，未必会有用，不要盲目地去试错，让事态的发展走到不可挽回的地步。橘子清感从业多年以来，对情感挽回和恋爱狙击也是自成一套，帮助近万例的男女收获了幸福，如果您也有类似的清感问题，一定要采取有效的解决措施，不要等失去了才后悔莫及。</span>
    </p>
    <PadBot paddingBottom="35px" />
  </div>
);

class Page04 extends React.Component {
  render() {
    return (
      <div className="page04">
	<Header home={false} title="恋商提高" />
	<img className="page04-banner" src={bannerImage} alt="服务范围_权威专家" />
	<Content />
	<Footer />
      </div>
    );
  }

  componentDidMount() {
    toPc();
  }
}

export default Page04;
