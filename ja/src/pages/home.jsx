import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const irPara = useNavigate();
  const handleClick = () => {
    irPara("/");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Fazer login</button>
    </div>
  );
}
export default Home;

