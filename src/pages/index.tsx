import { AboutMe } from "@/components/Home/AboutMe";
import Head from "next/head";
import { Projects } from "../components/Home/portifolio";

const Home = () => {
  const projectList = [
    {
      name: 'GitHub Clone',
      imageWeb: {
        url: '/github-Mockup.png',
        alt: 'imagem do site github clone',
      },
      desc: 'Lorem Ipsum iLorem Ipsum is simply dummy text of sed in the 1960s with the release of Letraset sheets containing since the 1500s, but also the leap into electronic typesetting, Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      linkRepositorio: {
        url: "https://github.com/sams-dev/github-clone"
      },
      linkSite: {
        url: "https://github-cloneweb.vercel.app/"
      },
      technologies: ['js', 'react', 'bootstrap']
    },
    {
      name: 'GitHub ',
      imageWeb: {
        url: '/github-Mockup.png',
        alt: 'imagem do site github clone',
      },
      desc: 'Lorem Ipsum iLorem Ipsum is simply dummy text of sed in the 1960s with the release of Letraset sheets containing since the 1500s, but also the leap into electronic typesetting, Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      linkRepositorio: {
        url: "https://github.com/sams-dev/github-clone"
      },
      linkSite: {
        url: "https://github-cloneweb.vercel.app/"
      },
      technologies: ['js', 'React', 'HTML5', 'CSS3', 'ts', 'tailwind-css', 'ts', 'tailwind-css' ]
    }
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

      <div className="pt-12 pb-3 px-8 md:pb-12 lg:px-32 space-y-24 md:space-y-40">
        <AboutMe />
        <Projects projects={projectList} />
      </div>


    </>
  );
};

export default Home;
