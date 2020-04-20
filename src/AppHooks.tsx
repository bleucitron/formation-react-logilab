import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import BounceLoader from 'react-spinners/BounceLoader';

import { TweetProps } from './Tweet';
import TweetList from './TweetList';
import Filter from './Filter';

import fetchJson from './fetchJson';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

function App() {
  const [isFr, setIsFr] = useState(false);
  const [data, setData] = useState<TweetProps[] | undefined>();

  useEffect(() => {
    Promise.all(urls.map(fetchJson)).then(results => {
      setData(results.flat());
    });
  }, []);

  function filter() {
    setIsFr(isFr => !isFr);
  }

  let content = <BounceLoader />;

  if (data) {
    const tweetsToDisplay = isFr ? data?.filter(t => t.lang === 'fr') : data;
    content = <TweetList tweets={tweetsToDisplay} />;
  }

  return (
    <div className='App'>
      <FaFilter />
      <Filter text={isFr ? 'Display All' : 'Display French'} filter={filter} />
      {content}
    </div>
  );
}

export default App;
