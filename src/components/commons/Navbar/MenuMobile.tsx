import Link from "next/link";
import Image from "next/image";
import { MenuIconClose } from "@/components/menu-mobile/menuicon-close";

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const MenuMobile = ({ isVisible, onClose }: MenuProps) => {
  return (
    <div className={`${isVisible ? 'flex': 'hidden'} 
    fixed inset-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-sm md:hidden`
    }onClick={onClose} >
      <div className="w-full bg-black h-80 shadow-md py-2 px-2 transition-opacity"
      onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between mb-4">
          <Link href="/">
            <Image src="/Sd.png" width={50} height={50} alt="icone da samsdev" />
          </Link>
          <button onClick={onClose}>
            <MenuIconClose className="w-10 h-10" />
          </button>
        </div>
        <nav className="flex flex-col gap-8 text-xl p-5 items-center">
          <Link href="/" onClick={onClose}>Sobre mim</Link>
          <Link href="/portfolio" onClick={onClose}>Portfolio</Link>
          <Link href="/contatos" onClick={onClose}>Entre em contato</Link>
        </nav>
      </div>
    </div>
  );
}