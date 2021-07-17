import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Nav />
      <hr />
      <Title />
      <hr />
      <SearchBar />
    </div>
  );
}

export default App;
