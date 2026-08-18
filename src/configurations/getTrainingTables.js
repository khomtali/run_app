import { backendURL } from './constants';

export const getTrainingTables = async () => {
  const response = await fetch(backendURL + 'trainings', {
    'method': 'GET',
  });
  try {
    const { types } = await response.json();
    return types;
  } catch (err) {
    console.error(err);
  }
};
