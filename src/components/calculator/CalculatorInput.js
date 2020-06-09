import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useUserContext } from '../../contexts/UserContext';
import { saveUserData } from '../../functions/userData';

function CalculatorInput(props) {
  const initialState = { userAge: '', restRate: '' };
  const [form, setForm] = useState(initialState);
  const { user } = useUserContext();

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit(form);
    saveUserData(user, form);
    setForm(initialState);
  };

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
  );
}

CalculatorInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CalculatorInput;
