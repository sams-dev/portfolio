import { AboutMe } from "@/components/Home/AboutMe";
import Head from "next/head";
import { Projects } from "../components/Home/portifolio";

const Home = () => {
  const projectList = [
    {
      name: 'GitHub Clone',
      image: {
        url: '/github-project.png',
        alt: 'imagem do site github clone',
      }
    },
    {
      name: 'GitHub Clone',
      image: {
        url: '/github-project.png',
        alt: 'imagem do site github clone',
      }
    },
    {
      name: 'GitHub Clone',
      image: {
        url: '/github-project.png',
        alt: 'imagem do site github clone',
      }
    },
    {
      name: 'GitHub Clone',
      image: {
        url: '/github-project.png',
        alt: 'imagem do site github clone',
      }
    },
    {
      name: 'GitHub Clone',
      image: {
        url: '/github-project.png',
        alt: 'imagem do site github clone',
      }
    },
    {
      name: 'GitHub Clone',
      image: {
        url: '/github-project.png',
        alt: 'imagem do site github clone',
      }
    },
    {
      name: 'GitHub Clone',
      image: {
        url: '/github-project.png',
        alt: 'imagem do site github clone',
      }
    },
    {
      name: 'GitHub Clone',
      image: {
        url: '/github-project.png',
        alt: 'imagem do site github clone',
      }
    },
  ];

  return (
    <>
      <Head>
        <title>Sobre mim | samsdev</title>
        <meta
          name="description"
          content="TENHO 21 ANOS, SOU DESENVOLVEDOR FRONTEND
        COM 7 MESES DE EXPERIENCIA TRABALHANDO COMO FREELANCER"/>
      </Head>
      
        <div className="pt-12 pb-3 px-8 md:pb-12 md:px-32 space-y-16 md:space-y-40">
          <AboutMe />
          <Projects projects={projectList} />
        </div>
     

    </>
  );
};

export default Home;
