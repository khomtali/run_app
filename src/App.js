import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Signup from './components/auth/Signup';
import Calculator from './components/calculator/Calculator';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Calculator />
        <Signup />
      </main>
      <Footer />
    </>
  );
}

export default App;
