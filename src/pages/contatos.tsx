import PDF from "@/components/contatos/PDF";
import Head from "next/head";

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | samsdev</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-8 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
        <ul className="table mx-auto space-y-4 md:space-y-8">
          <li className="md:text-xl">
            <span className="font-semibold">LinkedIn</span>
            <div>
              <a className="text-sm md:text-lg text-slate-300 underline" href="https://www.linkedin.com/in/samuel-moreira2905/">https://www.linkedin.com/in/samuel-moreira2905/</a>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-semibold">GitHub</span>
            <div>
              <a className="text-sm md:text-lg text-slate-300 underline" href="https://github.com/sams-dev">https://github.com/sams-dev</a>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-semibold">E-mail</span>
            <div>
              <a className="text-sm md:text-lg text-slate-300 underline" href="mailto:samsdev.23@gmail.com">samsdev.23@gmail.com</a>
            </div>
          </li>
          <li className="md:text-xl">
            <span className="font-semibold">Whats</span>
            <div>
              <a href="/.">51 99351-4232</a>
            </div>
          </li>
          <li>
            <PDF />
          </li>

        </ul>
      </div>
    </>
  )
}

export default Contatos;