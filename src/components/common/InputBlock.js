import React from 'react';
import PropTypes from 'prop-types';

import './InputBlock.css';

const InputBlock = ({ id, label, type, value, onChange }) => {
  return (
    <div className="input-form__block">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} required
        value={value} onChange={onChange} />
    </div>
  );
};

InputBlock.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputBlock;
