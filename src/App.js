import React, { useState } from "react";
import './App.css';
import MainGame from './mainGame/mainGame'

function App() {
  const [newCounter, setNewCounter] = useState(0);
  const [newState, setNewState] = useState(    
    {isOpenModal: false}
);
  function callback(id){ 
    setNewCounter(id);
  } 
  const callbackState = (state) => {
    setNewState(state)
  }
  
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
            : newState.isOpenModal == true
            ? "Вам понравилось? :)"
            : "Правила игры: Перед вами 15 карт, разделенных на 3 колоды. Загадайте любую карту, а я постараюсь ее угадать. Для того, чтобы мне это сделать, мне нужно знать, в какой колоде ваша карта. Когда будете готовы, жмите кнопку снизу."
          }
          
        </p>
          </div>    
      </header>
      <MainGame counters={callback} callbackState={callbackState}/>
      <footer className="footerFeald">
            <div className="git">
                <a href="https://github.com/zaruba2004" target="_blank" rel="noreferrer"> @zaruba2004</a>
            </div>
            <div className="rss">
                <a className="rssLink" href={'https://rs.school/js/'} target="_blank" rel="noreferrer">
                    <img className="rssLogo" src="https://rs.school/images/rs_school_js.svg" alt="rsschhol" />
                    <span>/ 2021</span>
                </a>
            </div>
        </footer>
    </div>
  );
}

export default App;
