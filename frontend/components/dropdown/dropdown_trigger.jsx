import React, { createClass, PropTypes } from 'react';
import { merge } from 'lodash';

class DropdownTrigger extends React.Component {
  render () {
    const { children, className } = this.props;
    const props = merge({}, this.props, {className: `dropdown-trigger ${className}`});

    return (
      <a {...props}>
        {children}
      </a>
    );
  }
}

export default DropdownTrigger;
