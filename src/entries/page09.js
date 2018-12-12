import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page09} from '../pages/page09/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page09 />, document.getElementById('root'));
registerServiceWorker();
