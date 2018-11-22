import React from 'react';
import ReactDOM from 'react-dom';
import {view as Page02} from '../pages/page02/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Page02 />, document.getElementById('root'));
registerServiceWorker();
