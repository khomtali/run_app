export const saveUserData = async (user, data) => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'user', {
    'method': 'PATCH',
    'headers': {
      'authorization': `Bearer ${user.token}`,
      'contentType': 'application/json'
    },
    'body': {
      'auth0_id': user.auth0_id,
      'fields': {
        'age': data.userAge,
        'resting_heart_rate': data.restRate
      }
    }
  });
  const { status } = await response.text();
  console.log(status);
};