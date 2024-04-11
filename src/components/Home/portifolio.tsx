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
      <section id="projetos" className="space-y-2 md:mt-16 bg-gray-200 rounded-2xl border border-gray-400 box-shadow lg:pt-8 px-5 flex flex-col justify-start text-center items-center">
        <h2 className="text-2xl text-gray-700 md:text-4xl font-semibold">PROJETOS</h2>
        <Slider {...settings} className="lg:w-[1140px] lg:h-[435px]">
          {projects.map(({ name, image }, index) => (
            <div className="overflow-hidden rounded-lg md:flex md:p-2" key={name + index}>
              <div className="md:flex md:gap-4 ">
                <span className="text-2xl md:text-4xl font-medium block md:hidden max-w-screen-md">{name}</span>
                <div className="py-4 relative flex flex-col justify-start items-center gap-y-2">
                  <Image
                    src="/responsive (2).png"
                    alt=""
                    width={280}
                    height={160}
                    className="md:w-[596px] md:h-[325px]"
                  />
                  <div className="desktop w-[206px] h-[120px] md:w-[435px] md:h-[257px] inline-block rounded absolute bg-black top-[22px] right-[35px] md:top-[28px] md:right-[74px] z-10">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={451}
                      height={263}
                      className="w-[206px] h-[120px] md:w-[451px] md:h-[263px] object-cover border border-gray-800 rounded-md"
                    />
                  </div>
                  <div className="mobibe w-[58px] h-[106px] md:w-[136px] md:h-[238px] bg-whit absolute rounded-2xl md:rounded-2xl bottom-[68px] right-[1px] md:bottom-[82px] md:right-[1px] z-30">
                    <Image
                      src="/cel.png"
                      alt=""
                      width={136}
                      height={239}
                      className="w-[70px] h-[107px] md:w-[136px] md:h-[239px] rounded-xl bottom-[0px] right-[0px] md:bottom-[0px] md:right-[0px] z-30"
                    />
                    <div className="ms:relative sm:w-[60px] sm:h-[107px] z-10">
                      <Image
                        src="/v-mobile.png"
                        alt=""
                        width={125}
                        height={225}
                        className="sm:w-[60px] sm:h-[107px] md:w-[125px] md:h-[225px] border border-gray-800 rounded-lg md:rounded-xl absolute bottom-[2px] right-[1px] md:bottom-[8px] md:right-[4px] z-10"
                      />
                    </div>
                  </div>
                  <ul className="flex justify-center items-center gap-3 bg-black bg-opacity-80 border border-gray-800 rounded-lg md:rounded-2xl px-4 py-2" >
                    <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[25px] md:h[25x]" src="/assets/html5-icon.svg" width={20} height={20} alt="" /></li>
                    <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[25px] md:h[25x]" src="/assets/css3-icon.svg" width={20} height={20} alt="" /></li>
                    <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[25px] md:h[25x]" src="/assets/js-icon.svg" width={20} height={20} alt="" /></li>
                    <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[25px] md:h[25x]" src="/assets/react-icon.svg" width={20} height={20} alt="" /></li>
                    <li className="bg-gray-100 flex items-center p-2 border border-gray-300 rounded-xl"><Image className="md:w-[25px] md:h[25x]" src="/assets/bootstrap-icon.svg" width={20} height={20} alt="" /></li>
                  </ul>
                </div>
                <div className="relative flex flex-col text-center md:w-[560px]">
                  <span className="text-4xl font-medium hidden md:block">{name}</span>
                  <p className={`${nunito.className} pb-4 text-sm md:text-base md:p-2 text-gray-800 max-w-screen-md`}>Lorem Ipsum iLorem Ipsum is simply dummy text of sed in the 1960s with the release of Letraset sheets containing since the 1500s, but also the leap into electronic typesetting, Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <div className="md:relative flex items-center">
                    <div className="flex gap-4 pt-2 md:gap-8 md:p-4 text-center md:absolute md:top-[160px] md:left-[55px]  justify-between items-center">
                      <a className="btn flex items-center md:gap-4 bg-gray-400 text-white md:text-lg text-center md:w-[200px] p-[5px] pr-9 md:p-3 rounded-lg md:rounded-xl" href="">
                        <Image src="/assets/gh-white.svg" alt="" width={30} height={30} />repositorio</a>
                      <a className="btn flex items-center md:gap-8 bg-gray-400 text-white md:text-lg text-center md:w-[200px] p-2 pr-7 md:p-3 rounded-lg md:rounded-xl" href="">
                        <Image src="/assets/play.svg" alt="" width={18} height={20} />visualizar</a>
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
