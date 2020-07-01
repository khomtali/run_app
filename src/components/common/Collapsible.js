import React from 'react';
import PropTypes from 'prop-types';

import './Collapsible.css';

const Collapsible = ({ name, description }) => {
  const handleClick = event => {
    event.preventDefault();
    event.target.classList.toggle('active');
    const details = event.target.nextElementSibling;
    if (details.style.maxHeight) details.style.maxHeight = null;
    else details.style.maxHeight = details.scrollHeight + 'px';
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="collapsible">{name}</button>
      <div className="details">
        <p>{description}</p>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Collapsible;
