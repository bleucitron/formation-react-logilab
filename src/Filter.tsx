import React from 'react';


export type FilterProps = {
  handleClick(): void;
  label: string;
}

const Filter = (props: FilterProps ) => {
  return (
    <button className='Filter' onClick={props.handleClick}>{props.label}</button>
  );
}

export default Filter;
