import { Main } from 'components/Main';
import { Navbar } from 'components/Navbar';
import Player from 'components/Player';
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
        {emotion === "" && <Main />}
        {
          emotion !== "" &&
          <Player />
        }
      </header>
    </div>
  );
}
export default App;
