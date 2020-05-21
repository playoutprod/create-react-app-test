import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ImportComponent from './importComponent';

console.log(process.env);

ReactDOM.render(
  <React.StrictMode>
    <ImportComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);
