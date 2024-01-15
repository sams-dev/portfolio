import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | samsdev</title>
      </Head>
      <main>
        <h1>Meu Portfólio</h1>
        <Link href="/contatos">Ir para a página Contatos</Link>
      </main>
    </>
  );
};

export default Home;
