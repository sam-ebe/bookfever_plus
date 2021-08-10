import React from 'react';
import './App.css';
import Book from './components/Book';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Book title="My 1st book" author="I me" />
    </div>
  );
}

export default App;
