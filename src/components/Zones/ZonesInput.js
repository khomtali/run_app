import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useUserContext } from '../../contexts/UserContext';
import { saveUserData } from '../../configurations/saveUserData';

const ZonesInput = ({ onSubmit }) => {
  const initialState = { userAge: '', restRate: '' };
  const [form, setForm] = useState(initialState);
  const { user } = useUserContext();

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(form);
    if (user) saveUserData(user, form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="content__zones__input-form">
      <div className="content__zones__input-form__block">
        <label htmlFor="userAge">Age</label>
        <input type="number" min="0" max="100" name="userAge" id="userAge" required
          value={form.userAge} onChange={handleChange} />
      </div>
      <div className="content__zones__input-form__block">
        <label htmlFor="restRate">Resting heart rate</label>
        <input type="number" min="0" max="200" name="restRate" id="restRate" required
          value={form.restRate} onChange={handleChange} />
      </div>
      <div>
        <button className="content__zones__input-form__button">Calculate</button>
      </div>
    </form>
  );
}

ZonesInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ZonesInput;
