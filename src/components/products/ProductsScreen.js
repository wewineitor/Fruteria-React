import {Frutas} from '../../data/Frutas'
import Card from './Card'

export const ProductsScreen = () => {
    return (
        <>
            <h2>Productos</h2>
            <div className = 'container'>
                <div className = 'row'>
                    {
                        Frutas.map(fruta => (
                            <Card {...fruta} key = {fruta.nombre}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
