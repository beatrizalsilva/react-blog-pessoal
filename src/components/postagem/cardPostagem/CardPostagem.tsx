import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagemProps {
    post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
    return (
        <>
            <div className="flex flex-col rounded overflow-hidden justify-between border-purple-300 border">
                <div>
                    <div className="flex w-full bg-purple-300 py-2 px-4 items-center gap-4">
                        <img src={post.usuario?.foto} alt="" className="h-12 rounded-full" />
                        <h3 className="text-lg font-bold text-center uppercase font-[Lora]">{post.usuario?.nome}</h3>
                    </div>

                    <div className="p-4">
                        <h4 className="text-base font-semibold uppercase">{post.titulo}</h4>
                        <p>{post.texto}</p>
                        <p>Tema: {post.tema?.descricao}</p>
                        <p>Data: {new Intl.DateTimeFormat(undefined, {
                            dateStyle: "full",
                            timeStyle: "medium",
                        }).format(new Date(post.data))}</p>
                    </div>
                </div>

                <div className="flex">
                    <Link to={`/editarPostagem/${post.id}`} className="w-full text-white bg-purple-400 hover:bg-purple-600 flex items-center justify-center py-2">
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarPostagem/${post.id}`} className="text-white bg-pink-400 hover:bg-pink-600 w-full flex items-center justify-center">
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardPostagem;