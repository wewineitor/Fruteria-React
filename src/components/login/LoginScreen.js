import { useNavigate } from "react-router"
import { InputLogin } from "./InputLogin"
import toast, { Toaster } from "react-hot-toast"
import { useForm } from "../../hooks/useForm"

let notify

export const LoginScreen = () => {

    const [usuario, handleChange] = useForm({
        email: '',
        contra: ''
    })

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/register')
    }

    const handleLogin = async(e) => {
        e.preventDefault()
        const request = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: usuario.email, 
                contra: usuario.contra
            })
        })
        const response = await request.json()
        if(response.message === 'error') {
            notify = () =>toast.error('CORREO O CONTRASEÑA INCORRECTOS')
        }
        else {
            localStorage.setItem("usuario", response.message)
            notify = ''
            navigate('/products', {
                replace: true
            })
        }
    }
    
    return (
        <div className = 'container'>
            <h2>Login</h2>
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'shadow-lg p-3 mb-5 mt-4 bg-body rounded'>
                        <form className = 'row g-3' onSubmit = {handleLogin}>
                            <InputLogin placeholder = 'Correo electronico' type = 'email' name = 'email' value = {usuario.email} handleChange = {handleChange}/>
                            <InputLogin placeholder = 'Contraseña' type = 'password' name = 'contra' value = {usuario.contra} handleChange = {handleChange}/>
                            <button className = 'btn btn-link' onClick = {handleClick}>¿No tienes cuenta? Creala aqui</button>
                            <button type="submit" className="btn btn-success" onClick = {notify}>INGRESAR</button>
                            <Toaster/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
