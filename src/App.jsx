import Card from './components/Card'
import Formulario from './components/Formulario'

function App() {
    //Aqui deberias agregar los estados y los handlers para los inputs

    return (
        <>
            <div className="App">
                <h2>¿Cuál es tu Grupo Musical Favorito?</h2>
                <Formulario />
                <Card />
            </div>
        </>
    )
}

export default App
