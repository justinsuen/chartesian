import React from 'react';
import { merge } from 'lodash';

class DropdownContent extends React.Component {
  render () {
    const { children, className } = this.props;
    const props = merge({}, this.props, {className: `dropdown-content ${className}`});

    return (
      <div {...props}>
        {children}
      </div>
    );
  }
}

export default DropdownContent;
