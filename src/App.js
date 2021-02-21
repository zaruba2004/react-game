import './App.css';
import MainGame from './mainGame/mainGame'

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Игра фокус</h1>
        <p>Правила игры: Перед вами 15 карт, разделенные на 3 коллоды. Загадайте любую карту, а я постараюсь ее угадать. 
          Для того чтоб мне это сделать, мне потребуется только знать в какой колоде твоя карта. Как будешь готов жми кнопку снизу. </p>
        <MainGame />
      </header>
    </div>
  );
}

export default App;
