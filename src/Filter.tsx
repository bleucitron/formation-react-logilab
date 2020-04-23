import React from 'react';

interface IFilter {
  label: string;
  handleClick(): void;
}

function Filter(props: IFilter) {
  const { label, handleClick } = props;
  return <button onClick={handleClick}>{label}</button>;
}

export default Filter;
