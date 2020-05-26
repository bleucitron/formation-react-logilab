import React, { useState, useEffect, useMemo } from 'react';

import fetchJson from './fetchJson';
import AuthorFilter from './AuthorFilter';
import Filter from './Filter';
import { ITweet } from './Tweet';
import TweetList from './TweetList';
import ScaleLoader from 'react-spinners/ScaleLoader';

interface AppProps {
  urls: string[];
}

function App(props: AppProps) {
  const [isFr, setIsFr] = useState(false);
  const [tweets, setTweets] = useState<ITweet[] | undefined>();
  const [selectedAuthor, setSelectedAuthor] = useState<string | undefined>();

  useEffect(() => {
    const { urls } = props;
    const myPs = urls.map(fetchJson);

    Promise.all(myPs).then(data => {
      const tweets = data.flat();
      setTweets(tweets);
    });
  }, []);

  function toggleIsFr() {
    setIsFr(isFr => !isFr);
  }

  function setAuthor(name: string) {
    setSelectedAuthor((a: string | undefined) => {
      const newAuthor = a === name ? undefined : name;

      return newAuthor;
    });
  }

  const authors = useMemo(
    () => [...new Set(tweets?.map(tweet => tweet.user.name))],
    [tweets],
  );

  let tweetsToDisplay = isFr
    ? tweets?.filter(tweet => tweet.lang === 'fr')
    : tweets;

  tweetsToDisplay = selectedAuthor
    ? tweetsToDisplay?.filter(tweet => tweet.user.name === selectedAuthor)
    : tweetsToDisplay;

  const filterLabel = isFr ? 'To All' : 'To Fr';

  const authorButtons = authors?.map(author => (
    <AuthorFilter
      key={author}
      label={author}
      handleClick={() => setAuthor(author)}
    />
  ));

  return (
    <div className='App'>
      <Filter label={filterLabel} handleClick={toggleIsFr} />
      <div className='authors'>{authorButtons}</div>
      {tweetsToDisplay ? (
        <TweetList tweets={tweetsToDisplay} />
      ) : (
        <ScaleLoader />
      )}
    </div>
  );
}

export default App;
