import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./context/AuthContext";
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import FormularioTema from "./components/temas/formularioTema/FormularioTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaPostagem from "./components/postagem/listaPostagem/ListaPostagem";
import FormularioPostagem from "./components/postagem/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./components/postagem/deletarPostagem/DeletarPostagem";
import Perfil from "./pages/perfil/Perfil";

function App() {
  return (
    <>
      <AuthProvider>
        {/* o browser router vai disponibilizar as rotas para os demais componentes */}
        <BrowserRouter>
          <NavBar />

          <div className="min-h-[80vh]">
            <Routes>
              {/* pode ter duas rotas apontando para o mesmo componente, mas não pode ter uma mesma rota apontando para componentes diferentes */}
              <Route path="/" element={<Login />} />
              
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrarTema" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/postagem" element={<ListaPostagem />} />
              <Route path="/cadastrarPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;