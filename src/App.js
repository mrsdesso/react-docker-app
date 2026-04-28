import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Счётчик кликов в Docker</h1>
        <div className="counter-display">
          <span>{count}</span>
        </div>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Увеличить</button>
          <button onClick={() => setCount(0)}>Сброс</button>
          <button onClick={() => setCount(count - 1)} disabled={count === 0}>Уменьшить</button>
        </div>
        <p className="info">Приложение работает внутри контейнера на nginx:alpine</p>
      </header>
    </div>
  );
}

export default App;