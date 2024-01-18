import { ReactNode } from "react";
import { Header } from "./Header";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter ({
  subsets: ['latin'],
  weight: '400'
});
export const Layout = ({children}: LayoutProps) => {
    return (
      <div className={inter.className}>
        <Header/>
        {children}
      </div>
  
    );
}