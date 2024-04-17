import { Footer } from "./components/Footer"
import { FormUser } from "./components/FormUser"
import { Navbar } from "./components/Navbar"
import { Products } from "./components/Products"
import { Slider } from "./components/Slider"

export const Principal = () => {
  return (
    <div>
        <Navbar/>
        <Products />
        <Slider />
        <FormUser />
        <Footer />
    </div>
  )
}