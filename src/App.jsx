import Title from './assets/components/Title';
import Counter from './assets/components/Counter';

import NewYear from './assets/newyear.jpg'

import useCountdown from './assets/hooks/useCountdown';

import './App.css';


function App() {

  const [day, hour, minute, second] = useCountdown('Jan 1, 2024 00:00:00')

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title='Contagem regressiva para 2027' />
        <div className="countdown_container">
          <Counter title='Dias' number={day} />
          <Counter title='Horas' number={hour} />
          <Counter title='Minutos' number={minute} />
          <Counter title='Segundos' number={second} />
        </div>
      </div>
    </div>
  )
}

export default App;
