export const deleteUser = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'user', {
    'method': 'DELETE'
  });

  try {
    const { status } = await response.json();
    console.log(status);
    if (status === 'success') console.log('user was deleted');
  } catch (err) {
    console.error(err);
  }
};
