import React from 'react';
import moment from 'moment';

interface User {
  name: string;
}

export interface TweetProps {
  full_text: string;
  created_at: string;
  user: User;
  id: number;
  [k: string]: any;
}

export default function Tweet({ full_text, created_at, user }: TweetProps) {
  return (
    <li className='Tweet'>
      <div className='text'>{full_text}</div>
      <div className='date'>
        {moment(created_at, 'ddd MMM DD HH:mm:ss ZZ YYYY').fromNow()}
      </div>
      <div className='author'>{user.name}</div>
    </li>
  );
}
