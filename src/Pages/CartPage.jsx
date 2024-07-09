import Cart from "../Components/Cart"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import MobileHeader from "../Components/MobileHeader"

function CartPage() {
  return (
    <div>
        <Header/>
        <MobileHeader/>
        <Navbar/>
        <Cart/>
    </div>
  )
}

export default CartPage