import { Navbar } from 'components/Navbar';
import React from 'react';
import { MainManager } from 'views/MainManager';
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
