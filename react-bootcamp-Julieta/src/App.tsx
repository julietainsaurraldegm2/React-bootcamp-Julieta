import './App.css'
import Content from './Class3/Lesson_01/Content'
import Counter from './Class4/Lesson_01/Contador'
import Post from './Class3/Post'
import TrafficLight from './Class4/TrafficLight'
import StockWarning from './Class4/Stock'
import NameList from './Class4/Nombres'
import Tareas from './TodoList'
import AddName from './Class5/Names_2'
import FormularioSuscripcion from './Class6/FormularioSuscripcion'
import CuentaRegresiva from './CuentaRegresiva'

function App() {

  return (
    <>
    <Content/>
    <Counter/>
    <Post/>
    <TrafficLight/>
    <StockWarning/>
    <NameList/>
    <Tareas/>
    <AddName/>
    <FormularioSuscripcion/>
    <CuentaRegresiva segundosIniciales={15} />    
    </>
  )
}
export default App
