import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
    return (
      <>
        <Head>
          <title>pagina não encontrada | samsdev</title>
        </Head>
        <div>
          <h1>404</h1>
          <div>
            <p>Oops, não conseguimos encontrar essa pagina!</p>
            <span>Clique no botão abaixo prar ser redirecionado à pagina inical</span>
          </div>
          <Link href="/">ir para pagina inicial</Link>
        </div>
      </>
        
    )
}

export default NotFound;