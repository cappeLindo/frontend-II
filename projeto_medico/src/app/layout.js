import "./globals.css";
import Header from '@/components/header/index.js';
import style from '@/components/header/header.module.css';


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br"> 
      <body>
        <Header/>
      </body>
    </html>
  );
}
