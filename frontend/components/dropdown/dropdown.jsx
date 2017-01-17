import React, { cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';

import DropdownTrigger from './dropdown_trigger';
import DropdownContent from './dropdown_content';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick);
    window.addEventListener('touchstart', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
    window.removeEventListener('touchstart', this.handleOutsideClick);
  }

  isActive() {
    return (typeof this.props.active === 'boolean')
      ? this.props.active : this.state.active;
  }

  hide() {
    this.setState({active: false});

    if (this.props.onHide) {
      this.props.onHide();
    }
  }

  show() {
    this.setState({active: true});

    if (this.props.onShow) {
      this.props.onShow();
    }
  }

  handleOutsideClick(e) {
    const dropdown = findDOMNode(this.refs.dropdown);
    if ((e.target !== dropdown && !dropdown.contains(e.target) && this.isActive())
        || !e.target.className.includes("trigger")) {
      this.hide();
    }
  }

  toggleClick(e) {
    e.preventDefault();
    if (this.isActive()) {
      this.hide();
    } else {
      this.show();
    }
  }

  render() {
    const {children, className} = this.props;
    const active = this.isActive();
    let dropdownClasses = cx({dropdown: true, 'dropdown-active': active});
    dropdownClasses += ' ' + className;

    const boundChildren = React.Children.map(children, child => {
      if (child.type === DropdownTrigger) {
        const originalOnClick = child.props.onClick;
        child = cloneElement(child, {
          ref: 'trigger',
          onClick: e => {
            this.toggleClick(e);
            if (originalOnClick) {
              originalOnClick.apply(child, arguments);
            }
          }
        });
      }
      return child;
    });

    return (
      <div ref="dropdown" style={this.props.style} className={dropdownClasses}>
        {boundChildren}
      </div>
    );
  }
}

export default Dropdown;
