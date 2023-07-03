import { Header, Hero, Services, About, Footer, Testimonials, Faq, CompanyLogos } from "./components"

function App() {
  return (
    <div className="bg-neutral-200 font-poppins">
        <Header/>
        <Hero/> 
        <Services/>
        <About/>
        <Testimonials/>
        <Faq/>
        <CompanyLogos/>
        <Footer/>
    </div>
  )
}

export default App
