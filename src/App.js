
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import IceCreamItemContainer from './components/IceCreamItemContainer';


function App() {
  return (
    < Provider store={store}>
    <div className="App">
      <IceCreamItemContainer />
    </div>
    </Provider>
  );
}

export default App;
