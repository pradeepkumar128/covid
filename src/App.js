import React from 'react'
import './App.css';
import Covid from './components/Covid.js';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <h1 className="header">Covid-19 Tracker</h1>
      <Covid/>
     <Footer/>
    </>
  )
}

export default App