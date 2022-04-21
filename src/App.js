import './App.css';
import AppRouter from './pages/router/router';
import {Provider} from "react-redux";
import store from './data/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppRouter/>
    </div>
    </Provider>
  );
}

export default App;
