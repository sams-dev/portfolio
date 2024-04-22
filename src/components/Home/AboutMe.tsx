import Link from "next/link";
import { Ubuntu, Roboto, Nunito } from "next/font/google";
import Image from "next/image";

const ubunto = Ubuntu({
  weight: '700',
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: '400',
  subsets: ["latin"],
});
const nunito = Nunito({
  weight: '400',
  subsets: ["latin"],
});
export const AboutMe = () => {
  return (
    <main className={` ${roboto.className} flex flex-wrap justify-center items-center gap-8  lg:gap-16  py-8 text-lg xl:text-lef`}>
      <div>
        <h1 className="text-base md:text-2xl font-semibold indent-2 md:indent-4">Oi 👋🏽 SOU O SAMUEL DOS SANTOS </h1>
        <span className={` ${ubunto.className} flex text-5xl items-center md:text-9xl font-bold gap-2 md:gap-8`}>REACT
          <div className="flex gap-2">
            <a target="_blank" href="https://www.linkedin.com/in/samuel-moreira2905/">
              <Image src='/assets/linkedin.svg' width={95} height={128} alt="linkedin icon" /> </a>
            <a target="_blank" href="https://github.com/sams-dev">
              <Image src='/assets/GitHub.svg' width={95} height={128} alt="github icon" /></a>
            <a target="_blank" href="/CV-samsdev.pdf">
              <Image src='/assets/document.svg' width={95} height={128} alt="curriculo pdf icon" /></a>
          </div>
        </span>
        <span className={` ${ubunto.className} text-5xl md:text-9xl font-semibold`}>DEVELOPER</span>
        <br />
        <h2 className={`${nunito.className} p-2 text-sm md:text-sm text-justify font-medium indent-1 max-w-screen-md`}> Tenho 21 anos, sou desenvolvedor frontend com 7 meses de experiencia trabalhando como freelancer. Desenvolvo sistemas focados em auxiliar, que ampliem a qualidade e maximize o tempo e ganho dos clientes, trazendo assim uma experiencia customizada e otimizada de forma única. </h2>

        <Link href='/contatos' className="p-2 bg-gray-400 text-white font-medium text-xl md:text-2xl w-fit rounded-lg transition-all hover:bg-opacity-80 flex ml-auto">Fale comigo!</Link>
        
        <ul className="flex flex-wrap gap-2 pt-6 md:gap-3 text-center justify-center text-base md:text-4xl lg:text-5xl">
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/html5-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/css3-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/bootstrap-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/js-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/react-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/redux-icon.svg" width={20} height={20} alt=""></Image></li>
        
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="rounded md:rounded-md md:w-[40px] md:h[40px]" src="/assets/ts-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/nextjs-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/tailwind-css-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/figma-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/ux-icon.svg" width={20} height={20} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[40px] md:h[40px]" src="/assets/ui8-icon.svg" width={20} height={20} alt=""></Image></li>
        </ul>
      </div>

    </main>
  );
}