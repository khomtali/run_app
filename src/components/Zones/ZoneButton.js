import React from 'react';
import PropTypes from 'prop-types';

const ZoneButton = ({ number, description }) => {
  const handleClick = event => {
    event.preventDefault();
    event.target.classList.toggle('active-zone');
    const zoneDetails = event.target.nextElementSibling;
    if (zoneDetails.style.maxHeight) zoneDetails.style.maxHeight = null;
    else zoneDetails.style.maxHeight = zoneDetails.scrollHeight + 'px';
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="collapsible">{number}</button>
      <div className="content__zones__info__details">
        <p>{description}</p>
      </div>
    </div>
  );
};

ZoneButton.propTypes = {
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ZoneButton;
