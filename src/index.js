import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import Layout from './js/layout';
import 'jquery';
import 'bootstrap';
import 'popper.js';
import Login from './js/views/login';


ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);
