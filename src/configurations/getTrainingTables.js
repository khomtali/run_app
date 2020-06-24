export const getTrainingTables = async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'trainings', {
    'method': 'GET',
  });
  try {
    const { types } = await response.json();
    console.log(types);
  } catch (err) {
    console.error(err);
  }
};
