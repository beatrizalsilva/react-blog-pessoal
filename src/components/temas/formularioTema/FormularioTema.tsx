import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import ToastAlert from "../../../utils/ToastAlert";

function FormularioTema() {
    const navigate = useNavigate();

    // recebe os dados de tema, que será cadastrado ou atualizado
    const [tema, setTema] = useState<Tema>({} as Tema);
    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        await buscar(`/temas/${id}`, setTema, {
          headers: {"Authorization": token}
        });
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
          ...tema,
          [e.target.name]: e.target.value
        })
    }
    
    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { "Authorization": token }
                });
                ToastAlert("Tema atualizado com sucesso. Que a Força esteja com você!", "sucesso");
                retornar();
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    ToastAlert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!", "info");
                    handleLogout();
                } else {
                    ToastAlert("Erro ao atualizar tema. Sinto uma perturbação na Força...", "erro");
                }
            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { "Authorization": token }
                });
                ToastAlert("Tema cadastrado com sucesso. Que a Força esteja com você!", "sucesso");
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    ToastAlert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!", "info");
                    handleLogout();
                } else {
                    ToastAlert("Erro ao cadastrar tema. Sinto uma perturbação na Força...", "erro");
                }
            }
            retornar();
        }
    }
    
    function retornar() {
        navigate("/temas");
    }
        
    useEffect(() => {
        if (token === '') {
          ToastAlert("Acesso permitido somente para membros da Aliança Rebelde. Por favor, faça login!", "info");
          navigate('/login');
        }
    }, [token]);

    return (
        <>
            <div className="container flex flex-col items-center justify-center mx-auto">
                <h1 className="text-3xl font-[Lora] font-bold text-center my-8">
                    {id === undefined ? "Cadastre um novo tema" : "Editar tema"}
                </h1>

                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Descrição do tema</label>
                        <input type="text" name="descricao" placeholder="Descrção" className="border-2 border-purple-300 rounded p-2" value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    <button type="submit" className="rounded text-white bg-purple-400 hover:bg-purple-600 w-1/2 py-2 mx-auto block">
                        {id === undefined ? "Cadastrar" : "Editar"}
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormularioTema;