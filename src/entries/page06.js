import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page06} from '../pages/page06/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page06 />, document.getElementById('root'));
registerServiceWorker();
