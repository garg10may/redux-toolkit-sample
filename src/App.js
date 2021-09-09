import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Counters from './features/myCounter/myCounters';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Counter/>
      </header>
      <Counters></Counters>
    </div>
  )
}

export default App;
