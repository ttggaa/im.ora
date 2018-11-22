import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../Store.js';
import {view as Index} from '../pages/index/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
