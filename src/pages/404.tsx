import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>pagina não encontrada | samsdev</title>
      </Head>
      <div className="text-center mt-12 md:mt-24 space-y-8 md:space-y-16 px-8 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold">404</h1>
        <div className="text-xl">
          <p>Oops, não conseguimos encontrar essa pagina!</p>
          <span>Clique no botão abaixo prar ser redirecionado à pagina inical</span>
        </div>
        <br />
        <br />
        <Link className="p-2 bg-gray-800 text-white font-medium text-xl md:text-2xl w-fit rounded-lg transition-all hover:bg-opacity-80" href="/">ir para pagina inicial</Link>
      </div>
    </>

  )
}

export default NotFound;