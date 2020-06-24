import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TrainingPlanInput = ({ onSubmit }) => {
  const [form, setForm] = useState({ level: '1', distance: '5 km'});

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
  };

  return (
    <form onSubmit={handleSubmit} className="content__training__input-form">
      <div className="content__training__input-form__block">
        <label htmlFor="level">Level</label>
        <select name="level" id="level" required onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="content__training__input-form__block">
        <label htmlFor="distance">Plan distance</label>
        <select name="distance" id="distance" required onChange={handleChange}>
          <option>5 km</option>
          <option>10 km</option>
          <option>Half marathon</option>
          <option>Marathon</option>
        </select>
      </div>
      <div>
        <button className="content__training__input-form__button">Configure</button>
      </div>
    </form>
  );
};

TrainingPlanInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TrainingPlanInput;
