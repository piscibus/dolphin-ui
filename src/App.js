import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'antd/dist/antd.css'
import './css/style.css'
import Routes from './routes/index'
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store()}>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
