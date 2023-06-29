import { Header, Hero, Services, About, Footer, Testimonials } from "./components"

function App() {
  return (
    <div className="bg-neutral-200 font-poppins">
        <Header/>
        <Hero/> 
        <Services/>
        <About/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default App
