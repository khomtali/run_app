export const deleteUser = async (userToken) => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'user', {
    'method': 'DELETE',
    'headers': {
      'authorization': `Bearer ${userToken}`
    }
  });

  try {
    const result = await response.text();
    console.log(result);
    // if (status === 'success') console.log('user was deleted');
  } catch (err) {
    console.error(err);
  }
};
