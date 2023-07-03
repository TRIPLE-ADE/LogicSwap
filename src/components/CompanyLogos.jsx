import { section } from "../style"
import { CompanyLogosData } from "../constants";

const CompanyLogos = () => {
  return (
    <section className={`${section.padding} text-center bg-white`}>
        <h2 className={`${section.sectionHeading}`}>Companies We have Worked With</h2>
        <p className={`${section.sectionSubHeading}`}>Here are some of our Clients</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-7">
          {CompanyLogosData.map((logo, index) => (
            <img
              key={index}
              src={logo.logo}
              alt={`Company Logo ${index}`}
              className="m-auto"
            />
          ))}
        </div>
    </section>
  );
}

export default CompanyLogos;
