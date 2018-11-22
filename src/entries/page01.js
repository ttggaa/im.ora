import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page01} from '../pages/page01/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page01 />, document.getElementById('root'));
registerServiceWorker();
