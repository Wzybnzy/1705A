import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import RootRouter from './router/index'
import store from './store/index'
// import stor
function App() {
  return (
    <Provider store ={store}>
        <RootRouter />
    </Provider>
  );
}

export default App;
