import style from './card.module.css'

export default function Card({modelo, cor, ano}) {
    return (
        <div className={style.cards}>
            <h2 className={style.name}>{modelo}</h2>
            <p>{cor}</p>
            <p>{ano}</p>
        </div>
    )
}