import { Header, Hero, Services, About, Footer} from "./components"

function App() {
  return (
    <div className="bg-neutral-200 font-poppins">
        <Header/>
        <Hero/> 
        <Services/>
        <About/>
        <Footer/>
    </div>
  )
}

export default App
