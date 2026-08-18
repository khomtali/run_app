import React from 'react';
import PropTypes from 'prop-types';

import './TabHeader.css'

const TabHeader = ({ header }) => {
  return <h2 className="tab-header">{header}</h2>;
};

TabHeader.propTypes = {
  header: PropTypes.string.isRequired
};

export default TabHeader;
