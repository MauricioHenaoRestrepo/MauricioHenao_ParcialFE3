//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ nombre, album }) {
    return (
        <>
            <h2>Esto es un componente</h2>
            <h2>
                {nombre} {album}
            </h2>
        </>
    )
}

export default Card
