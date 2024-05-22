import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemaProps {
    tema: Tema;
}

function CardTema({tema}: CardTemaProps) {
    return (
        <>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-purple-300 text-2xl font-[Lora] font-bold">Temas</header>
                <p className="p-8 text-3xl bg-purple-100 h-full">{tema.descricao}</p>

                <div className="flex">
                    <Link to={`/editarTema/${tema.id}`} className="w-full text-white bg-purple-400 hover:bg-purple-600 flex items-center justify-center py-2">
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarTema/${tema.id}`} className="text-white bg-pink-400 hover:bg-pink-600 w-full flex items-center justify-center">
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardTema;