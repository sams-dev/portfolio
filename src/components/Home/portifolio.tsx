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
      <article>
        <h2>PROJETOS</h2>
        <ul>
          {projects.map(({ slug, name, image }, index) => (
            <Link href={`/projects/${slug}`} key={name + index}>
              <li>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={550}
                  height={550}
                  className="" />
                <span>{name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </article>
    </>

  );
}