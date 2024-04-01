import { Project } from "@/types/home";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>Portifolio | samsdev</title>
      </Head>
      <article className="space-y-16 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">PROJETOS</h2>
        <ul className="flex flex-wrap gap-4">
          {projects.map(({ slug, name, image }, index) => (
            <Link href={`/projects/${slug}`} key={name + index}>
              <div className="relative flex flex-col gap-2">
                <span className="text-xl font-medium">{name}</span>
                <Image
                  src="/responsive (2).png"
                  alt=""
                  width={596}
                  height={580} />

                <div className="desktop rounded absolute bg-black md:bottom-[51px] md:right-[78px] z-10">
                  <li className="project inline-block relative flex flex-col gap-2">
                    <div className="visualizar border-4 rounded p-2 md:text-2xl font-bold text-white absolute bottom-[80px]  md:bottom-[20px] right-[80px] md:right-[140px] z-10 ">VISUALIZAR</div>

                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={450}
                      height={450}
                      className="object-cover border border-gray-800 rounded-md" />

                  </li>
                </div>

                <div className="mobile bg-white absolute rounded-2xl md:bottom-[-1px] md:right-[0px] z-30">
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
              </div>
              <ul className="flex inline-flex justify-center justify-items-center items-center gap-4 bg-black bg-opacity-80 border border-gray-800 rounded-2xl px-4 py-2" >
                <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40}/></li>
                <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40}/></li>
                <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40}/></li>
                <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40}/></li>
                <li><Image src="/assets/linkedin.svg" alt="" width={40} height={40}/></li>
              </ul>
            </Link>
            
          ))}
        </ul>
      </article>
    </>

  );
}