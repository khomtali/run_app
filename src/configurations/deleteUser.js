export const deleteUser = async (userToken) => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'user', {
    'method': 'DELETE',
    'headers': {
      'authorization': `Bearer ${userToken}`
    }
  });

  try {
    const { status } = await response.json();
    if (status === 'success') return 1;
  } catch (err) {
    console.error(err);
  }
};
