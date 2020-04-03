//Nunca pode mudar o valor de um estado(de uma forma direta), tipo count++;
//Toda vez que o componente precisar armazenar uma informação, nós criaremos um estado. Logo, atualiza a informação e gera na interface
import React from 'react';
import './global.css';
import Routes from './routes';
//JSX (JavaScript XML)
//Toda vez que eu for usar uma variável no HTML usar {}
//Retorna um array com duas posições. Array [valor, funcçãoDeAtualização]
 //Se não tiver funções dentro da tag abrir e fechar na mesma linha
  
function App() {
  return (   
    <Routes />
  );
}

export default App;
