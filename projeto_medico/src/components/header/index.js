import Image from 'next/image';
import style from './header.module.css';


export default function Header() { 
    return (
        <header className={style.Header}>
            <div className={style.logo}>
                <Image src='/images/logo1.png' alt='Logo' width={155} height={50}/>
            </div>
            <nav className={style.navegacao}>
                <ul className={style.sub_menu}>
                    <li className={style.header_li}>
                        <a href='#'>Home</a>
                    </li>
                    <li className={style.header_li}>
                        <a href='#'>Médicos</a>
                        <ul className={style.drop_li}>
                            <li className={style.header_li}>
                                <a href='#'>Listar</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Adicionar</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Editar</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Excluir</a>
                            </li>
                        </ul>
                    </li>
                    <li className={style.header_li}>
                        <a href='#'>Pacientes</a>
                        <ul className={style.drop_li}>
                            <li className={style.header_li}>
                                <a href='#'>Listar</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Adicionar</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Adicionar</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Excluir</a>
                            </li>
                        </ul>
                    </li>
                    <li className={style.header_li}>
                        <a href='#'>Agendamento</a>
                        <ul className={style.drop_li}>
                            <li className={style.header_li}>
                                <a href='#'>Listar Consultas</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Agendar Consultas</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Editar Agendamento</a>
                            </li>
                            <li className={style.header_li}>
                                <a href='#'>Carcelar</a>
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