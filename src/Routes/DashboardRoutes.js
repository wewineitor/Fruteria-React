import { Route, Routes } from "react-router"
import { CarritoScreen } from "../components/carrito/CarritoScreen"
import { ProductsScreen } from "../components/products/ProductsScreen"
import { Navbar } from "../components/ui/Navbar"

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path = '/products' element = {<ProductsScreen/>}/>
                <Route path = '/carrito' element = {<CarritoScreen/>}/>
            </Routes>
        </>
    )
}
