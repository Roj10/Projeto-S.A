import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Formulario from '../components/Formulario'; // Importe o componente Formulário
function Login() {
  const irPara = useNavigate();
  let username = '';
  let password = '';

  function handleLogin() {
    // Lógica de autenticação aqui, usando Axios
    axios.post('http://localhost:8090/api/login', { username, password })
      .then(response => {
        if (response.data === true) {
          irPara('/home');
        } else {
          alert('Falha ao se logar');
        }
      });
  }

  const inputs = [
    { type: 'text', placeholder: 'Username', onChange: (e) => username = e.target.value },
    { type: 'password', placeholder: 'Password', onChange: (e) => password = e.target.value }
  ];

  return (
    <Formulario inputs={inputs} onSubmit={handleLogin}>
      <button type="submit">Logar</button>
      <button type="button" onClick={() => irPara('/cadastro')}>Cadastre-se</button>
    </Formulario>
  );
}
export default Login;
