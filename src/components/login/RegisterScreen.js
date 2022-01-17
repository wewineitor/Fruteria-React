import toast, { Toaster } from "react-hot-toast"
import { useForm } from "../../hooks/useForm"
import { InputLogin } from "./InputLogin"

let notify

export const RegisterScreen = () => {

    const [usuario, handleChange] = useForm({
        email: '',
        usuario: '',
        contra: ''
    })

    const handleRegister = async(e) => {
        e.preventDefault()
        const request = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: usuario.email, 
                usuario: usuario.usuario, 
                contra: usuario.contra
            })
        })
        const response = await request.json()
        console.log(response.message)
        if(response.message === 'ok') {
            notify = toast.success('CUENTA CREADA CORRECTAMENTE')
        }
        else {
            notify = toast.error('USUARIO O CORREO YA UTILIZADOS')
        }
    }
    
    return (
        <div className = 'container'>
            <h2>Crear cuenta</h2>
            <div className = 'row'>
                <div className = 'col'>
                    <div className = 'shadow-lg p-3 mb-5 mt-4 bg-body rounded'>
                        <form className = 'row g-3' onSubmit = {handleRegister}>
                            <InputLogin placeholder = 'Correo electronico' type = 'email' name = 'email' value = {usuario.email} handleChange = {handleChange}/>
                            <InputLogin placeholder = 'Usuario' type = 'text' name = 'usuario' value = {usuario.usuario} handleChange = {handleChange}/>
                            <InputLogin placeholder = 'Contraseña' type = 'password' name = 'contra' value = {usuario.contra} handleChange = {handleChange}/>
                            <button onClick = {notify} type="submit" className="btn btn-success">REGISTRAR</button>
                            <Toaster/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
