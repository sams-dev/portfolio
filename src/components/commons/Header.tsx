import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
          <Link href='/'>
            <Image src="/Sd.png" width={50} height={50} alt="icone da samsdev" />
          </Link>
          <nav>
            <Link href='/'>Sobre mim</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/contatos'>Entre em contato</Link>
          </nav>
        </header>
    );
}