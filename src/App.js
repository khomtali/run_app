import React from 'react';
// import { useUserContext } from './contexts/UserContext';
import Header from './components/header';
import Menu from './components/menu/';
import Calculator from './components/calculator/';
// import UserProfile from './components/user-profile';
import Footer from './components/footer/';
import './App.css';

function App() {
  // const { user } = useUserContext();

  return (
    <>
      <Header />
      <main>
        <Menu />
        <div className="content">
          {/* {!user ? */}
            <Calculator />
            {/* : */}
            {/* <UserProfile /> */}
          {/* } */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
