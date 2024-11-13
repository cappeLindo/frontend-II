import Link from "next/link";




export default function Header() { 
    return ( 
        <header>
            <nav>
                <ul>
                    <li><Link href='/sobre'>Sobre</Link></li>
                    <li><Link href='#'></Link>Contato</li>
                </ul>
            </nav>
        </header>
    )


}