import { createContext, useState } from "react";

export const UsuariosContext = createContext()

export const AppContext = ({ children }) => {

    const [nombre, setNombre] = useState("Martin")
    const [cartItems, setCartItems] = useState([])

    const cambiarNombre = (newName) => {
        setNombre(newName)
    }

    const handleAddCart = (product) => {
        const existeProduct = cartItems.find((items) => items.id === product.id)
        //PRODUCTO EXISTE
        if (existeProduct) {
            const uodateProduct = {
                ...existeProduct,
                cantidad: existeProduct.cantidad + 1
            }
            const updateCard = cartItems.map((item) => item.id === existeProduct.id ? uodateProduct : item )
            setCartItems(updateCard)
        } else {
            //PRODUCTO NO EXISTE
            const newProductCart = {
                ...product,
                cantidad: 1
            }
            setCartItems([newProductCart, ...cartItems])
        }
    }

    console.log(cartItems)

    return (
        <UsuariosContext.Provider value={{ nombre, cambiarNombre, cartItems, handleAddCart }}>
            {children}
        </UsuariosContext.Provider>
    )
}