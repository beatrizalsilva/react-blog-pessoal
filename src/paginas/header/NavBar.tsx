function NavBar() {
    return (
        <>
            <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
                <div className="container text-lg">

                    <div className="flex justify-between ">
                        <p className="text-1xl font-bold uppercase">Blog Pessoal</p>

                        <div className="flex justify-between gap-4">
                            <div className="hover:text-slate-400 cursor-pointer">Postagens</div>
                            <div className="hover:text-slate-400 cursor-pointer">Temas</div>
                            <div className="hover:text-slate-400 cursor-pointer">Cadastrar tema</div>
                            <div className="hover:text-slate-400 cursor-pointer">Perfil</div>
                            <div className="hover:text-slate-400 cursor-pointer">Sair</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;