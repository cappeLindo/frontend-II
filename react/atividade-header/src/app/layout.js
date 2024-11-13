//import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Projeto",
  description: "Mostrando seu nome",
  author: "Vitor G. Capelleto",
  charset: "UTF-8",
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
