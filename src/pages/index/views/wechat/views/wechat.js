import React from 'react';

import './style.css';

class Wechat extends React.Component {

  constructor() {
    super();
    this.state = {
      checkout: 'wechatModel'
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck(){
    this.setState({
      checkout: 'wechatModel hidden'
    });
  }
  render() {
    return(
      <div className={this.state.checkout}>
	<i onClick={this.handleCheck}></i>
      </div>
    );
  }
}

export default Wechat;
