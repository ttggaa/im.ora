import React, {Component} from 'react';

import anliImg1 from './images/anli-1.png';
import anliImg2 from './images/anli-2.png';
import anliImg3 from './images/anli-3.png';
import anliImg4 from './images/anli-4.png';
import anliImg5 from './images/anli-5.png';

const articles = [{
  title: '文章标题',
  des: '文章描述',
  image: anliImg1
}, {
  title: '文章标题',
  des: '文章描述',
  image: anliImg2
}, {
  title: '文章标题',
  des: '文章描述',
  image: anliImg3
}, {
  title: '文章标题',
  des: '文章描述',
  image: anliImg4
}, {
  title: '文章标题',
  des: '文章描述',
  image: anliImg5
}];

class Sec3 extends Component {
  render() {
    return (
      <div className="page01-sec03">
	<h1>成功案例</h1>
	<div className="page01-sec03-content">
	  {
	    articles.map((item, index) => {
	      return (
		<div className="page01-sec03-content-item" key={index}>
		  <div className="page01-sec03-content-item-text">
		    <h3 className="text-justify">{item.title}</h3>
		    <p className="text-justify">{item.des}</p>
		  </div>
		  <div className="page01-sec03-content-item-img">
		    <img src={item.image} alt="" />
		  </div>
		</div>
	      );
	    })
	  }
	</div>
      </div>
    );
  }
}

export default Sec3;
