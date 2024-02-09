import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Loading"
import "./main.css";
import Loading from "./Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brian Torres Web",
  description: "Brian Torres Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Loading/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
