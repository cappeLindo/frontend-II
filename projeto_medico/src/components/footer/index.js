import Image from 'next/image';
import style from './footer.module.css'; 

export default function Footer() { 
    return(
        <footer className={style.footer}>
            <div className={style.logo1}>
                <Image src='/images/logo1.png' alt='Logo' width={155} height={50}/>
            </div>
            <div className={style.direito}>
                <p>© 2025-2025 Todos os direitos do site reservado</p>
            </div>
        </footer>
    )
}