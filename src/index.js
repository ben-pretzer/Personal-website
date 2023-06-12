import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import '../styles.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Analytics/>
  </React.StrictMode>,
  document.getElementById('root')
);