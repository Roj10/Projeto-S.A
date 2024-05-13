import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Formulario from '../components/Formulario'; // Importe o componente Formulário

function Cadastro() {
  const irPara = useNavigate();
  let username = '';
  let password = '';

  function handleCadastro() {
    axios.post('http://localhost:8090/api/cadastro', { username, password })
      .then(() => {
        irPara('/');
      });
  }

  const inputs = [
    { type: 'text', placeholder: 'Username', onChange: (e) => username = e.target.value },
    { type: 'password', placeholder: 'Password', onChange: (e) => password = e.target.value }
  ];

  return (
    <Formulario inputs={inputs} onSubmit={handleCadastro}>
      <button type="submit">Cadastrar</button>
      <button type="button" onClick={() => irPara('/')}>Voltar</button>
    </Formulario>
  );
}
export default Cadastro;


