import { section } from "../style";
import { TestimonialsData } from "../constants";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className={`${section.padding} text-center bg-white`} id="testimonial">
      <h2 className={`${section.sectionHeading}`}>Testimonials</h2>
      <p className={`${section.sectionSubHeading} mb-10`}>
        Hear from our satisfied customers and clients
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TestimonialsData.map((item, index) => (
          <div key={index} className="p-4 border rounded">
            <div className="mb-4 flex gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-600 font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.company}</p>
              </div>
            </div>
            <div className="flex">
                <FaQuoteLeft  className="text-lg" />
                <p className="flex-1">{item.message}</p>
                <FaQuoteRight className="text-lg self-end" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
