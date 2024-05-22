function FormularioTema() {
    return (
        <>
            <div className="container flex flex-col items-center justify-center mx-auto">
                <h1 className="text-4xl text-center my-8">Cadastrar tema</h1>

                <form className="w-1/2 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">Descrição do tema</label>
                        <input type="text" name="descricao" placeholder="Descrção" className="border-2 border-slate-700 rounded p-2" />
                    </div>
                    <button type="submit" className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block">Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default FormularioTema;