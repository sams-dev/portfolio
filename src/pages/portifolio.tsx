import Head from "next/head";

interface ProjectsProps {
  projects: any;
}

export const Projects = ({projects}: ProjectsProps) => {
  return (
    <>
    <Head>
      <title>Portifolio | samsdev</title>
    </Head>
      <div>
        <h1>PROJETOS</h1>
      </div>
    </>

  );
}