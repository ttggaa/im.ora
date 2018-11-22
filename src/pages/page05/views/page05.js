import React from 'react';
import {view as Header} from '../../../components/header/';
import {view as Footer} from '../../../components/footer/';

import './style.css';

import avatar01 from './images/avatar01.png';
import avatar02 from './images/avatar02.png';
import avatar03 from './images/avatar03.png';
import avatar04 from './images/avatar04.png';
import avatar05 from './images/avatar05.png';

import image01 from './images/image01.png';
import image02 from './images/image02.png';
import image03 from './images/image03.png';
import image04 from './images/image04.png';
import image05 from './images/image05.png';

import toPc from '../../../utilities/toPc';
toPc();

const Title = ({title}) => (  // 模块标题
  <div className="page05-title">
    <span className="page05-title-line"></span>
    <span className="page05-title-text">{title}</span>
  </div>
);

const Avatar = ({avatar, text}) => (
  <div className="page05-avatar">
    <span className="page05-avatar-image"></span>
    <img src={avatar} alt={text} />
    <span className="page05-avatar-text">{text}</span>
  </div>
);

class Page05 extends React.Component {
  render() {
    return (
      <div className="page05">
	<Header home={false} title="成功案例" />

	<section>
	  <Title title="挽回爱情"/>
	  <Avatar avatar={avatar01} text="一生热爱"/>
	  <p>我对她这么好却没有得到她的爱，我在这段感情中付出得太多了，给她造成压力的同时，我也爱得太累了，最终她和我提了分手，后来在小鱼情感的帮助下，我明白了如何去爱，现在她又重新回到我身边了。</p>
	  <div className="page04-image">
	    <img src={image01} alt="聊天截图" />
	  </div>
	</section>

	<section>
	  <Title title="挽救婚姻"/>
	  <Avatar avatar={avatar02} text="一海千寻"/>
	  <p>
	    <span>当初出轨其实就是贪新鲜，很后悔给家庭带来了这么大的伤害，妻子和我是共患难的，我真的舍不得她，可是她却因为无法原谅我的背叛执意离婚，我当时受父母谴责，被妻子僧恨真的万念俱灰了，也是抱着试一试的想法，报了小鱼情感的挽回课程。</span>
	    <br />
	    <span>没想到我按照导师指导的步骤一步步来先坦诚了自己的错误，然后从小事入手一点点的获得妻子信任，现在虽然妻子说我还有待考察，不过我相信只要我坚持不懈的对她好，总有一天她会彻底原谅我的，真的很感谢小鱼情感，给了我这次希望。</span>
	  </p>
	  <div className="page04-image">
	    <img src={image02} alt="聊天截图" />
	  </div>
	</section>

	<section>
	  <Title title="挽回爱情"/>
	  <Avatar avatar={avatar03} text="岁月92"/> 
	  <p>因为不懂浪漫经常被女友抱怨，最终分手我曾经特别沮丧，无意中找到了小鱼情感，在小鱼情感导师的帮助下，我知道了什么是爱情里的仪式感，通过一点点的学习，我知道女友想要的究竟是什么，最后经过多次的实战演习。</p>
	  <div className="page04-image">
	    <img src={image03} alt="聊天截图" />
	  </div>
	</section>

	<section>
	  <Title title="挽救婚姻"/>
	  <Avatar avatar={avatar04} text="流年似水"/>
	  <p>因为老公工作忙，我总是怀疑他背着我做把他越推越远，在老师们的指导下，我了解了了对不起我的事，几次三番的和他闹，闹到最后他和我提了离婚，我当时觉得天都塌了，好在这时遇见了小鱼情感，导师们告诉我，对于丈夫要给予充分的信任，不然我的无理取闹只会经营婚姻的诀窍，老公也不再和我分居了，的婚姻得到了新生。</p>
	  <div className="page04-image">
	    <img src={image04} alt="聊天截图" />
	  </div>
	</section>

	<section>
	  <Title title="挽回爱情"/>
	  <Avatar avatar={avatar05} text="多久"/>
	  <p>我在分手后几次挽回而不得，还被他二次拉黑了，是小鱼情感的导师告诉我该如何隐藏需求感，该如何正确建立联系，又该在什么时候向他表白，我这才没有错过这段感情。</p>
	  <div className="page04-image">
	    <img src={image05} alt="聊天截图" />
	  </div>
	</section>

	<Footer />
      </div>
    );
  }
}

export default Page05;
