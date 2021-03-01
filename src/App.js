import React, { useState } from "react";
import './App.css';
import MainGame from './mainGame/mainGame'

function App() {
  const [newCounter, setNewCounter] = useState(0);
  function callback(id){ 
    setNewCounter(id);
  } 
  console.log(newCounter);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Игра фокус</h1>
        <div className='rulesFeald'>
        <p>
          {
            newCounter == 1
            ? "Нажми еще раз"
            : newCounter == 2
            ? "Нажми еще раз"
            : newCounter == 3
            ? "Нажми на кнопку ответ"
            : "Правила игры: Перед вами 15 карт, разделенные на 3 коллоды. Загадайте любую карту, а я постараюсь ее угадать. Для того, что бы мне это сделать, мне потребуется только знать в какой колоде твоя карта. Как будешь готов жми кнопку снизу."
          }
          
        </p>
          </div>        
        <MainGame counters={callback}/>
      </header>
    </div>
  );
}

export default App;
