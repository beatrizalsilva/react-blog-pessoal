import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Tema from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import ToastAlert from "../../../utils/ToastAlert";

function FormularioPostagem() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [temas, setTemas] = useState<Tema[]>([]);
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: "",
        postagem: null
    });

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null,
        usuario: null,
    });

    async function buscarPostagemPorId(id: string) {
        await buscar(`/postagens/${id}`, setPostagem, {
          headers: {"Authorization": token}
        });
    }

    async function buscarTemaPorId(id: string) {
        await buscar(`/temas/${id}`, setTema, {
          headers: {"Authorization": token}
        });
    }

    async function buscarTemas() {
        await buscar(`/temas`, setTemas, {
          headers: {"Authorization": token}
        });
    }

    useEffect(() => {
        if (token === '') {
          ToastAlert("Acesso permitido somente para membros da Aliança Rebelde. Por favor, faça login!", "info");
          navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarTemas();
        if (id !== undefined) {
            buscarPostagemPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        });
    }, [tema]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario
        })
    }

    function retornar() {
        navigate("/postagem");
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: { "Authorization": token }
                });
                ToastAlert("Post atualizado com sucesso. Que a Força esteja com você!", "sucesso");
                retornar();
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    ToastAlert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!", "info");
                    handleLogout();
                } else {
                    ToastAlert("Erro ao atualizar o post. Sinto uma perturbação na Força...", "erro");
                }
            }
        } else {
            try {
                const {data, ...newPostagem} = postagem
                await cadastrar(`/postagens`, newPostagem, setPostagem, {
                    headers: { "Authorization": token }
                });
                ToastAlert("Post cadastrado com sucesso. Que a Força esteja com você!", "sucesso");
                retornar();
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    ToastAlert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!", "info");
                    handleLogout();
                } else {
                    ToastAlert("Erro ao cadastrar o post. Sinto uma perturbação na Força...", "erro");
                }
            }
        }
    }

    const carregandoTema = tema.descricao === '';

    return (
        <>
            <div className="container flex flex-col items-center justify-center mx-auto">
                <h1 className="text-3xl font-[Lora] font-bold text-center my-8">
                    {id !== undefined ? "Editar Postagem" : "Cadastrar Postagem"}
                </h1>

                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaPostagem}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name="titulo" placeholder="Título da postagem" className="border-2 border-purple-300 rounded p-2" value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="texto">Texto</label>
                        <input type="text" name="texto" placeholder="Texto da postagem" className="border-2 border-purple-300 rounded p-2" value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>Tema</p>
                        <select name="tema" id="tema" className="border border-purple-300 rounded p-2" onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
                            <option value="" selected disabled>Selecione um tema</option>
                            {temas.map((tema) => (
                                <>
                                    <option value={tema.id}>{tema.descricao}</option>
                                </>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="rounded text-white bg-purple-400 hover:bg-purple-600 w-1/2 py-2 mx-auto block" disabled={carregandoTema}>
                        {carregandoTema ? <span>Carregando</span> : id !== undefined ? "Editar" : "Cadastrar"}
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormularioPostagem;