import React from 'react';

import logoImage from './logo.png';
import './style.css';

const Footer = () => (
  <div className="footer">
    <p className="footer-wechat text-center">
      <span>微信公众号: jzqinggan</span>
    </p>
    <p className="footer-phone text-center">热线电话: 4006-299-520</p>
    <div className="footer-logo">
      <img src={logoImage} alt="橘子情感 LOGO" />
    </div>
    <p className="footer-company text-center">青岛橘子创想文化传播有限公司</p>
    <p className="footer-address text-center">地址: 青岛市市南区银川西路动漫产业园A做212B</p>
    <p className="footer-mark text-center">备案号: 鲁 ICP 备 17023741 号</p>
  </div>
);

export default Footer;
