import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert(`Você foi desconectado. Que a Força esteja com você, sempre!`);
        navigate("/login");
    }

    return (
        <>
            <div className="w-full bg-gradient-to-r from-pink-300 to-purple-400 text-black flex justify-center py-4">
                <div className="container text-lg">

                    <div className="flex justify-between ">
                        <Link to="/home" className="text-1x font-[Lora] font-bold uppercase hover:text-pink-500 cursor-pointer">Blog Pessoal</Link>

                        <div className="flex justify-between gap-4">
                            <Link to="/postagem" className="hover:text-pink-500 cursor-pointer">Postagens</Link>
                            <Link to="/temas" className="hover:text-pink-500 cursor-pointer">Temas</Link>
                            <Link to="/cadastrarTema" className="hover:text-pink-500 cursor-pointer">Cadastrar temas</Link>
                            <div className="hover:text-pink-500 cursor-pointer">Perfil</div>
                            <Link to="" className="hover:text-pink-500 cursor-pointer" onClick={logout}>Sair</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;