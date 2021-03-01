import React, { useState, useEffect } from "react";
import './App.css';
import MainGame from './mainGame/mainGame'

function App() {
  const [hz, sethz] = useState(0);
  function callback(id){ 
     sethz(id);
  } 

  console.log(hz,);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Игра фокус</h1>
        <div className='rulesFeald'>
        <p>
          Правила игры: Перед вами 15 карт, разделенные на 3 коллоды. Загадайте любую карту, 
          а я постараюсь ее угадать. 
          Для того, что бы мне это сделать, мне потребуется только знать в какой колоде твоя карта. 
          Как будешь готов жми кнопку снизу. 
        </p>
          </div>        
        <MainGame counters={(id)=>callback(id)}/>
      </header>
    </div>
  );
}

export default App;
