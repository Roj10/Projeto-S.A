import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const irPara= useNavigate();
  const handleClick = () => {
    irPara("/login");
  };
  const handleClick2 = () => {
    irPara("/cadastro");
  };
  return (
    <div>
      <h1>Página de Login</h1>      
      <button onClick= {handleClick}>Finalizar</button>
      <button onClick= {handleClick2}>Fazer Cadastro</button>
    </div>
  );
}
export default Login;

