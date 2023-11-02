import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [album, setAlbum] = useState('')

    const HandleSubmit = e => {
        e.preventDefault()
        if (
            nombre.trim().length < 3 ||
            album.trim().startsWith(' ') ||
            album.length < 6
        ) {
            alert('Por favor chequea que la información sea correcta')
        } else {
            console.log('los datos fueron enviados correctamente')
        }
    }

    return (
        <>
            <h2>Ingresar productos</h2>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="nombre">Categoria</label>
                <input
                    type="text"
                    id="nombre"
                    placeholder="Ingresa el nombre de tu banda favorita"
                    value={nombre}
                    onChange={e => {
                        setNombre(e.target.value)
                    }}
                />
                <br />

                <label htmlFor="album">Álbum Favorito</label>
                <input
                    type="text"
                    id="album"
                    placeholder="Ingresa el nombre de tu Álbum favorita"
                    value={album}
                    onChange={e => {
                        setAlbum(e.target.value)
                    }}
                />
                <br />

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Formulario
