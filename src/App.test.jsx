import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserContext } from './contexts/UserContext';

test('renders the app homepage', () => {
  const { getByText } = render(
    <BrowserRouter>
      <UserContext.Provider value={{ user: undefined }}>
        <App />
      </UserContext.Provider>
    </BrowserRouter>
  );

  expect(getByText('Welcome to ReDI-Run-App!')).toBeInTheDocument();
});
