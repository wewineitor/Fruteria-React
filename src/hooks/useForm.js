import { useState } from "react"

export const useForm = (initialState) => {
    const [usuario, setUsuario] = useState(initialState)

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(usuario)
    }

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return [usuario, handleChange, handleRegister, handleLogin]
}
