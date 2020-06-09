import React from 'react';
import './App.css';
import Header from './components/header';
import Menu from './components/menu/';
import Calculator from './components/calculator/';
import Footer from './components/footer/';

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
