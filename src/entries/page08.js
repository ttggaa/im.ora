import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page08} from '../pages/page08/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page08 />, document.getElementById('root'));
registerServiceWorker();
