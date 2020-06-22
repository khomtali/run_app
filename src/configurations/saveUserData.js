export const saveUserData = async (user, data) => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'user', {
    'method': 'PATCH',
    'headers': {
      'authorization': `Bearer ${user.token}`,
      'content-type': 'application/json'
    },
    'body': JSON.stringify({
      id: user.auth0_id,
      fields: {
        age: data.userAge,
        resting_heart_rate: data.restRate,
        name: data.userName,
        nickname: data.userNickname
      }
    })
  });
  try {
    const { status } = await response.json();
    if (status === 'success') return 1;
  } catch (err) {
    console.error(err);
  }
};
