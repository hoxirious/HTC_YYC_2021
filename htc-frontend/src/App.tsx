import { MainManager } from 'views/MainManager';
import { Navbar } from 'components/Navbar';
import { Radio } from 'components/Radio';
import React from 'react';
import { useStoreState } from 'stores/StoreFront';
import './App.sass';



function App() {
  return (
    <div className="App">
      <Navbar />
      <MainManager />
    </div>
  );
}
export default App;
