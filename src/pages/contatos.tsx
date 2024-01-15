import Link from "next/link";
import Head from "next/head";

const Contatos = () => {
    return (
      <>
      <Head>
        <title>Contatos | samsdev</title>
      </Head>
      <div>
        <h1>Contatos</h1>
        <Link href="/">Ir para a pagina inicial</Link>
      </div>
      </>
    )
}

export default Contatos;