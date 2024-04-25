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
      <section id="projetos" className="space-y-2 md:mt-16 bg-gray-200 rounded-2xl border border-gray-400 box-shadow px-5 flex flex-col justify-start text-center items-center">
        <h2 className="text-2xl text-gray-400 mt-2 md:text-4xl font-semibold">PROJETOS</h2>
        <Slider {...settings} className="w-[80%] lg:w-[98%] lg:h-[435px]">
          {projects.map(({ name, imageWeb, imageMobile, desc, linkRepositorio, linkSite, technologies }, index) => (
            <div className="overflow-hidden rounded-lg md:flex md:p-2" key={name + index}>
              <div className="lg:flex lg:h-[400px] items-start gap-2 md:gap-6 lg:gap-2">
                <span className="text-2xl md:text-4xl text-black font-medium block lg:hidden max-w-screen-md">{name}</span>
                <div className="py-1 relative flex flex-col items-center gap-y-2">
                  <div>
                    <div className="w-[172px] xs320:h-[0px]">
                    </div>
                    <div className="flex justify-center lg:justify-start items-end gap-1">
                      <div className="desktop w-[w-full] xs320:w-[80%] lg:w-[85%] xs320:h-[100%] ml-1   inline-block rounded">
                        <Image
                          src={imageWeb.url}
                          alt={imageWeb.alt}
                          width={1836}
                          height={944}
                          className="w-[100%] h-[100%]  object-cover rounded border-2 border-black"
                        />
                      </div>
                      <div className="mobibe flex absolute rounded-2xl md:rounded-2xl bottom-[32px] xs:bottom-[45px] sm:bottom-[60px] md:bottom-[75px] lg:bottom-[75px] right-[-205px] xs:right-[-185px] sm:right-[-145px] md:right-[-110px] lg:right-[-140px] xl:right-[-95px]  z-30">
                        <div className="ms:relative w-[17.5%] xs:w-[25%] sm:w-[40%] md:w-[50%]  lg:w-[35%] xl:w-[50%] xs320:h-[100%] z-10">
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
                  <ul className="flex justify-center items-center gap-0.5 xs:gap-1 md:gap-2 lg:gap-3 bg-gray-300 bg-opacity-80 border border-gray-400 rounded-lg xs:rounded-xl mt-1 sm:mt-3 md:mt-5 lg:mt-7 p-0.5 xs:p-1 md:p-[6px]" >
                    {technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="bg-gray-100 flex justify-center items-center w-[18.8px] h-[18.8px] xs:w-[26px] xs:h-[26px] sm:w-[38px] sm:h-[38px] md:w-[45px]  md:h-[45px] lg:w-[32px]  lg:h-[32px] p-[2px] md:p-1 border border-gray-300 rounded-md md:rounded-xl">
                        <Image className="" src={`/assets/${tech}-icon.svg`} width={55} height={55} alt={`logo do ${tech}`} /></li>
                    ))}
                  </ul>
                </div>
                <div className="lg:flex">
                  <div className="relative flex flex-col items-center text-center">
                    <span className="text-4xl font-medium hidden lg:flex lg:items-start">{name}</span>
                    <p className={`${nunito.className} p-2 text-sm md:text-base md:p-2 text-gray-700  text-justify indent-3 max-w-screen-md`}>{desc}</p>
                    <div className="flex  justify-center items-center lg:absolute lg:bottom-[-155px] lg:">
                      <div className="flex 
                     gap-4 xs480:gap-11  sm:gap-[75px] lg:gap-10 m-4 xs480:m-7 md:m-10 lg:m-6 text-center justify-center items-center">
                        <a className="btn  flex items-center justify-center  h-[35px] xs480:h-[40px] sm:h-[45px] md:h-[60px] lg:h-[50px] bg-gray-400 text-white text-xs xs:text-lg xs480:text-xl sm:text-2xl md:text-3xl lg:text-lg px-[2px] rounded-lg" target="blanck" href={linkRepositorio.url}>
                          <Image src="/assets/gh-white.svg" alt="" width={18} height={18}
                            className="xs:w-[24px] sm:w-[30px] md:w-[45px] lg:w-[35px]" />repositorio</a>
                        <a className="btn  flex items-center justify-center h-[35px] xs480:h-[40px] sm:h-[45px] md:h-[60px] lg:h-[50px] bg-gray-400 text-white text-xs xs:text-lg xs480:text-xl sm:text-2xl md:text-3xl lg:text-lg  p-1 gap-[3px] md:gap-[6px] lg:gap-1 rounded-lg" target="blanck" href={linkSite.url}>
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
