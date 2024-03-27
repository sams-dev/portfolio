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
                  <div className="visualizar border-4 rounded p-2 md:text-4xl font-bold text-white absolute bottom-[80px]  md:bottom-[140px] right-[80px] md:right-[150px] z-10 ">VISUALIZAR</div>

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