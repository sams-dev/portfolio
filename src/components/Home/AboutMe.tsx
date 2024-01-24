import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter ({
  weight: '400',
  subsets: ["latin"],
})
export const AboutMe = () => {
    return (
      <main className= {` ${inter.className} flex flex-wrap justify-center items-center gap-8  py-8 text-lg xl:text-left`}>
        <div>
          <h1 className="text-base md:text-2xl font-semibold">Oi 👋🏽 SOU O SAMUEL DOS SANTOS </h1>
          <span className="flex text-5xl md:text-9xl font-bold gap-2 md:gap-4">REACT
            <a target="_blank" href="https://www.linkedin.com/in/samuel-moreira2905/">
            <Image src='/assets/linkedin.svg' width={128} height={128} alt="linkedin icon"/> </a>
            <a target="_blank" href="https://github.com/sams-dev">
            <Image src='/assets/GitHub.svg' width={128} height={128} alt="github icon"/></a>
            <a target="_blank" href="/CV-samsdev.pdf">
              <embed ></embed>
            <Image src='/assets/document.svg' width={128} height={128} alt="curriculo pdf icon"/></a>
          </span>
          <span className="text-5xl md:text-9xl font-semibold">DEVELOPER</span>
          <h2 className="text-xs md:text-sm font-medium"> TENHO 21 ANOS, SOU DESENVOLVEDOR FRONTEND
COM 7 MESES DE EXPERIENCIA TRABALHANDO COMO FREELANCER</h2>
          <Link href='/contatos'>Fale comigo!</Link>
        </div>
        <ul className="flex gap-2 md:gap-8 m-1 text-sm md:text-5xl">
          <li className="py-2 px-2 rounded-lg font-medium" style={{ backgroundColor: '#6BDDFA', color: '#000000'}}>react</li>
          <li className="py-2 px-2 rounded-lg font-medium" style={{ backgroundColor: '#EFD81D', color: '#000000'}}>javascript</li>
          <li className="py-2 px-2 rounded-lg font-medium" style={{ backgroundColor: '#2F74C0', color: '#ffffff'}}>typescript</li>
          <li className="py-2 px-2 rounded-lg font-medium" style={{ backgroundColor: '#000000', color: '#ffffff'}}>next.js</li>
        </ul>
      </main>
    );
}