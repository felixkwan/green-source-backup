import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static tabPropTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <button
        className={className}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}

export default Tab;
