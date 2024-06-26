import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ToastAlert from "../../utils/ToastAlert";

function NavBar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlert("Você foi desconectado. Que a Força esteja com você, sempre!", "info");
        navigate("/login");
    }

    let component;
    if (usuario.token !== "") {
        component = (
            <div className="w-full bg-gradient-to-r from-pink-300 to-purple-400 text-black flex justify-center py-4">
                <div className="container text-lg">

                    <div className="flex justify-between ">
                        <Link to="/home" className="text-1x font-[Lora] font-bold uppercase hover:text-pink-500 cursor-pointer">Blog Pessoal</Link>

                        <div className="flex justify-between gap-4">
                            <Link to="/postagem" className="hover:text-pink-500 cursor-pointer">Postagens</Link>
                            <Link to="/temas" className="hover:text-pink-500 cursor-pointer">Temas</Link>
                            <Link to="/cadastrarTema" className="hover:text-pink-500 cursor-pointer">Cadastrar temas</Link>
                            <Link to="/perfil" className="hover:text-pink-500 cursor-pointer">Perfil</Link>
                            <Link to="" className="hover:text-pink-500 cursor-pointer" onClick={logout}>Sair</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    );
}

export default NavBar;