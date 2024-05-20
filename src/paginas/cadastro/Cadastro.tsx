import "./Cadastro.css"

function Cadastro() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <div className="fundo hidden lg:block"></div>
                    
                <form className="flex justify-center items-center flex-col w-2/3 gap-3">
                    <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Nome" className="border-2 border-slate-700 rounded p-2" />
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" id="usuario" placeholder="Usuário" className="border-2 border-slate-700 rounded p-2" />
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="foto">Foto</label>
                        <input type="text" name="foto" id="foto" placeholder="Foto" className="border-2 border-slate-700 rounded p-2" />
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" className="border-2 border-slate-700 rounded p-2" />
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha">Confirmar senha</label>
                        <input type="password" name="confirmarSenha" id="confirmarSenha" placeholder="Confirmar senha" className="border-2 border-slate-700 rounded p-2" />
                    </div>
                    
                    <div className="flex justify-around w-full gap-8">
                        <button className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2">Cancelar</button>
                        <button type="submit" className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2">Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro;