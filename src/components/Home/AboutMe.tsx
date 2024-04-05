import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  weight: '400',
  subsets: ["latin"],
})
export const AboutMe = () => {
  return (
    <main className={` ${inter.className} flex flex-wrap justify-center items-center gap-8  lg:gap-16  py-8 text-lg xl:text-lef`}>
      <div>
        <h1 className="text-base md:text-2xl font-semibold">Oi 👋🏽 SOU O SAMUEL DOS SANTOS </h1>
        <span className="flex text-5xl md:text-9xl font-bold gap-2 md:gap-4">REACT
          <a target="_blank" href="https://www.linkedin.com/in/samuel-moreira2905/">
            <Image src='/assets/linkedin.svg' width={128} height={128} alt="linkedin icon" /> </a>
          <a target="_blank" href="https://github.com/sams-dev">
            <Image src='/assets/GitHub.svg' width={128} height={128} alt="github icon" /></a>
          <a target="_blank" href="/CV-samsdev.pdf">
            <Image src='/assets/document.svg' width={128} height={128} alt="curriculo pdf icon" /></a>
        </span>
        <span className="text-5xl md:text-9xl font-semibold">DEVELOPER</span>
        <br />
        <h2 className="text-sm md:text-sm font-medium max-w-screen-md"> Tenho 21 anos, sou desenvolvedor frontend com 7 meses de experiencia trabalhando como freelancer. Desenvolvo sistemas focados em auxiliar, que ampliem a qualidade e maximize o tempo e ganho dos clientes, trazendo assim uma experiencia customizada e otimizada de forma única. </h2>
        <br />
        <Link href='/contatos' className="p-2 bg-gray-400 text-white font-medium text-xl md:text-4xl w-fit rounded-lg transition-all hover:bg-opacity-80 flex ml-auto">Fale comigo!</Link>
        <br />
        <ul className="flex gap-2 md:gap-6 text-center justify-center text-base md:text-4xl lg:text-5xl">
          <li className="w-fit p-2 rounded-lg font-medium" style={{ backgroundColor: '#6BDDFA', color: '#000000' }}>React</li>
          <li className="w-fit p-2 rounded-lg font-medium" style={{ backgroundColor: '#EFD81D', color: '#000000' }}>JavaScript</li>
          <li className="w-fit p-2 rounded-lg font-medium" style={{ backgroundColor: '#2F74C0', color: '#ffffff' }}>TypeScript</li>
          <li className="w-fit p-2 rounded-lg font-medium" style={{ backgroundColor: '#000000', color: '#ffffff' }}>Next.js</li>
        </ul>
      </div>

    </main>
  );
}