import { section } from "../style"
const Hero = () => {
  return (
    <section className="bg-neutral-200 pt-10">
       <div className={`${section.flexCenter} ${section.padding} sm:items-center text-center min-h-[85vh] sm:w-4/5 md:w-[65%] m-auto`}>
            <p className="text-lg text-primary font-semibold">Transforming Ideas into Digital Success</p>
            <h1 className="text-3xl sm:text-5xl font-bold font-quicksand my-2">Expert IT Solutions for Your Business Needs!</h1>
            <p className="text-neutral-2">We provide comprehensive web programming, cyber IT consulting, and networking services to help your business succeed.</p>
            <button className="bg-secondary hover:bg-dark-green px-5 py-3 mt-5 rounded-3xl text-white font-semibold"><a href="mailto:">Contact Us</a></button>
       </div>
    </section>
  )
}

export default Hero