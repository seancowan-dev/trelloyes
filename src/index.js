import React from 'react';
import ReactDOM from 'react-dom';
import { AppList } from './App';
import './index.css';
import { STORE } from './store';

ReactDOM.render(<AppList store={STORE} />, document.getElementById('root'));