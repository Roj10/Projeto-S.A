import React from 'react';
function Formulario({ inputs, onSubmit, children }) {
  	return (
    		<form onSubmit={(e) => { // Cria um formulário com um manipulador de evento onSubmit
    			e.preventDefault(); // Previne o comportamento padrão do formulário que causa recarregamento da página
    			onSubmit(); // Chama a função onSubmit passada como prop, executando a lógica definida no componente pai
  		}}>
    			{inputs.map((input, index) => ( // Mapeia cada objeto 'input' da prop 'inputs' para um elemento <input> do HTML
     			 	<input 
        					key={index} // Atribui uma chave única para cada elemento para otimizar o render do React
        					type={input.type} // Define o tipo do input (ex: 'text', 'password'), conforme especificado na prop 'inputs'
        					placeholder={input.placeholder} // Define o texto de placeholder do input conforme especificado na prop 'inputs'
        					onChange={input.onChange} // Atribui um manipulador de evento onChange para capturar e lidar com mudanças no input
     			 	/>
    			))}
    			{children}
  		</form> // Fecha a tag <form>

  	);
}
export default Formulario;
