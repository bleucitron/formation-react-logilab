import React, { useState, useMemo } from 'react';
import Authors from './Authors';
import TweetList from './TweetList';
import Filter from './Filter';

import useGetTweets from './customHook';
import { TweetProps } from './Tweet';

function getAuthors(tweets: TweetProps[]) {
  console.log('Calculating authors');
  const authorSet = new Set(tweets.map(tweet => tweet.user.name));
  return [...authorSet];
}

export default function AppHook() {
  const [isFr, setIsFr] = useState(false);
  const [selected, setSelected] = useState('');
  const data = useGetTweets();

  function toggle() {
    setIsFr(!isFr);
  }

  function selectAuthor(name: string) {
    if (name !== selected) {
      setSelected(name);
    } else {
      setSelected('');
    }
  }

  const authors = useMemo(() => getAuthors(data), [data]);
  console.log('Selected', selected);

  let tweetsToDisplay = isFr ? data.filter(tweet => tweet.lang === 'fr') : data;

  tweetsToDisplay = selected
    ? tweetsToDisplay.filter(tweet => tweet.user.name === selected)
    : tweetsToDisplay;

  return (
    <div className='App'>
      <Filter text='Click' filter={toggle} />
      <Authors authors={authors} select={selectAuthor} selected={selected} />
      <TweetList tweets={tweetsToDisplay} />
    </div>
  );
}
