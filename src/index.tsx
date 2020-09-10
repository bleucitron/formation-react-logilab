import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import tweetData from './data/tweets.json';

console.log('DATA', tweetData);

ReactDOM.render(<App data={tweetData} />, document.getElementById('root'));
