import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page04} from '../pages/page04/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page04 />, document.getElementById('root'));
registerServiceWorker();
