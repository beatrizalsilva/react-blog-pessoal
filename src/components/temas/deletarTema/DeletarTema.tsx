import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import Tema from "../../../models/Tema";

function DeletarTema() {
    const navigate = useNavigate();
    
    const [tema, setTema] = useState<Tema>({} as Tema);
    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {"Authorization": token}
            });
        } catch (error: any) {
            alert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!");
            handleLogout();
        }
    }

    useEffect(() => {
        if (token === '') {
          alert('Acesso permitido somente para membros da Aliança Rebelde. Por favor, faça login!');
          navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id]);

    function retornar() {
        navigate("/temas");
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {"Authorization": token}
            })
            alert("Tema excluido com sucesso. Que a Força esteja com você!");
        } catch (error) {
            alert("Erro ao excluir tema. Sinto uma perturbação na Força...");
        }
        retornar();
    }

    return (
        <>
            <div className="container w-1/3 mx-auto">
                <h1 className="text-3xl font-[Lora] font-bold text-center my-4">Deletar tema</h1>
                <p className="text-center font-semibold mb-4">Você tem certeza que deseja apagar o tema a seguir?</p>

                <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                    <header className="py-2 px-6 bg-purple-300 text-2xl font-[Lora] font-bold">Tema</header>
                    <p className="p-8 text-3xl bg-purple-100 h-full">
                        {tema.descricao}
                    </p>

                    <div className="flex">
                        <button className="text-white bg-pink-400 hover:bg-pink-600 w-full py-2" onClick={retornar}>Não</button>
                        <button className="w-full text-white bg-purple-400 hover:bg-purple-600 flex items-center justify-center" onClick={deletarTema}>Sim</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeletarTema;