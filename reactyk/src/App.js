import React from 'react';
// import logo from './logo.svg';
import '@/css/style.scss';
// import Index from '@/views/index/index.js'

import RootRouter from '@/router/index'
function App() {
  return (
    <div className="App">
      <RootRouter />
      {/* <Index /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
