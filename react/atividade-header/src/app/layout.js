import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Atividade cabeçalho",
  description: "Uma atividade proposta no AVA",
  charset: 'UTF-8',
  author: 'Nathan Teixeira Lopes',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
  
};

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
