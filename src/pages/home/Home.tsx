function Home() {
    return (
        <>
            <div className="flex justify-center  bg-indigo-900 text-white">
                <div className="container grid grid-cols-2">

                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h1 className="text-5xl font-bold">Seja Bem-Vindo</h1>
                        <p className="text-xl">Expresse aqui seus pensamentos e opniões!</p>

                        <div className="flex justify-center gap-4">
                            <div className="rounded hover:bg-slate-400 hover:text-slate-900 hover:border-slate-400 border-2 py-2 px-4 cursor-pointer">
                                Nova postagem
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img src="https://i.imgur.com/VpwApCU.png" alt="Imagem Tela Inicial" width="400px" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;