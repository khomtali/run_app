import React from 'react';
import PropTypes from 'prop-types';

function ZoneRow(props) {
  return (
    <tr>
      <td className="range">{props.range.join(' - ')}</td>
      <td>{props.description.effort}</td>
      <td>{props.description.effect}</td>
    </tr>
  );
}

ZoneRow.propTypes = {
  range: PropTypes.array.isRequired,
  description: PropTypes.object.isRequired
};

export default ZoneRow;
