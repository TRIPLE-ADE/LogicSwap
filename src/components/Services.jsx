import { section } from "../style"
import { ServiceCard } from "../constants"

const Services = () => {
  return (
    <section className={`${section.padding} text-center bg-white scroll-m-20`} id="services">
        <h2 className={`${section.sectionHeading}`}>Our Services</h2>
        <p className={`${section.sectionSubHeading}`}>We Offer different kind of Tech Solution</p>
        <p  className="max-w-[37rem] m-auto text-justify sm:text-center">At LogicSwap, we understand that businesses have unique challenges and requirements. which is why we offer a wide array of tech solutions designed to cater to diverse needs. Explore our range of services:</p>
        <div className="grid grid-cols-1 gap-10 md-grid-cols-2 lg:grid-cols-3 mt-7">
            {
                ServiceCard.map((service) => (
                    <div className={`${section.serviceCard}`} key={service.id}>
                      {service.icon}
                      <h3 className={`${section.serviceCardHeading}`}>{service.title}</h3>
                      <p className="text-neutral-1">{service.text}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Services