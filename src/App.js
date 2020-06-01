import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Calculator from './components/calculator/Calculator';
import SignUpForm from './components/sign-up-form/SignUpForm';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Calculator />
        <SignUpForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
