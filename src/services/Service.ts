// configurando a api que será consumida
import axios from "axios";

const api = axios.create({ baseURL: "https://blogpessoal-zrre.onrender.com" });

// usando object para ficar genérico e conseguir manipular qualquer dado
export const cadastrarUsuario = async (url: string, dados: object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const login = async (url: string, dados: object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}