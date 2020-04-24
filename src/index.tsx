import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';


ReactDOM.render(
  <App dataUrl={[url1, url2]}/>,
  document.getElementById('root')
);
