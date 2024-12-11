'use client'
import { useState } from "react";

export default function Filter() { 

    const nomes = ['Vitor', 'Miguel', 'Carlos', 'Joana', 'Marcela'];
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares = num.filter(num => (num%2==0));
    const [busca, setBusca] = useState('');
    const buscarNomes = nomes.filter(nome => (nome.toLowerCase().startsWith(busca.toLowerCase())));

    return (
        <div>
            <h1>Filter/Filtro</h1>

            <input 
                type="text" 
                value={busca} 
                onChange={(ev) => (setBusca(ev.target.value))}
            />
                

            <ul>
                <li>
                    {buscarNomes.map((buscarNomes, Sobre) => (<li key={Sobre} > {Sobre + 1} - {buscarNomes}</li>))}
                </li>
            </ul>
        </div>
    )
}