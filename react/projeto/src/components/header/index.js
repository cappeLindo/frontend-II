import Link from "next/link";




export default function Header() { 
    return ( 
        <header>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/sobre'>Sobre</Link></li>
                    <li><Link href='/contato'>Contato</Link></li>
                    <li><Link href='/lista'>Listas</Link></li>
                </ul>
            </nav>
        </header>
    )


}