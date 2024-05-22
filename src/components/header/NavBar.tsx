import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        alert(`Usuário deslogado com sucesso!`)
        navigate("/login")
    }

    return (
        <>
            <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
                <div className="container text-lg">

                    <div className="flex justify-between ">
                        {/* <p className="text-1xl font-bold uppercase">Blog Pessoal</p> */}
                        <Link to="/home" className="text-1xl font-bold uppercase hover:text-slate-400 cursor-pointer">Blog Pessoal</Link>

                        <div className="flex justify-between gap-4">
                            <div className="hover:text-slate-400 cursor-pointer">Postagens</div>
                            <Link to="/temas" className="hover:text-slate-400 cursor-pointer">Temas</Link>
                            {/* <div className="hover:text-slate-400 cursor-pointer">Temas</div> */}
                            <div className="hover:text-slate-400 cursor-pointer">Cadastrar tema</div>
                            <div className="hover:text-slate-400 cursor-pointer">Perfil</div>
                            <Link to="" className="hover:text-slate-400 cursor-pointer" onClick={logout}>Sair</Link>
                            {/* <div className="hover:text-slate-400 cursor-pointer">Sair</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;