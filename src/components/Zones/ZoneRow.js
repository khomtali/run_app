import React from 'react';
import PropTypes from 'prop-types';

const ZoneRow = ({ range, description }) => {
  return (
    <tr>
      <td className="range">{range.join(' - ')}</td>
      <td>{description.effort}</td>
      <td>{description.effect}</td>
    </tr>
  );
};

ZoneRow.propTypes = {
  range: PropTypes.array.isRequired,
  description: PropTypes.object.isRequired
};

export default ZoneRow;
