import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginScreen } from "../components/login/LoginScreen"
import { RegisterScreen } from "../components/login/RegisterScreen"
import { DashboardRoutes } from "./DashboardRoutes"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/login' element = {<LoginScreen/>}/>
                <Route path = '/register' element = {<RegisterScreen/>}/>
                <Route path = '/*' element = {<DashboardRoutes/>}/>
            </Routes>
        </BrowserRouter>
    )
}
