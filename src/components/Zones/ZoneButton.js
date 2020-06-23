import React from 'react';
import PropTypes from 'prop-types';

function ZoneButton(props) {
  const handleClick = event => {
    event.preventDefault();
    event.target.classList.toggle('active-zone');
    const zoneDetails = event.target.nextElementSibling;
    if (zoneDetails.style.maxHeight) zoneDetails.style.maxHeight = null;
    else zoneDetails.style.maxHeight = zoneDetails.scrollHeight + 'px';
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="collapsible">{props.number}</button>
      <div className="content__zones__info__details">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

ZoneButton.propTypes = {
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ZoneButton;
