import React from 'react';
import Header from './components/Header';
import Abovegame from './components/Abovegame';
import Game from './components/Game';

function App() {
  return (
    <div className="container">
      <Header/>
      <Abovegame/>
      <Game/>
    </div>
  );
}

export default App;
