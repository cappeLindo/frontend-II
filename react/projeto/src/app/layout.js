//import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Projeto",
  description: "Mostrando seu nome",
  author: "Vitor G. Capelleto",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
