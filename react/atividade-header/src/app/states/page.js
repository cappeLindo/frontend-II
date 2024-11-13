'use client'

import { useState } from "react"

export default function states() { 
    const[conteudo, setConteudo] = useState('bom dia!');
    const[name, setName] = useState('');
    const[showDiv, setShowDiv] =useState(false);
    const controlarParagrafo = () => { 
        setConteudo('Boa tarde!'); 
        console.log('conteúdo: ' +conteudo);
    }

    const controlarInput = (evento) => { 
        console.log(evento.target.value)
        setName(evento.target.value)
    }

    return (
        <div>
            <p>{conteudo}</p>
            <button onClick={controlarParagrafo}>mudar</button>
            <button onClick={() => setShowDiv(!showDiv)}>{showDiv?'Esconder':'Mostrar'}</button>
            {showDiv && 
                (

            <div>
                <input type="text" onChange={controlarInput}/>
                <p>Nome: {name}</p>
            </div>
            
                )
            }
        </div>
    )
}