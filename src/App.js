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
            ? "Теперь снова найдите свою карту и нажмите еще раз на кнопку колоды"
            : newCounter == 2
            ? "Нажмите кнопку в последний раз :)"
            : newCounter == 3
            ? "Нажмите на кнопку 'Ответ'"
            : "Правила игры: Перед вами 15 карт, разделенных на 3 колоды. Загадайте любую карту, а я постараюсь ее угадать. Для того, чтобы мне это сделать, мне нужно знать, в какой колоде ваша карта. Когда будете готовы, жмите кнопку снизу."
          }
          
        </p>
          </div>        
        <MainGame counters={callback}/>
      </header>
    </div>
  );
}

export default App;
