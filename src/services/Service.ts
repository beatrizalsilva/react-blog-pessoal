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

export const buscar = async(url: string, setDados: Function, header: object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}
  
export const cadastrar = async(url: string, dados: object, setDados: Function, header: object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}
  
export const atualizar = async(url: string, dados: Object, setDados: Function, header: object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}
  
// url representa o endereço do endpoint da API e o header recebe a requisição de delete
export const deletar = async(url: string, header: object) => {
    await api.delete(url, header)
}