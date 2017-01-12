import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.currentUser) {
      return null;
    } else {
      return(
        <div className="app-footer">
          <div className="app-footer-tags">
            <a href="https://www.github.com/justinsuen/chartesian">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/justin-suen-6a258669">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>
          <div className="app-footer-attr">
            <p>Created by and maintained by <a href="http://justinsuen.com">Justin Suen</a></p>
            <p>Graph icons designed by <a href="https://roundicons.com/">Roundicons</a></p>
          </div>
        </div>
      );
    }
  }
}

export default Footer;
