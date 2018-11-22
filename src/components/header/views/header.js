import React from 'react';

import './style.css';

class Header extends React.Component {
  render() {
    if (this.props.home) {  // 渲染首页 header
      return (
	<div className="header home-header">
	  <span className="header-logo"></span>
	  <span className="header-text">专注情感 为爱而生</span>
	</div>
      );
    }

    return (  // 渲染非首页 header
      <div className="header">
	<a href="/im/">
	  <i></i>
	  首页
	</a>
	<div className="header-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Header;
