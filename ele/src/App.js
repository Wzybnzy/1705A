import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import RootRouter from './router/index'
// import stor
function App() {
  return (
    <>
        <RootRouter />
    </>
  );
}

export default App;
