import React from 'react';
import { merge } from 'lodash';

class DropdownTrigger extends React.Component {
  render () {
    const { children, className } = this.props;
    let dropdownClasses = 'dropdown-trigger';
    if (className !== undefined) {
      dropdownClasses += ' ' + className;
    }
    const props = merge({}, this.props, {className: `${dropdownClasses}`});

    return (
      <a {...props}>
        {children}
      </a>
    );
  }
}

export default DropdownTrigger;
