import Image from "next/image";
import Link from "next/link";
import { Roboto } from 'next/font/google';
import { MenuMobile } from "./MenuMobile";
import { useCallback, useState } from "react";
import { MenuIcon } from "@/components/menu-mobile/menuIcon";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});
export const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const OpenMenu = useCallback( () => {setMenuOpen(true);
  }, []);

  const closeMenu = useCallback( () => {setMenuOpen(false);
  }, []);
  
  return (
    <header className={`${roboto.className} bg-black text-sm flex py-2 px-2 justify-between text-white font-normal items-center sticky top-0 z-20`}>
      <Link href='/'>
        <Image src="/Sd.png" width={50} height={50} alt="icone da samsdev" />
      </Link>
      <button className="p-1 md:hidden">
        <MenuIcon/>
      </button>
      <nav className="hidden md:flex items-center gap-4 text-md">
        <Link href='/'>Sobre mim</Link>
        <Link href='/portfolio'>Portfolio</Link>
        <Link href='/contatos'>Entre em contato</Link>
      </nav>
      <MenuMobile />
    </header>
  );
}