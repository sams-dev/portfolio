import Link from "next/link";
import Image from "next/image";
import { MenuIconClose } from "@/components/menu-mobile/menuicon-close";

export const MenuMobile = () => {
  return (
    <div>
      <div>
        <div>
          <Link href="/">
            <Image src="/Sd.png" width={50} height={50} alt="icone da samsdev" />
          </Link>
          <button>
            <MenuIconClose />
          </button>
        </div>
        <nav>
          <Link href="/">Sobre mim</Link>
          <Link href="/portifolio">Portifolio</Link>
          <Link href="/contatos">Entre em contato</Link>
        </nav>
      </div>
    </div>
  );
}
