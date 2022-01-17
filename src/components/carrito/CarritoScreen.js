import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

let total = 0

export const CarritoScreen = () => {

    const [producto, setProducto] = useState([])

    const getProductos = async() => {
        const request = await fetch('http://localhost:4000/getCarrito', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({usuario: localStorage.getItem('usuario')})
        })

        const response = await request.json()
        response.map(producto => total += producto.precio)
        setProducto(response)
    }

    const eliminar = async(fruta) => {
        total = 0
        await fetch('http://localhost:4000/deleteCarrito', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({fruta: fruta})
        })
        getProductos()
        toast.success('Producto eliminado')
    }

    const comprar = async(usuario) => {
        total = 0
        await fetch('http://localhost:4000/comprarCarrito', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({usuario: usuario})
        })
        getProductos()
        toast.success('Compra realizada')
    }

    useEffect(() => {
        getProductos()
    }, [])
    return (
        <div>
            <h2>Carrito de {localStorage.getItem("usuario")}</h2>

            {
                producto === null ? null : 
                producto.length === 0 ? <h2>No tienes articulos en tu carrito</h2> :
                <>
                    <table className = "table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                producto.map(p => (
                                    <tr className="table-warning" key = {p.nombre_fruta}>
                                        <td>{p.nombre_fruta}</td>
                                        <td>{p.cantidad}</td>
                                        <td>{p.precio}</td>
                                        <td><button className = 'btn btn-danger' onClick = {() => eliminar(p.nombre_fruta)}>Eliminar</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <p>Total: {total}</p>
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-success btn-lg" onClick = {() => comprar(localStorage.getItem('usuario'))}>Realizar compra</button>
                    </div>
                </>
            }
            <Toaster/>
            
        </div>
    )
}
