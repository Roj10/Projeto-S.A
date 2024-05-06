import React from 'react';
import { useNavigate } from 'react-router-dom';
function Cadastro() {
  const irPara= useNavigate();
  const handleClick = () => {
    irPara("/login");
  };
  const handleClick2 = () => {
    irPara("/");
  };
  return (
    <div>
      <h1>Página Inicial</h1>      
      <button onClick= {handleClick}>Voltar</button>
      <button onClick= {handleClick2}>Voltar pro inicio</button>
    </div>
  );
}
export default Cadastro;

