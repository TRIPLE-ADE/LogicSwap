import { section } from "../style"

const Testimonials = () => {
  return (
    <section className={`${section.padding} text-center bg-white}`}>
        <h2 className={`${section.sectionHeading}`}>Testimonials</h2>
        <p className={`${section.sectionSubHeading}`}>Hear from our satisfied customers and clients</p>
    </section>
  )
}

export default Testimonials