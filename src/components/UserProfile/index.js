import React, { useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { saveUserData, updateUserData } from '../../configurations/saveUserData';
import { deleteUser } from '../../configurations/deleteUser';
// import { logout } from '../../configurations/auth';
import './styles.css';

function UserProfile() {
  const { user } = useUserContext();
  const initialState = {
    userName: user.authData.name,
    userNickname: user.authData.nickname,
    userAge: user.age,
    restRate: user.resting_heart_rate
  };
  const [form, setForm] = useState(initialState);
  let [savStatus, setStatus] = useState();

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
    setStatus('');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const isSaved = await saveUserData(user, form);
    updateUserData(user, form);
    if (isSaved) setStatus('* Your data was saved successfully');
    else {
      setStatus('* Your data was not saved. Please try again later');
      setForm(initialState);
    }
  };

  const handleDeleteClick = async event => {
    event.preventDefault();
    deleteUser(user.token);
    // logout(); commented to see errors of deleteUser();
  };

  return (
    <div className="content__profile">
      <h2>My Profile</h2>
      <form onSubmit={handleSubmit} className="content__profile__input-form">
        <div className="content__profile__input-form__block">
          <label htmlFor="name">Name</label>
          <input type="text" name="userName" id="userName" required
            value={form.userName} onChange={handleChange} />
        </div>
        <div className="content__profile__input-form__block">
          <label htmlFor="nickname">Nickname</label>
          <input type="text" name="userNickname" id="userNickname" required
            value={form.userNickname} onChange={handleChange} />
        </div>
        <div className="content__profile__input-form__block">
          <label htmlFor="age">Age</label>
          <input type="number" min="0" max="100" name="userAge" id="userAge" required
            value={form.userAge} onChange={handleChange} />
        </div>
        <div className="content__profile__input-form__block">
          <label htmlFor="resting-heart-rate">Resting heart rate</label>
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
        <a className="content__profile__form__delete" href="." onClick={handleDeleteClick}>Delete account</a>
      </div>
    </div>
  );
};

export default UserProfile;
