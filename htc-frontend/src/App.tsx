import { MainManager } from 'views/MainManager';
import { Navbar } from 'components/Navbar';
import {Radio} from 'components/Radio';
import React from 'react';
import { useStoreState } from 'stores/StoreFront';
import './App.sass';



function App() {
  const emotion = useStoreState((store) => {
    return store.emotionModel.emotion;
  });


  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {emotion === "UNKNOWN" && <MainManager />}
        {
          emotion !== "UNKNOWN" &&
          <Radio />
        }
      </header>
    </div>
  );
}
export default App;
