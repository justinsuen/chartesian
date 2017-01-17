import React from 'react';
import { merge } from 'lodash';

class DropdownContent extends React.Component {
  render () {
    const { children, className } = this.props;
    let dropdownClasses = 'dropdown-content';
    if (className !== undefined) {
      dropdownClasses += ' ' + className;
    }
    const props = merge({}, this.props, {className: `${dropdownClasses}`});

    return (
      <div {...props}>
        {children}
      </div>
    );
  }
}

export default DropdownContent;
