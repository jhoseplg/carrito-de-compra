import { useEffect, useState } from "react"
import { Card } from "./Card"
import { getAllProducts } from "../actions/api.products"

export const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
       getAllProducts().then(response => setProducts(response))
    },[])

    return (
        <section className="py-10 bg-gray-100">

            <h1 className="font-bold text-center underline text-2xl underline-offset-3 py-10 text-blue-800">Todos los productos</h1>

            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    products.map((product)=>(
                        <Card product={product} />
                    ))
                }
            </div>
        </section>
    )
}