import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CalculatorInput(props) {
  const initialState = { userAge: '', restRate: '' };
  const [form, setForm] = useState(initialState);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit(form);
    setForm(initialState);
  }
  return (
    <div className="zone-calculator__input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">Age</label>
        <input type="number" min="0" max="100" name="userAge" id="userAge" required
          value={form.userAge} onChange={handleChange} />
        <label htmlFor="resting-heart-rate">Resting heart rate</label>
        <input type="number" min="0" max="200" name="restRate" id="restRate" required
          value={form.restRate} onChange={handleChange} />
        <button>Calculate</button>
      </form>
    </div>
  )
}

CalculatorInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CalculatorInput;
