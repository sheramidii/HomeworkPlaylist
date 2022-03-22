import logo from './logo.svg';
import './App.css';
import data from './module';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="header">
      <h1>Create Playlist</h1>
      </div>

      <div className="song-section">
        <div className="song-content">
          <img className="album" id="albumImage" src={data.album.images[0].url} alt="albumImage"
          width="250" 
          />
          <p className="sTitle">{data.name}</p>
          <p className="sArtist">{data.artists[0].name}</p>
         <button className="btn select">Select</button>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
