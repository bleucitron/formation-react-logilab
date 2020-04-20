import React from 'react';
import Tweet, { TweetProps } from './Tweet';

export interface TweetList {
  tweets: TweetProps[];
}

export default function TweetList({ tweets }: TweetList) {
  return (
    <ul>
      {tweets.map((tweet: TweetProps) => (
        <Tweet {...tweet} key={tweet.id} />
      ))}
    </ul>
  );
}
