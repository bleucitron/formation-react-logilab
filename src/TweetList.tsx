import React from 'react';

import Tweet, { TweetProps } from './Tweet';

interface TweetListProps {
  tweets: TweetProps[];
}

export default function TweetList({ tweets }: TweetListProps) {
  const instances = tweets.map(tweet => <Tweet {...tweet} key={tweet.id} />);

  return <ul className='TweetList'>{instances}</ul>;
}
