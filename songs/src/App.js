import React from 'react';
import { selectSong } from './actions';
import SongList from './components/SongList';

const App = () => {
  return <div>
    <fieldset>
      <legend>App</legend>
    </fieldset>

    <main>
      <SongList />
    </main>
  </div>;
}

export default App;
