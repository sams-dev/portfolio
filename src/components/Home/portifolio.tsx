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
      <article className="space-y-16 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">PROJETOS</h2>
        <ul className="flex flex-wrap gap-4">
          {projects.map(({ slug, name, image }, index) => (
            <Link href={`/projects/${slug}`} key={name + index}>
              <li className="project inline-block relative flex flex-col gap-2">
                <div className="box w-[283.2px] md:w-[550px] h-[178.35px] md:h-[283.5px] absolute">
                  <div className="visualizar border-4 rounded p-2 md:text-4xl font-bold text-white absolute bottom-[70px]  md:bottom-[100px] right-[70px] md:right-[150px] z-10 ">VISUALIZAR</div>
                </div>

                <Image
                  src={image.url}
                  alt={image.alt}
                  width={550}
                  height={550}
                  className="object-cover border rounded-md" />
                <span>{name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </article>
    </>

  );
}