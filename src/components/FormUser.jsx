import { useContext } from "react"
import { UsuariosContext } from "../context/AppContext"

export const FormUser = () => {

    const { cambiarNombre } = useContext(UsuariosContext)

    return (
        <div>
            FormUser

            <form action="">
                <input onChange={(e)=>cambiarNombre(e.target.value)}  type="text" placeholder="ingresar nombre" />
            </form>

        </div>
    )
}