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
    <main className={` ${roboto.className} flex flex-wrap justify-center items-center gap-8  lg:gap-16  py-2 text-lg xl:text-lef`}>
      <div className="flex flex-col justify-center">
        <h1 className="text-base xs480:text-sm xs580:text-lg sm:text-lg sm670:text-[21px] md:text-[21px] md830:text-2xl md860:text-[26px] lg:text-2xl lg1100:text-[26px] xl:text-3xl font-semibold indent-2 sm:indent-3 md:indent-6 md860:indent-9 lg:indent-8 xl:indent-12">Oi 👋🏽 SOU O SAMUEL DOS SANTOS </h1>
        <span className={` ${ubunto.className} flex items-center sm:indent-2 md:indent-3 md860:indent-5 lg:indent-4 xl:indent-8 text-5xl xs:text-6xl xs480:text-7xl xs600:text-[85px] xs580:text-8xl sm:text-[6rem] sm670:text-[7rem] md:text-[7rem] md830:text-[8rem] md860:text-[9rem] lg:text-[8rem] lg1100:text-[9rem] xl:text-[10rem] font-bold gap-2 md:gap-8`}>REACT
          <div className="flex justify-center items-center">
            <a target="_blank" href="https://www.linkedin.com/in/samuel-moreira2905/">
              <Image className="sm:w-[85px] md:w-[90px] md860:w-[110px] lg:w-[100px] xl:w-[120px] md:mr-6 mr-4" src='/assets/linkedin.svg' width={120} height={128} alt="linkedin icon" /> </a>
            <a target="_blank" href="https://github.com/sams-dev">
              <Image className="sm:w-[115px] md:w-[105px] md860:w-[120px] lg:w-[115px] xl:w-[132px]" src='/assets/github.svg' width={132} height={128} alt="github icon" /></a>
            <a target="_blank" href="/CV-samsdev.pdf">
              <Image className="sm:w-[115px] md:w-[110px] md860:w-[120px] lg:w-[122px] xl:w-[142px]" src='/assets/document.svg' width={142} height={128} alt="curriculo pdf icon" /></a>
          </div>
        </span>
        <span className={` ${ubunto.className} sm:indent-2 md:indent-3 md860:indent-5 lg:indent-4 xl:indent-8 text-5xl xs:text-6xl xs480:text-7xl xs600:text-[85px] xs580:text-8xl sm:text-[6rem] sm670:text-[7rem] md:text-[7rem] md830:text-[8rem] md860:text-[9rem] lg:text-[8rem] lg1100:text-[9rem] xl:text-[10rem] font-semibold`}>DEVELOPER</span>
        <br />
        <h2 className={`${nunito.className} p-2 text-sm md:text-base text-justify font-medium indent-1 lg:max-w-4xl xl:max-w-screen-lg`}> Tenho 21 anos, sou desenvolvedor frontend com 7 meses de experiencia trabalhando como freelancer. Desenvolvo sistemas focados em auxiliar, que ampliem a qualidade e maximize o tempo e ganho dos clientes, trazendo assim uma experiencia customizada e otimizada de forma única. </h2>

        <Link href='/contatos' className="p-2 bg-gray-400 text-white font-medium text-xl md:text-2xl w-fit rounded-lg transition-all hover:bg-opacity-80 flex ml-auto">Fale comigo!</Link>
        
        <ul className="flex flex-wrap gap-2 pt-6 md:gap-3 text-center justify-center text-base md:text-4xl lg:text-5xl">
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/html5-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/css3-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/js-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/bootstrap-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/react-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/redux-icon.svg" width={35} height={35} alt=""></Image></li>        
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px] rounded md:rounded-md" src="/assets/ts-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/nextjs-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/tailwind-css-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/git-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/npm-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/figma-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] md:w-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/ux-icon.svg" width={35} height={35} alt=""></Image></li>
          <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="xs320:w-[16px] xs320:h-[16px] sm:w-[16px] sm:h-[16px] md:h-[20px] lg:w-[26px] lg:h-[26px]" src="/assets/ui8-icon.svg" width={35} height={35} alt=""></Image></li>
        </ul>
      </div>

    </main>
  );
}