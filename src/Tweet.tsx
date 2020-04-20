import React from 'react';
import { FaTwitter } from 'react-icons/fa';

export interface User {
  [d: string]: any;
  name: string;
}

export interface TweetProps {
  [d: string]: any;
  id: number;
  lang: string;
  text: string;
  created_at: string;
  user: User;
}

export default function Tweet({ text, created_at: date, user }: TweetProps) {
  return (
    <li className='Tweet'>
      <div>{text}</div>
      <div>{date}</div>
      <div>{user.name}</div>
      <FaTwitter />
    </li>
  );
}
