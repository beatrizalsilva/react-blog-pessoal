import { useContext, useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import CardPostagem from "../cardPostagem/CardPostagem";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { buscar } from "../../../services/Service";
import { Hearts } from "react-loader-spinner";
import ToastAlert from "../../../utils/ToastAlert";

function ListaPostagem() {
    const navigate = useNavigate();
    const [postagem, setPostagem] = useState<Postagem[]>([]);
    
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
          ToastAlert("Acesso permitido somente para membros da Aliança Rebelde. Por favor, faça login!", "info");
          navigate('/login');
        }
    }, [token]);

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagem, {
                headers: {"Authorization": token},
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                ToastAlert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!", "info");
                handleLogout();
            }
        }
    }

    useEffect(() => {
        buscarPostagens();
    }, [postagem.length]);
    
    return (
        <>
            {postagem.length === 0 && (
                <div className="w-full flex justify-center mx-auto">
                    <Hearts
                        height="80"
                        width="80"
                        color="#7c3aed"
                        ariaLabel="hearts-loading"
                        wrapperStyle={{}}
                        wrapperClass="hearts-wrapper mx-auto"
                        visible={true}
                    />
                </div>
            )}
            

            <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {postagem.map((postagem) => (
                    <CardPostagem key={postagem.id} post={postagem} />
                ))}
            </div>
        </>
    )
}

export default ListaPostagem;