import { section } from "../style";
import { TestimonialsData } from "../constants";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className={`${section.padding} text-center bg-white scroll-m-20`} id="testimonial">
      <h2 className={`${section.sectionHeading}`}>Testimonials</h2>
      <p className={`${section.sectionSubHeading} mb-10`}>
        Hear from our satisfied customers and clients
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TestimonialsData.map((item, index) => (
          <div key={index} className="p-4 border rounded">
            <div className="flex justify-center gap-3 mb-4">
              <div>
                <p className="font-semibold text-gray-600">{item.name}</p>
                <p className="text-sm text-gray-500 uppercase">{item.company}</p>
              </div>
            </div>
            <div className="flex">
                <FaQuoteLeft  className="text-lg" />
                <p className="flex-1">{item.message}</p>
                <FaQuoteRight className="self-end text-lg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
