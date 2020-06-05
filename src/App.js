import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Calculator from './components/calculator/Calculator';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Menu />
        <Calculator />
      </main>
      <Footer />
    </>
  );
}

export default App;
