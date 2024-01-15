import Link from "next/link";

const NotFound = () => {
    return (
        <div>
          <h1>404</h1>
          <div>
            <p>Oops, não conseguimos encontrar essa pagina!</p>
            <span>Clique no botão abaixo prar ser redirecionado à pagina inical</span>
          </div>
          <Link href="/">ir para pagina inicial</Link>
        </div>
    )
}

export default NotFound;