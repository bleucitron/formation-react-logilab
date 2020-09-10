import React from 'react';

interface FilterProps {
  text: string;
  filter(): void;
}

export default function Filter({ text, filter }: FilterProps) {
  return <button onClick={filter}>{text}</button>;
}
