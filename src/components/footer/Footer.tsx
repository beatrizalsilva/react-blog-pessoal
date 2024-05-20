import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

function Footer() {
    return (
        <>
            <div className="w-full flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl">Blog Pessoal | Copyright: Beatriz Alves</p>
                    <p className="text-xx">Acesse nossas redes sociais</p>

                    <div className="flex gap-2">
                        <div className="cursor-pointer hover:text-slate-400"><LinkedinLogo size={32} /></div>
                        <div className="cursor-pointer hover:text-slate-400"><GithubLogo size={32} /></div>
                        <div className="cursor-pointer hover:text-slate-400"><XLogo size={32} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;