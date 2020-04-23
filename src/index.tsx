import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

ReactDOM.render(<App urls={urls} />, document.getElementById('root'));
