import Link from "next/link";
import Image from "next/image";
import { MenuIconClose } from "@/components/menu-mobile/menuicon-close";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const MenuMobile = ({ isVisible, onClose }: MenuProps) => {
  return (
    <div className={`${isVisible ? 'flex': 'invisible'}`}>
      <div>
        <div>
          <Link href="/">
            <Image src="/Sd.png" width={50} height={50} alt="icone da samsdev" />
          </Link>
          <button onClick={onClose}>
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
