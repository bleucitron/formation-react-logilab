import React from 'react';

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
      <div>{full_text}</div>
      <div>{created_at}</div>
      <div>{user.name}</div>
    </li>
  );
}
