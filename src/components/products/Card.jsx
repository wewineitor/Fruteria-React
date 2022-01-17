import toast, { Toaster } from "react-hot-toast"


const Card = ({nombre, precio}) => {

    const addCarrito = async(e) => {
        e.preventDefault()
        await fetch('http://localhost:4000/addCarrito', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                usuario: localStorage.getItem('usuario'),
                fruta: nombre,
                precio
            })
        })
        toast.success('Producto agregado al carrito')
    }
    return (
        <div className = 'col mb-4'>
            <div className="card h-100" style= {{width: "18rem"}}>
                <img alt = {nombre} src = {`images/${nombre}.png`} width="150" height="150" className = 'card-img-top'/>
                <div className="card-body">
                    <p className="card-text">{nombre.toUpperCase()}</p>
                    <p className="card-text">Precio: {precio}$</p>
                    <button className="btn btn-success" onClick = {addCarrito}>Agregar al carrito</button>
                    <Toaster/>
                </div>
            </div>
        </div>
    )
}

export default Card