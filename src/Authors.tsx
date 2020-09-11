import React from 'react';

interface AuthorsProps {
  authors: string[];
  selected: string;
  select(s: string): void;
}

export default function ({ authors, select, selected }: AuthorsProps) {
  const instances = authors.map(author => (
    <li
      className={selected === author ? 'selected' : ''}
      onClick={() => select(author)}
      key={author}
    >
      {author}
    </li>
  ));

  return <ul className='Authors'>{instances}</ul>;
}
