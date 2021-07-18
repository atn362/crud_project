import React from 'react';
import './App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <hr />
      
      <hr />
      <SearchBar />
    </div>
  );
}

export default App;
