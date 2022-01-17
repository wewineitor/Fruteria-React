import { Link, useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate()

    const salir = () => {
        localStorage.clear()
        navigate('/login', {
            replace: true
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <div className="navbar-nav">
                        <Link className = 'nav-item nav-link' to = '/products'>Productos</Link>
                        <Link className = 'nav-item nav-link' to = '/carrito'>Carrito</Link>
                        <button className = 'nav-item nav-link btn' onClick = {salir}>Salir</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
