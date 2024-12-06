import style from './page.module.css'

export default function lista() { 
    const carros = ['Corola', 'Onix', 'Fiesta', 'Fusion', 'Ford Ka', 'Honda Fit', 'Passat', 'Jetta'];

    const carrosObj = [
        {
            id:1,
            carro:"Corola",
        },
        {
            id:2, 
            carro:"Onix",
        },
        {
            id:3,
            carro:"Fiesta",
        },
        {
            id:4,
            carro:"Fusion",
        },
        {
            id:5,
            carro:"Ford Ka",
        },
        {
            id:6,
            carro:"Honda Fit",
        },
        {
            id:7,
            carro:"Passat",
        },
        {
            id:8,
            carro:"Jetta",
        }

    ];

    return (
        <div>
            <h1>lista</h1>
            <p>{carrosObj[0].carro}</p>
            <h2>Lista comum</h2>
            <ul>
                <li>
                    {carros.map((carros, car) => (<li key={car} > {car + 1} - {carros}</li>))}
                </li>
            </ul>
            <h2>Lista de Objeto</h2>
            {carrosObj.map((carrosObj) => (
                <div key={carrosObj.id}>
                    <h3  > {carrosObj.id} - {carrosObj.carro}</h3>
                </div>

            ))}
        </div>
    ) 
}