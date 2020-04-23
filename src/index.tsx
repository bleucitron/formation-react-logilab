import React from 'react';
import ReactDOM from 'react-dom';


interface Personne {
    nom: string;
    age: number;
}

type PersonneProps = Personne;

function Personne(props: PersonneProps) { 
    const {nom, age} = props;
    return (
        <div className="personne">
            <div className="nom">
                {nom}
            </div>
            <div className="">
                {age}
            </div>
        </div>
    );
}

interface ColocProps {
    personnes: Personne[]
}

function Coloc({personnes}: ColocProps) {
    return (
        <>
            {
                personnes.map((personne, i) => 
                    <Personne key={i} nom={personne.nom} age={personne.age}/>)
            }
        </>
    );
}

const personnes: Personne[] = [{
    nom: "Frank",
    age: 25,
}, {
    nom: "Toto",
    age: 21
}]

ReactDOM.render((
    <div>
        <Coloc personnes={personnes} />
    </div>),
    document.getElementById('root'));
