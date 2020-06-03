import React from 'react';
import './SignUpForm.css';
// import PropTypes from 'prop-types';

function SignUpFrom(props) {
  return (
    <div>
      <form>
        <label htmlFor="user-name">Name</label>
        <input type="text" name="user-name" />
        <label htmlFor="user-email">E-mail</label>
        <input type="email" name="email" />
        <label htmlFor="user-email">Password</label>
        <input type="password" name="password" />
        <button>Sign up</button>
      </form>
    </div>
  )
}

// SignUpFrom.propTypes = {
// };

export default SignUpFrom;
