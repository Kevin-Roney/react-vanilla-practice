import './App.css';
import Button from './components/Button';
import { useState } from 'react';
import Joke from './components/Joke';

function App() {
  return (
    <div className='App'>
      <Joke />
    </div>
  );
}

export default App;
