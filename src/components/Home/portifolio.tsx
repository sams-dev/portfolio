import { Project } from "@/types/home";
import Head from "next/head";
import { Nunito } from "next/font/google";
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProjectsProps {
  projects: Project[];
}

const nunito = Nunito({
  weight: '400',
  subsets: ["latin"],
});

export const Projects = ({ projects }: ProjectsProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <>
      <Head>
        <title>Portifolio | samsdev</title>
      </Head>
      <section id="projetos" className="space-y-2 md:mt-16 bg-gray-200 rounded-2xl border border-gray-400 box-shadow lg:py-8 px-5 flex flex-col justify-start text-center items-center">
        <h2 className="text-2xl text-gray-700 md:text-4xl font-semibold">PROJETOS</h2>
        <Slider {...settings} className="w-[80%] lg:w-[98%] lg:h-[435px]">
          {projects.map(({ name, imageWeb, imageMobile, desc, linkRepositorio, linkSite, technologies }, index) => (
            <div className="overflow-hidden rounded-lg md:flex md:p-2" key={name + index}>
              <div className="lg:flex items-center gap-2 md:gap-4 ">
                <span className="text-2xl md:text-4xl font-medium block lg:hidden max-w-screen-md">{name}</span>
                <div className="py-4 relative flex flex-col items-center gap-y-2">
                  <div>
                    <div className="w-[172px] xs320:h-[0px]">
                    </div>
                    <div className="flex justify-center items-end gap-1">
                      <div className="desktop w-[w-full] xs320:w-[80%] md:w-[] xs320:h-[100%]   inline-block rounded">
                        <Image
                          src={imageWeb.url}
                          alt={imageWeb.alt}
                          width={1836}
                          height={944}
                          className="w-[100%] h-[100%]  object-cover rounded border-2 border-black"
                        />
                      </div>
                      <div className="mobibe flex absolute rounded-2xl md:rounded-2xl bottom-[45px] right-[-205px]  z-30">
                        <div className="ms:relative w-[16.5%] lg:w-[50%] xs320:h-[100%] z-10">
                          <Image
                            src={imageMobile.url}
                            alt={imageMobile.alt}
                            width={499}
                            height={897}
                            className="w-[100%] h-[100%]  border-2 border-black rounded-md md:rounded-xl z-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="flex flex-wrap justify-center items-center gap-0.5 md:gap-3 bg-gray-300 bg-opacity-80 border border-gray-400 rounded-lg md:rounded-2xl px-0.5 md:px-4 py-0.5" >
                    {technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="bg-gray-100 flex w-[18px] h-[18px] items-center p-[2px] md:p-2 border border-gray-300 rounded-md md:rounded-xl">
                        <Image className="md:w-[25px] md:h-[25x]" src={`/assets/${tech}-icon.svg`} width={25} height={25} alt={`logo do ${tech}`} /></li>
                    ))}
                  </ul>
                </div>
                <div className="relative flex flex-col text-center md:w-[560px]">
                  <span className="text-4xl font-medium hidden lg:block">{name}</span>
                  <p className={`${nunito.className} pb-4 text-sm md:text-base md:p-2 text-gray-800  text-justify indent-3 max-w-screen-md`}>{desc}</p>
                  <div className="flex justify-center items-center">
                    <div className="flex 
                     gap-4 md:gap-8 md:p-4 text-center justify-center items-center">
                      <a className="btn  flex items-center justify-center  h-[30px] md:gap-4 bg-gray-400 text-white md:text-lg text-xs text-center md:w-[200px] px-[2px] md:pr-9 md:p-3 rounded-lg md:rounded-xl" target="blanck" href={linkRepositorio.url}>
                        <Image src="/assets/gh-white.svg" alt="" width={18} height={20} />repositorio</a>
                      <a className="btn  flex items-center justify-center h-[30px] md:gap-8 bg-gray-400 text-white text-xs md:text-lg text-center md:w-[200px] p-1 gap-[3px] md:pr-7 md:p-3 rounded-lg md:rounded-xl" target="blanck" href={linkSite.url}>
                        <Image src="/assets/eye-icon.svg" alt="" width={10} height={18}
                          className="pr-" />visualizar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <br />
      </section>
    </>
  );
};
