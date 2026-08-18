import React from 'react';
import PropTypes from 'prop-types';

import './FormButton.css';

const FormButton = ({ label }) => {
  return <button className="input-form__button">{label}</button>;
};

FormButton.propTypes = {
  label: PropTypes.string.isRequired
};

export default FormButton;
