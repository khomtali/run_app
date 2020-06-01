import React from 'react';
import PropTypes from 'prop-types';

function ZoneRow(props) {
  return (
    <tr key={props.index}>
      <th key={props.index + '1'}>{props.range.join(' - ')}</th>
      <th key={props.index + '2'}>{props.description.effort}</th>
      <th key={props.index + '3'}>{props.description.effect}</th>
    </tr>
  )
}

ZoneRow.propTypes = {
  range: PropTypes.array.isRequired,
  description: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default ZoneRow;
