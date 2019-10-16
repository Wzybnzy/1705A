import React from 'react';
// import logo from './logo.svg';
import '@/css/style.scss';
// import Index from '@/views/index/index.js'

import RootRouter from '@/router/index'
import {Provider} from 'react-redux'
import store from './store/index'
function App() {
  return (
    <Provider store={store}>
      <RootRouter/>
    </Provider>
    // <>
    //   <RootRouter/>
    // </>
  );
}

export default App;
