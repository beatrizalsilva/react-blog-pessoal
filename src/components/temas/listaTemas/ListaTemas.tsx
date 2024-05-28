import { useContext, useEffect, useState } from "react";
import CardTema from "../cardTemas/CardTemas";
import Tema from "../../../models/Tema";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { buscar } from "../../../services/Service";
import { Hearts } from "react-loader-spinner";
import ToastAlert from "../../../utils/ToastAlert";

function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([]);
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar('/temas', setTemas, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('401')) {
        ToastAlert("Você está em uma área restrita! O token expirou, favor logar novamente antes que os Stormtroopers cheguem!", "info")
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlert("Acesso permitido somente para membros da Aliança Rebelde. Por favor, faça login!", "info");
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);

  return (
    <>
      {temas.length === 0 && (
        <div className="w-full flex justify-center mx-auto">
          <Hearts
            height="80"
            width="80"
            color="#7c3aed"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <>
                <CardTema key={tema.id} tema={tema} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaTemas;