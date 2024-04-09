import { Project } from "@/types/home";
import Head from "next/head";
import { Nunito } from "next/font/google";
import Image from "next/image";

interface ProjectsProps {
  projects: Project[];
};
const nunito = Nunito({
  weight: '400',
  subsets: ["latin"],
});

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>Portifolio | samsdev</title>
      </Head>
      <section id="projetos" className="space-y-16 bg-gray-100 rounded-2xl border border-gray-400 box-shadow p-4 flex flex-col justify-start text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">PROJETOS</h2>
        <ul className=" flex gap-4">
          {projects.map(({ name, image }, index) => (
            <li className="flex gap-4 p-2" key={name + index}>
              <div className="py-4 relative flex flex-col justify-start items-center gap-y-2">
                <Image
                  src="/responsive (2).png"
                  alt=""
                  width={596}
                  height={580} />

                <div className="desktop rounded absolute bg-black md:top-[32px] md:right-[78px] z-10">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={550}
                    height={550}
                    className="object-cover border border-gray-800 rounded-md" />
                </div>

                <div className="mobile bg-white absolute rounded-2xl md:bottom-[80px] md:right-[1px] z-30">
                  <Image
                    src="/cel.png"
                    alt=""
                    width={136}
                    height={273.25}
                    className="mobile rounded-2xl md:bottom-[0px] md:right-[0px] z-30" />
                  <div className="relative z-10">
                    <Image
                      src="/v-mobile.png"
                      alt=""
                      width={125}
                      height={220}
                      className="border border-gray-800 rounded-xl absolute md:bottom-[8px] md:right-[4px] z-10" />
                  </div>
                </div>
                <ul className="flex inline-flex justify-center items-center gap-4 bg-black bg-opacity-80 border border-gray-800 rounded-2xl px-4 py-2" >
                  <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40} /></li>
                  <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40} /></li>
                  <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40} /></li>
                  <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40} /></li>
                  <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40} /></li>
                </ul>
              </div>
              <div className="relative text-center w-[560px]">
                <span className="text-4xl font-medium">{name}</span>
                <p className={`${nunito.className} p-2 text-gray-800`}>Lorem Ipsum iLorem Ipsum is simply dummy text of sed in the 1960s with the release of Letraset sheets containing since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="flex gap-8 p-4 text-center absolute md:bottom-[2px] md:right-[30px] justify-center items-center">
                  <a className="flex gap-4 bg-gray-400 text-white text-lg text-center w-[200px] p-3 rounded-xl" href="">
                  <Image src="/assets/gh-white.svg" alt="" width={30} height={30} />repositorio</a>
                  <a className="flex gap-8 bg-gray-400 text-white text-lg text-center w-[200px] p-3 rounded-xl" href="">
                  <Image src="/assets/play.svg" alt="" width={18} height={20} />visualizar</a>
                </div>

              </div>
            </li>
          ))}
        </ul>
        <br></br>

      </section>
    </>

  );
}