import Link from "next/link";

export const Header = () => {
    return (
        <header>
          <Link href='/'>
            <img src="Sd.png" alt="icone da samsdev" />
          </Link>
          <nav>
            <Link href='/'>Sobre mim</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/contatos'>Entre em contato</Link>
          </nav>
        </header>
    );
}