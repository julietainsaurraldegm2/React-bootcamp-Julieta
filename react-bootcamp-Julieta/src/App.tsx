import { StrictMode } from 'react'
import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Contenedor2 from './Class2/Content'
import Post from './Class3/Post'
import Lesson3Content from './Class3/Lesson_01/Content'
import Contenedor4 from './Class4/Content'
import Names5 from './Class5/Names_2'
import Form6 from './Class6/FormularioSuscripcion'
import TrafficLight from './Class4/TrafficLight'
import StockWarning from './Class4/Stock'
import NameList from './Class4/Nombres'
import Tareas from './TodoList'
import AddName from './Class5/Names_2'
import FormularioSuscripcion from './Class6/FormularioSuscripcion'
import Form from './Class9/Form'
import { ContadorProvider } from './Class8/ContadorContext'
import Context from './Class8/Context'
import TarjetaEjemplo from './Class11/TarjetaInfo'

function App() {

  return (
    <>
    <StrictMode>

      <BrowserRouter>
        <nav style={{ display: 'flex', gap: 12, padding: 8 }}>
          <Link to="/class2">Class 2</Link>
          <Link to="/class3">Class 3</Link>
          <Link to="/class4">Class 4</Link>
          <Link to="/class5">Class 5</Link>
          <Link to="/class6">Class 6</Link>
          <Link to="/class8">Class 8</Link>
        </nav>
        <Routes>
          <Route path="/class2" element={<Contenedor2 />} />
          <Route path="/class3" element={
              <>
                <Post />
                <Lesson3Content />
              </>}
          />
          <Route path="/class4" element={<Contenedor4 />} />
          <Route path="/class5" element={<Names5 />} />
          <Route path="/class6" element={<Form6 />} />
          <Route path="/class8" element={
              <ContadorProvider>
                <Context8 />
              </ContadorProvider>
            }
          />
          <Route path="/" element={<div>Seleccioná una clase.</div>} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
    <Content/>
    <Counter/>
    <Post/>
    <TrafficLight/>
    <StockWarning/>
    <NameList/>
    <Tareas/>
    <AddName/>
    <FormularioSuscripcion/>
     <Form/>
    <ContadorProvider>
      <Context/>
    </ContadorProvider>
    <TarjetaEjemplo/>
    </>
  )
}
export default App
