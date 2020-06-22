import React, { useState } from 'react';

import { useUserContext } from '../../contexts/UserContext';
import { saveUserData } from '../../configurations/saveUserData';
import { deleteUser } from '../../configurations/deleteUser';
import { logout } from '../../configurations/auth';
import './styles.css';

function UserProfile() {
  const { user } = useUserContext();
  const initialState = {
    userName: user.authData.name,
    userNickname: user.authData.nickname,
    userAge: user.age || '',
    restRate: user.resting_heart_rate || ''
  };
  const [form, setForm] = useState(initialState);
  let [savStatus, setSavStatus] = useState();
  let [delStatus, setDelStatus] = useState();

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
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
      <h2>My Profile</h2>
      <form onSubmit={handleSubmit} className="content__profile__input-form">
        <div className="content__profile__input-form__block">
          <label htmlFor="userName">Name</label>
          <input type="text" name="userName" id="userName" required
            value={form.userName} onChange={handleChange} />
        </div>
        <div className="content__profile__input-form__block">
          <label htmlFor="userNickname">Nickname</label>
          <input type="text" name="userNickname" id="userNickname" required
            value={form.userNickname} onChange={handleChange} />
        </div>
        <div className="content__profile__input-form__block">
          <label htmlFor="userAge">Age</label>
          <input type="number" min="0" max="100" name="userAge" id="userAge" required
            value={form.userAge} onChange={handleChange} />
        </div>
        <div className="content__profile__input-form__block">
          <label htmlFor="restRate">Resting heart rate</label>
          <input type="number" min="0" max="200" name="restRate" id="restRate" required
            value={form.restRate} onChange={handleChange} />
        </div>
        <div className="content__profile__input-form__button">
          <button>Save data</button>
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
