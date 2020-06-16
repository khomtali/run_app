import React from 'react';
import PropTypes from 'prop-types';

function ZoneRow(props) {
  return (
    <tr>
      <th>{props.range.join(' - ')}</th>
      <th>{props.description.effort}</th>
      <th>{props.description.effect}</th>
    </tr>
  );
}

ZoneRow.propTypes = {
  range: PropTypes.array.isRequired,
  description: PropTypes.object.isRequired
};

export default ZoneRow;
