import React, { useState } from 'react';

import { useUserContext } from '../../contexts/UserContext';
import { saveUserData } from '../../configurations/saveUserData';
import { deleteUser } from '../../configurations/deleteUser';
import { logout } from '../../configurations/auth';
import TabHeader from '../common/TabHeader';
import InputBlock from '../common/InputBlock';
import FormButton from '../common/FormButton';
import './styles.css';

const UserProfile = () => {
  const { user } = useUserContext();
  const initialState = {
    userName: user.authData.name || '',
    userNickname: user.authData.nickname || '',
    userAge: user.age || '',
    restRate: user.resting_heart_rate || ''
  };
  const [form, setForm] = useState(initialState);
  let [savStatus, setSavStatus] = useState();
  let [delStatus, setDelStatus] = useState();

  const handleChange = event => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
    setSavStatus('');
    setDelStatus('');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const isSaved = await saveUserData(user, form);
    if (isSaved) setSavStatus('* Your data was saved successfully');
    else {
      setSavStatus('* Your data was not saved. Please try again later');
      setForm(initialState);
    }
  };

  const handleDeleteClick = async event => {
    event.preventDefault();
    const isDeleted = await deleteUser(user.token);
    if (isDeleted) logout();
    else setDelStatus('* Your account was not deleted. Please try again later');
  };

  return (
    <div className="content__profile">
      <TabHeader header="My Profile" />
      <form onSubmit={handleSubmit} className="input-form">
        <InputBlock key="userName" id="userName" label="Name" type="text"
          value={form.userName} onChange={handleChange}
        />
        <InputBlock key="userNickname" id="userNickname" label="Nickname" type="text"
          value={form.userNickname} onChange={handleChange}
        />
        <InputBlock key="userAge" id="userAge" label="Age" type="number"
          value={form.userAge} onChange={handleChange}
        />
        <InputBlock key="restRate" id="restRate" label="Resting heart rate" type="number"
          value={form.restRate} onChange={handleChange}
        />
        <div>
          <FormButton label="Save data" />
          <p>{savStatus}</p>
        </div>
      </form>
      <div className="content__profile__form-divider"></div>
      <div>
        <a className="content__profile__form__delete" href="." onClick={handleDeleteClick}>
          Delete account
        </a>
        <p>{delStatus}</p>
      </div>
    </div>
  );
};

export default UserProfile;
