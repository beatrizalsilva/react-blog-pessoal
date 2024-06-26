import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ToastAlert from "../../utils/ToastAlert";

function Perfil() {
    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === '') {
          ToastAlert("Acesso permitido somente para membros da Aliança Rebelde. Por favor, faça login!", "info");
          navigate('/login');
        }
    }, [usuario.token]);

    return (
        <>
            <div className="container mx-auto m-5 rounded-2xl overflow-hidden">
                <img src="https://ik.imagekit.io/beatrizalsilva/Blog%20Pessoal/capa.jpg?updatedAt=1717002750974" alt="Capa de perfil" className="w-full h-72 object-cover border-b-8 border-white" />
                <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10" />

                <div className="relative m-[-6rem] h-72 flex flex-col bg-pink-300 text-2xl items-center justify-center">
                    <p>{usuario.nome}</p>
                    <p>{usuario.usuario}</p>
                </div>
            </div>
        </>
    )
}

export default Perfil;