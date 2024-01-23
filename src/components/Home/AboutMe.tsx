import Link from "next/link";

export const AboutMe = () => {
    return (
      <main className="flex flex-wrap justify-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap xl:justify-between">
        <div>
          <h1>OII, SOU O SAMUEL DOS SANTOS </h1>
          <span>REACT DEVELOPER</span>
          <h2> TENHO 21 ANOS, SOU DESENVOLVEDOR FRONTEND
COM 7 MESES DE EXPERIENCIA TRABALHANDO COMO FREELANCER</h2>
          <Link href='/contatos'>Fale comigo!</Link>
        </div>
        <ul>
          <li style={{ backgroundColor: '#2F74C0', color: '#ffffff'}}>typescript</li>
          <li style={{ backgroundColor: '#6BDDFA', color: '#000000'}}>react</li>
          <li style={{ backgroundColor: '#EFD81D', color: '#000000'}}>javascript</li>
          <li style={{ backgroundColor: '#000000', color: '#ffffff'}}>next.js</li>
        </ul>
      </main>
    );
}