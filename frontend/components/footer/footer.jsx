import React from 'react';

const Footer = () => (
  <div className="app-footer">
    <div className="app-footer-tags">
      <a href="https://www.linkedin.com/in/justin-suen-6a258669">
        <img src={require('../../../app/assets/images/icons/linkedin.png')} />
      </a>
      <a href="https://www.github.com/justinsuen">
        <img src={require('../../../app/assets/images/icons/github.png')} />
      </a>
    </div>
    <div className="app-footer-attr">
      <p>Created by and maintained by <a href="http://justinsuen.com">Justin Suen</a></p>
      <p>Graph icons designed by <a href="https://roundicons.com/">Roundicons</a></p>
    </div>
  </div>
);

export default Footer;
