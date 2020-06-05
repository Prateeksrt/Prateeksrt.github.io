import HelloComponent from './components/HelloComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const wrapper = document.getElementById("content");
ReactDOM.render(<HelloComponent />, wrapper);