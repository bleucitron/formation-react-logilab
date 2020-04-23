import React from 'react';

import Tweet, { ITweet } from './Tweet';

interface TweetListProps {
  tweets: ITweet[];
}

function TweetList({ tweets }: TweetListProps) {
  const ts = tweets.map(tweet => <Tweet {...tweet} key={tweet.id} />);

  return <ul className='TweetList'>{ts}</ul>;
}

export default TweetList;
