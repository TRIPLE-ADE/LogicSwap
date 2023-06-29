import { section } from "../style"
import { TestimonialsData } from "../constants"

const Testimonials = () => {
  return (
    <section className={`${section.padding} text-center bg-white`}>
        <h2 className={`${section.sectionHeading}`}>Testimonials</h2>
        <p className={`${section.sectionSubHeading} mb-10`}>Hear from our satisfied customers and clients</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TestimonialsData.map((item, index) => (
          <div key={index} className="p-4 border rounded">
            <div className="mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <p className="mb-2">{item.message}</p>
            <p className="text-gray-600 font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.company}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials