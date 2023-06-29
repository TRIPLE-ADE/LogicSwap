import { section } from "../style"
const Hero = () => {
  return (
    <section className="bg-neutral-200">
       <div className={`${section.flexCenter} ${section.padding} sm:items-center justify-center text-center min-h-[90vh] sm:w-4/5 md:w-[70%] m-auto`}>
            <p className="text-lg font-semibold text-primary">Transforming Ideas into Digital Success</p>
            <h1 className="my-2 text-3xl font-bold sm:text-5xl font-quicksand">Expert IT Solutions for Your Business Needs!</h1>
            <p className="text-neutral-2">We provide comprehensive web programming, cyber IT consulting, and networking services to help your business succeed.</p>
            <button className="px-5 py-3 mt-5 font-semibold text-white bg-secondary hover:bg-dark-green rounded-3xl"><a href="mailto:">Contact Us</a></button>
       </div>
    </section>
  )
}

export default Hero