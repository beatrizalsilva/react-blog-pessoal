import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

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
                alert("Tema atualizado com sucesso. Que a Força esteja com você!");
                retornar();
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    alert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!");
                    handleLogout();
                } else {
                    alert("Erro ao atualizar tema. Sinto uma perturbação na Força...");
                }
            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { "Authorization": token }
                });
                alert("Tema cadastrado com sucesso. Que a Força esteja com você!");
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    alert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!");
                    handleLogout();
                } else {
                    alert("Erro ao cadastrar tema. Sinto uma perturbação na Força...");
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
          alert('Acesso permitido somente para membros da Aliança Rebelde. Por favor, faça login!');
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