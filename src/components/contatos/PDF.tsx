import Image from "next/image";

const PDF = () => {
    return (
        <div className="p-4 bg-gray-300 border border-gray-400 rounded-lg hover:bg-opacity-80">
              <a className="flex space-y-3 gap-8 font-medium " target="_blank" href="/CV-samsdev.pdf">
                <Image src="/assets/pdf-icon.svg" width={50} height={50} alt="icone da samsdev"></Image>
                <span className="text-center md:text-xl">CV. Samuel Moreira Dos Santos</span>
              </a>
            </div>
    );
}

export default PDF;