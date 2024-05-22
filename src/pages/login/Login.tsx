import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../context/AuthContext";
import { RotatingLines } from "react-loader-spinner";

function Login() {
    const navigate = useNavigate();

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    const { usuario, handleLogin } = useContext(AuthContext);
    const { isLoading } = useContext(AuthContext);
    
    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home');
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
                    <h2 className="text-3xl font-[Lora] font-bold">Entrar</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" id="usuario" placeholder="Usuário" className="border-2 border-purple-300 rounded p-2" value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" className="border-2 border-purple-300 p-2" value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>

                    <button type='submit' className="rounded bg-purple-400 hover:bg-purple-600 text-white w-1/2 py-2 flex justify-center">
                    {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Entrar</span>}
                    </button>

                    <hr className="border-purple-400 w-full" />
                    <p>Ainda não tem conta?{""} <Link to="/cadastro" className="text-pink-500 hover:text-slate-400">Cadastre-se</Link> </p>
                </form>

                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;