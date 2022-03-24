import './App.css';
import Card from './component/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="header">
      <h1>Create Playlist</h1>
      </div>
      </header>

      <div className="Card-list">
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}

export default App;
