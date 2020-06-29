import React from 'react';

import { useUserContext } from '../../contexts/UserContext';
import TabHeader from '../common/TabHeader';

const Title = () => {
  const { user } = useUserContext();
  let greeting = 'Welcome to ReDI-Run-App!';
  if (user) greeting = `Welcome, ${user.authData.name}!`;

  return <TabHeader header={greeting} />;
};

export default Title;
