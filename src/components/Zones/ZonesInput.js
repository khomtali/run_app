import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useUserContext } from '../../contexts/UserContext';
import { saveUserData } from '../../configurations/saveUserData';
import InputBlock from '../common/InputBlock';
import FormButton from '../common/FormButton';

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
    <form onSubmit={handleSubmit} className="input-form">
      <InputBlock key="userAge" id="userAge" label="Age" type="number"
        value={form.userAge} onChange={handleChange}
      />
      <InputBlock key="restRate" id="restRate" label="Resting heart rate" type="number"
        value={form.restRate} onChange={handleChange}
      />
      <FormButton label="Calculate" />
    </form>
  );
}

ZonesInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ZonesInput;
