import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page03} from '../pages/page03/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page03 />, document.getElementById('root'));
registerServiceWorker();
