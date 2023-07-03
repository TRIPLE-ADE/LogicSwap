import { section } from "../style"

const CompanyLogos = () => {
  return (
    <section className={`${section.padding} text-center bg-white`}>
        <h2 className={`${section.sectionHeading}`}>Companies We have Worked With</h2>
        <p className={`${section.sectionSubHeading}`}>Here are some of our Clients</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {/* {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index}`}
              className="h-12 mx-auto"
            />
          ))} */}
        </div>
    </section>
  );
}

export default CompanyLogos;
