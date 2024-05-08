import { Project } from "@/types/home";
import Head from "next/head";
import { Nunito, Roboto } from "next/font/google";
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProjectsProps {
  projects: Project[];
}

const roboto = Roboto({
  weight: '400',
  subsets: ["latin"],
});

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
      <section id="projetos" className="space-y-2 md:mt-16 bg-gray-200 rounded-2xl border border-gray-400 box-shadow px-5 flex flex-col justify-start text-center items-center">
        <h2 className="text-2xl text-gray-400 mt-2 md:text-4xl font-semibold">PROJETOS</h2>
        <Slider {...settings} className="w-[95%]  md:w-[95%] lg:w-[98%] lg:min-h-[415px] lg:h-[100%] xl:h-[100%]">
          {projects.map(({ name, imageWeb, desc, linkRepositorio, linkSite, technologies }, index) => (
            <div className="overflow-hidden rounded-lg md:flex md:p-2 lg:min-h-[415px]" key={name + index}>
              <div className="lg:flex items-start gap-2  lg:gap-1">
                <span className="text-3xl sm:text-4xl md:text-5xl text-black font-medium block lg:hidden max-w-screen-md">{name}</span>
                <div className="py-1 relative flex flex-col items-center gap-y-2">
                  <div>
                    
                    <div className="flex justify-center lg:justify-start items-end gap-1">
                      <div className="desktop w-[w-full] xs320:w-[80%] lg:w-[85%] xs320:h-[100%] ml-1 inline-block rounded">
                        <Image
                          src={imageWeb.url}
                          alt={imageWeb.alt}
                          width={999}
                          height={1024}
                          className="w-[100%] h-[100%] object-cover lg:ml-[3rem]"
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="lg:flex">
                  <div className="relative flex flex-col items-center text-center">
                    <span className={`${roboto.className} text-4xl font-medium hidden lg:flex lg:items-start`}>{name}</span>
                    <p className={`${nunito.className} p-2 text-sm md:text-base md:p-2 text-gray-600  text-justify indent-3 max-w-screen-lg`}>{desc}</p>
                    <ul className="flex justify-center items-center gap-0.5 xs:gap-2 xs480:gap-3 sm:gap-3 md:gap-4 lg:gap-2 xl:gap-3 mt-1 sm:mt-3 md:mt-5 lg:mt-7 xl:mt-9 p-1 xs:p-1 md:p-2" >
                    {technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="bg-gray-100 flex justify-center items-center xs320:w-[24px] xs320:h-[24px] xs:w-[30px] xs:h-[30px] xs480:w-[35px] xs480:h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px]  md:h-[45px] lg:w-[35px]  lg:h-[35px] xl:w-[40px]  xl:h-[40px] p-1 sm:p-1 md:p-2 lg:p-2 xl:p-2 border border-gray-300 rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl">
                        <Image className="" src={`/assets/${tech}-icon.svg`} width={60} height={60} alt={`logo do ${tech}`} /></li>
                    ))}
                  </ul>
                    <div className="flex  justify-center items-center lg:absolute lg:bottom-[-100px] xl:bottom-[-130px]">
                      <div className="flex gap-4 xs480:gap-11  sm:gap-[75px]  lg:gap-[40px] m-4 xs480:m-7 md:m-10 lg:m-6 text-center justify-center items-center">
                        <a className="btn  flex items-center justify-center lg:w-[150px] xl:w-[170px]  h-[35px] xs480:h-[40px] sm:h-[45px] md:h-[60px] lg:h-[50px] bg-gray-400 text-white text-xs xs:text-lg xs480:text-xl sm:text-2xl md:text-3xl lg:text-lg xl:text-2xl px-[2px] rounded-lg" target="blanck" href={linkRepositorio.url}>
                          <Image src="/assets/gh-white.svg" alt="" width={18} height={18}
                            className="xs:w-[24px] sm:w-[30px] md:w-[45px] lg:w-[35px]" />repositorio</a>
                        <a className="btn  flex items-center justify-center lg:w-[150px] xl:w-[170px] h-[35px] xs480:h-[40px] sm:h-[45px] md:h-[60px] lg:h-[50px] bg-gray-400 text-white text-xs xs:text-lg xs480:text-xl sm:text-2xl md:text-3xl lg:text-lg xl:text-2xl p-1 gap-[3px] md:gap-[6px] lg:gap-1 rounded-lg" target="blanck" href={linkSite.url}>
                          <Image src="/assets/eye-icon.svg" alt="" width={10} height={18}
                            className="xs:w-[14px] sm:w-[18px] md:w-[28px] lg:w-[22px]"
                          />visualizar</a>
                      </div>
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
