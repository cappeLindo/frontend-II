import style from './page.module.css'
import Card from '@/components/card'

export default function Props() { 

    const cars = [
        {
            modelo:"Corola",
            cor:"Azul",
            ano:2014
        },
        {
            modelo:"Onix",
            cor:"Carmin",
            ano:2018
        },
        {
            modelo:"Fiesta",
            cor:"Prata",
            ano:2012
        },
        {
            modelo:"Fusion",
            cor:"Azul",
            ano:2013
        },
        {
            modelo:"Ford Ka",
            cor:"Preto",
            ano:2019
        },
        {
            modelo:"Honda Fit",
            cor:"Branco",
            ano:2014
        },
        {
            modelo:"Passat",
            cor:"Vermelho",
            ano:2024
        },
        {
            modelo:"Jetta",
            cor:"Branco",
            ano:2011
        }
    ]

    return(
        <div>
            <h1>
                Props
            </h1>
            <div>
                {cars.map((car) => (
                    <Card 
                        key={car.id}
                        modelo={car.modelo}
                        cor={car.cor}
                        ano={car.ano}
                    />
                ))}
            </div>
        </div>
        
    )
}