import React from 'react';

interface User {
  name: string;
}

export interface ITweet {
  id: number;
  text: string;
  created_at: string;
  lang: string;
  user: User;
}

type TweetProps = ITweet;

function Tweet(props: TweetProps) {
  const { text, created_at: date, user } = props;

  return (
    <li className='Tweet'>
      <div className='text'>{text}</div>
      <div className='date'>{date}</div>
      <div className='user'>{user.name}</div>
    </li>
  );
}

export default Tweet;
