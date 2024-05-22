import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import "./Cadastro.css"
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../context/AuthContext";

function Cadastro() {
    const navigate = useNavigate();
    const { isLoading } = useContext(AuthContext);

    // estado para confirmar a senha
    const [confirmaSenha, setConfirmaSenha] = useState<string>("");

    // estado responsável pelos dados do usuário, que será cadastrado
    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: ""
    });

    useEffect(() => {
        if (usuario.id !== 0) {
            retorna();
        }
    }, [usuario]);

    function retorna() {
        navigate("/login");
    }

    // função para criar um evento para mudança do estado
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value);
    }

    // função para cadastrar usuário e verificar se dados já existe
    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
                alert(`Cadastro realizado com sucesso! Que a Força esteja com você, jovem padawan.`)
            } catch (error) {
                alert(`O lado negro da Força interferiu! Erro ao cadastrar joven padawan!`)
            }
        } else {
            alert(`Senha incorreta! Verificar as informações, você deve.`),
            setUsuario({ ...usuario, senha: "" });
            setConfirmaSenha("");
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-[Open Sans]">
                <div className="fundo hidden lg:block"></div>
                    
                <form className="flex justify-center items-center flex-col w-2/3 gap-3" onSubmit={cadastrarNovoUsuario}>
                    <h2 className="text-3xl font-[Lora] font-bold">Cadastrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Nome" className="border-2 border-purple-300 rounded p-2"  value={usuario.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" id="usuario" placeholder="Usuário" className="border-2 border-purple-300 rounded p-2" value={usuario.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="foto">Foto</label>
                        <input type="text" name="foto" id="foto" placeholder="Foto" className="border-2 border-purple-300 rounded p-2" value={usuario.foto} onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" className="border-2 border-purple-300 rounded p-2" value={usuario.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha">Confirmar senha</label>
                        <input type="password" name="confirmarSenha" id="confirmarSenha" placeholder="Confirmar senha" className="border-2 border-purple-300 rounded p-2" value={confirmaSenha} onChange={(e:ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)} />
                    </div>
                    
                    <div className="flex justify-around w-full gap-8">
                        <button className="rounded text-white bg-pink-400 hover:bg-pink-600 w-1/2 py-2" onClick={retorna}>
                        { isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />: <span>Cancelar</span> }
                        </button>

                        <button type="submit" className="rounded text-white bg-purple-400 hover:bg-purple-600 w-1/2 py-2">
                        { isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />: <span>Cadastrar</span> }
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro;