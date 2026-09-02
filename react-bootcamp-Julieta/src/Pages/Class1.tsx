import Contenedor2 from '../Class2/Content'
import { BrowserRouter, Link } from 'react-router-dom'

import Post3 from '../Class3/Post'
import Lesson3Content from '../Class3/Lesson_01/Content'
import Saludo3 from '../Class3/Lesson_01/Saludo'
import Tarjeta3 from '../Class3/Lesson_01/TarjetaProducto'

import Contenedor4 from '../Class4/Content'
import NameList4 from '../Class4/Nombres'
import Stock4 from '../Class4/Stock'
import TrafficLight4 from '../Class4/TrafficLight'
import Counter4 from '../Class4/Lesson_01/Contador'

import Names5 from '../Class5/Names_2'

import Form6 from '../Class6/FormularioSuscripcion'

import { ContadorProvider } from '../Class8/ContadorContext'
import Context8 from '../Class8/Context'

function Class1() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/class2">Class 2</Link> |
                <Link to="/class3">Class 3</Link> |
                <Link to="/class4">Class 4</Link> |
                <Link to="/class5">Class 5</Link> |
                <Link to="/class6">Class 6</Link> |
                <Link to="/class8">Class 8</Link>
            </nav>

            <>
                <Contenedor2 />

                {/* Class3 components */}
            <Post3 />
            <Lesson3Content />
            <Saludo3 nombre={'Usuario'} />
            <Tarjeta3 nombre="Ejemplo" precio={100} stock={10} />

            {/* Class4 components */}
            <Contenedor4 />
            <NameList4 />
            <Stock4 />
            <TrafficLight4 />
            <Counter4 />

            {/* Class5 components */}
            <Names5 />

            {/* Class6 components */}
            <Form6 />

            {/* Class8 components */}
            <ContadorProvider>
                <Context8 />
            </ContadorProvider>
            </>
        </BrowserRouter>
    )
}

export default Class1