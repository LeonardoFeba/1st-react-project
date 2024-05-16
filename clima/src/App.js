import { useState } from 'react';
import './App.css';
import TempCard from './components/temp-card';

function App() {
  const diasSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  let [contadorState, setContadorState] = useState(0);
  let contador = 0;
  return (
    <div className='App'>
      <button
        onClick={() => {
          setContadorState((contadorState += 1));
        }}
      >
        Clique aqui 1
      </button>
      <h1>{contadorState}</h1>
      <button
        onClick={() => {
          console.log((contador += 1));
        }}
      >
        Clique aqui 2
      </button>
      <h1>{contador}</h1>
      {diasSemana.map((dia) => {
        return <TempCard diaDaSemana={dia} />;
      })}
    </div>
  );
}

export default App;
