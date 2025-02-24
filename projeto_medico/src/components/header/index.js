import Image from 'next/image';
import style from './header.module.css';
import Link from 'next/link';

export default function Header() { 
    return (
        <header className={style.Header}>
    <div className={style.logo}>
        <Image src='/images/logo1.png' alt='Logo' width={155} height={50}/>
    </div>
    <nav className={style.navegacao}>
        <ul className={style.sub_menu}>
            <li className={style.header_li}>
                <Link href='/'>Home</Link>
            </li>
            <li className={style.header_li}>
                <Link href='#'>Médicos</Link>
                <ul className={style.drop_li}>
                    <li className={style.header_li}>
                        <Link href='/medicos'>Listar</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Adicionar</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Editar</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Excluir</Link>
                    </li>
                </ul>
            </li>
            <li className={style.header_li}>
                <Link href='#'>Pacientes</Link>
                <ul className={style.drop_li}>
                    <li className={style.header_li}>
                        <Link href='/pacientes'>Listar</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Adicionar</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Adicionar</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Excluir</Link>
                    </li>
                </ul>
            </li>
            <li className={style.header_li}>
                <Link href='#'>Agendamento</Link>
                <ul className={style.drop_li}>
                    <li className={style.header_li}>
                        <Link href='/consulta'>Listar Consultas</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Agendar Consultas</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Editar Agendamento</Link>
                    </li>
                    <li className={style.header_li}>
                        <Link href='#'>Cancelar</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
            <div className={style.buttonContainer}>
                <button className={style.btn}>Contato</button>
            </div>
</header>

            
        
    )
}