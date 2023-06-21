import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoProps from './components/NoProps';
import TypeClassComp from './components/TypeClassComp';

function App() {
  return (
    <div className="App">
      <NoProps />
      <TypeClassComp startNumber={3} />
    </div>
  );
}

export default App;
