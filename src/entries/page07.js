import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page07} from '../pages/page07/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page07 />, document.getElementById('root'));
registerServiceWorker();
