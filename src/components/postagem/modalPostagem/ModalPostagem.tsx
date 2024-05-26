import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup trigger={<button className="rounded hover:bg-purple-400 hover:border-purple-400 border-2 border-purple-400 py-2 px-4 cursor-pointer">Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  )
}

export default ModalPostagem;