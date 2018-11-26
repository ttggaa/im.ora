import React, {Component} from 'react';
import Title from './title';

class Content extends Component {
  render() {
    return(
      <div className="page02-sec01-content">
	<div className="para">
	  <p className="text-indent">随着当今中国社会的爱情分手率，离婚率不断升高，两性清感问题，已然成为普遍的社会问题，爱情破裂的原因有很多，或大或小比如：</p>
	</div>
	<div className="buttons">
	  <div className="buttons-group">
	    <div className="buttons-item">
	      <i></i>
	      <span>沟通不畅</span>
	    </div>
	    <div className="buttons-item">
	      <i></i>
	      <span>婆媳关系</span>
	    </div>
	  </div>
	  <div className="buttons-group">
	    <div className="buttons-item">
	      <i></i>
	      <span>感情淡化</span>
	    </div>
	    <div className="buttons-item">
	      <i></i>
	      <span>家庭暴力</span>
	    </div>
	  </div>
	  <div className="buttons-group">
	    <div className="buttons-item">
	      <i></i>
	      <span>矛盾积累</span>
	    </div>
	    <div className="buttons-item">
	      <i></i>
	      <span>经济纠纷</span>
	    </div>
	  </div>
	  <div className="buttons-group">
	    <div className="buttons-item">
	      <i></i>
	      <span>第三者插足</span>
	    </div>
	    <div className="buttons-item">
	      <i></i>
	      <span>异国异地</span>
	    </div>
	  </div>
	</div>
      </div>
    );
  }
}

class Sec01 extends Component {
  render() {
    return (
      <div className="page02-sec01">
	<Title title="挽爱计划私人订制服务" />
	<Content />
      </div>
    );
  }
}

export default Sec01;
