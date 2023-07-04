import { section } from "../style"
import { hero } from "../assets"
const Hero = () => {
  return (
    <section className="bg-neutral-200" id="home" style={{backgroundImage: `url(${hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
       <div className={`${section.flexCenter} ${section.padding} sm:items-center justify-center text-center min-h-[100vh] sm:w-4/5 md:w-[70%] m-auto`}>
            <p className="text-lg font-semibold text-primary">Transforming Ideas into Digital Success</p>
            <h1 className="my-2 text-3xl font-bold sm:text-5xl font-quicksand">Expert IT Solutions for Your Business Needs!</h1>
            <p className="font-medium text-neutral-2">We provide comprehensive Web Programming, Cyber Security, IT Consulting, Networking Services and Cloud Computing to help your Business succeed.</p>
            <button className="px-5 py-3 mt-5 font-semibold text-white bg-secondary hover:bg-dark-green rounded-3xl"><a href="mailto:logicswaptech@gmail.com">Contact Us</a></button>
       </div>
    </section>
  )
}

export default Hero