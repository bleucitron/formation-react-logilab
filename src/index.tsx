import React from 'react';
import ReactDOM from 'react-dom';

type PersonProps = {
  nom: string;
  age: number;
}

const Person = (props: PersonProps) => {
  const {nom, age} = props;
  return (
    <div className='Person'>
      <div className='nom'>{nom}</div>
      <div className='age'>{age}</div>
    </div>
  );
}

type ColocProps = {
  members:PersonProps[];
}

const Coloc = ({members}: ColocProps) => {
  return (
    <div>
    {members.map(x => <Person {...x} key={x.nom}/>)}
    </div>
  );
}

const personnes: PersonProps[] = [
  {
    age:29,
    nom:'Noé'
  },
  {
    age:33,
    nom:'Kentin'
  }
]

ReactDOM.render(
  <Coloc members={personnes} />,
  document.getElementById('root')
);
