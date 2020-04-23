import React from 'react';
import ReactDOM from 'react-dom';


interface IPersonne {
    nom: string;
    age: number;
}


function Personne(props : IPersonne) {
    const { nom, age } = props;

    return (
        <li className='Personne'>
            <div className='nom'>{nom}</div>
            <div className='age'>{age}</div>
        </li>
    );
}

const personnes = [
    {nom: 'Jean', age: 24}, 
    {nom: 'Daniel', age: 19}, 
    {nom: 'Euphrasie', age: 23}
]

interface ColocProps {
    membres: IPersonne[];
}

function Coloc({ membres } : ColocProps) {

    const elements = membres.map(
        membre => (<Personne {...membre} />)
    )

    return <ul className='Coloc'>{elements}</ul>

}

ReactDOM.render(
    <Coloc membres={personnes}/>, 
    document.getElementById('root')
);
