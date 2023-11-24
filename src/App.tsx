import { Habit } from './components/Habit/index';
import './styles/global.css'

function App() {

  return (
    <>
      <Habit completed={1} />
      <Habit completed={2} />
      <Habit completed={20} />
      <Habit completed={30} />
    </> 
  )
}

export default App
