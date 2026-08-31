import NameList from './Nombres'
import StockWarning from './Stock'
import TrafficLight from './TrafficLight'
import Counter from './Lesson_01/Contador'

function Contenedor() {
  return (
    <div>
      <NameList />
      <StockWarning />
      <TrafficLight />
      <Counter />
    </div>
  )
}

export default Contenedor
