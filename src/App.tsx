import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./paginas/footer/Footer";
import NavBar from "./paginas/header/NavBar";
import Home from "./paginas/home/Home";
import Cadastro from "./paginas/cadastro/Cadastro";
import Login from "./paginas/login/Login";

function App() {
  return (
    <>
      {/* o browser router vai disponibilizar as rotas para os demais componentes */}
      <BrowserRouter>
        <NavBar />

        <div className="min-h-[80vh]">
          <Routes>
            {/* pode ter duas rotas apontando para o mesmo componente, mas não pode ter uma mesma rota apontando para componentes diferentes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/" element={<Cadastro />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;