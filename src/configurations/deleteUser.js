import { backendURL } from './constants';

export const deleteUser = async (userToken) => {
  const response = await fetch(backendURL + 'user', {
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
