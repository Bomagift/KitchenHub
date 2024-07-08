import Header from "../Components/Header"
import  "../Styles/LandingPage.css"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Features from "../Components/Features"
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import MobileHeader from "../Components/MobileHeader"
function LandingPage() {
  return (
    <div>
        <Header/>
        <MobileHeader/>
        <Navbar/>
        <Hero/>
        <Features/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default LandingPage