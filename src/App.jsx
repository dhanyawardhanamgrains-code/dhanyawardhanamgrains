import './App.css'
import Navbar from './components/NavBar/Navbar'
import Hero from './sections/Hero/Hero'
import Products from './sections/Products/Products'
import Process from './sections/Process/Process'
import Benefits from './sections/Benefits/Benefits'
import About from './sections/About/About'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'
import SaveGrain from './sections/SaveGrain/SaveGrain'

function App() {

  return <>
    <Navbar />
    <Hero />
    <Products />
    <Process />
    <Benefits />
    <SaveGrain />
    <About />
    <Contact />
    <Footer />
  </>
}

export default App
