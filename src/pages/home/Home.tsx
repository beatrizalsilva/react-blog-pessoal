function Home() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-pink-300 to-purple-400 font-[Open Sans]">
                <div className="container grid grid-cols-2">

                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h1 className="text-5xl font-bold font-[Lora] italic">Seja Bem-Vindo</h1>
                        <p className="text-xl">Aqui, cada pensamento é um convite para uma nova conversa!</p>

                        <div className="flex justify-center gap-4">
                            <div className="rounded hover:bg-purple-400 hover:border-purple-400 border-2 border-purple-400 py-2 px-4 cursor-pointer">
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