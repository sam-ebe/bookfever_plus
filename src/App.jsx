import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom'

// databooks needed from the beginning (in Categories button, Autocomplete search bar, Homepage)
import {dataBooks} from './data/dataBooks';

function App() {
  return (
    <Router>
      <div className="App">
        <Header dataBooks={dataBooks} />
        <Main dataBooks={dataBooks}/>
      </div>
    </Router>
  );
}

export default App;
