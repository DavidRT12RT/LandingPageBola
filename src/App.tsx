
//Components
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/Hero'
import CarrouselSection from './components/carrousel/Carrousel'
import Footer from './components/footer/Footer'

import './App.css'

function App() {

  	return (
    	<main className="mainContainer">
			<Navbar/>
			<HeroSection/>
			<CarrouselSection/>
			<Footer/>
    	</main>
  	)
}

export default App
