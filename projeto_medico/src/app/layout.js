import "./globals.css";
import Header from '@/components/header/index.js';
import style from '@/components/header/header.module.css';
import Footer from '@/components/footer/index.js';



export default function RootLayout({ children }) {
  return (
    <html lang="pt-br"> 
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
