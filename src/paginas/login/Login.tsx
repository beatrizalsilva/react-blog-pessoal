import "./Login.css"

function Login() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4">
                    <h2 className="text-slate-900 text-5xl">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" id="usuario" placeholder="Usuário" className="border-2 border-slate-700 rounded p-2" />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" className="border-2 border-slate-700 rounded p-2" />
                    </div>

                    <button type="submit" className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">Entrar</button>
                    <hr className="border-slate-800 w-full" />
                    <p>Ainda não tem conta? {""}</p>
                </form>

                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;