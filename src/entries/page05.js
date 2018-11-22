import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page05} from '../pages/page05/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page05 />, document.getElementById('root'));
registerServiceWorker();
