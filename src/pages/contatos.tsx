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
        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a href="mailto:samsdev.23@gmail.com">samsdev.23@gmail.com</a>
            </div>
          </li>
          <li>
            <span>LinkedIn</span>
            <div>
              <a href="https://www.linkedin.com/in/samuel-moreira2905/">https://www.linkedin.com/in/samuel-moreira2905/</a>
            </div>
          </li>
          <li>
            <span>GitHub</span>
            <div>
              <a href="https://github.com/sams-dev">https://github.com/sams-dev</a>
            </div>
          </li>
        </ul>
      </div>
      </>
    )
}

export default Contatos;