import { section } from "../style"
import { CompanyLogosData } from "../constants";

const CompanyLogos = () => {
  return (
    <section className={`${section.padding} text-center bg-white`}>
        <h2 className={`${section.sectionSubHeading}`}>Trusted by</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-7 mx-auto w-[50%]">
          {CompanyLogosData.map((logo, index) => (
            <img
              key={index}
              src={logo.logo}
              alt={`Company Logo ${index}`}
              className="m-auto w-[70px]"
            />
          ))}
        </div>
    </section>
  );
}

export default CompanyLogos;
