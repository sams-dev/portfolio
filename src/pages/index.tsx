import { AboutMe } from "@/components/Home/AboutMe";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | samsdev</title>
        <meta
        name="description"
        content="TENHO 21 ANOS, SOU DESENVOLVEDOR FRONTEND
        COM 7 MESES DE EXPERIENCIA TRABALHANDO COMO FREELANCER"/>
      </Head>
      <div className="py-12 px-8 md:px-32 space-y-10 md:space-y-28">
        <AboutMe/>
      </div>
    </>
  );
};

export default Home;
