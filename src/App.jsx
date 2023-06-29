import { Header, Hero, Services, About, Footer, Testimonials, Faq } from "./components"

function App() {
  return (
    <div className="bg-neutral-200 font-poppins">
        <Header/>
        <Hero/> 
        <Services/>
        <About/>
        <Testimonials/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default App
