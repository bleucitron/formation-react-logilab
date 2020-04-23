import React from 'react';

interface IAuthorFilter {
  label: string;
  handleClick(): void;
}

function AuthorFilter(props: IAuthorFilter) {
  const { label, handleClick } = props;
  return <button onClick={handleClick}>{label}</button>;
}

export default AuthorFilter;
