import { section } from "../style";
import { AboutSection } from "../constants";

const About = () => {
  return (
    <section className={`${section.padding} text-center scroll-m-10`} id="about">
      <h2 className={`${section.sectionHeading}`}>About Us</h2>
      {AboutSection.map((about, index) => (
        <div key={about.id} className={`${index !== 0 ? 'py-5' : 'pb-5' }`}>
          {index === AboutSection.length - 1 ? (
            <div>
                <p className={`${section.sectionSubHeading}`}>{about.heading}</p>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-7">
                  {about.text.map((list, index) => (
                    <div key={index} className={`${section.serviceCard}`}>
                      {list.icon}
                      <h3 className="font-bold">{list.heading}</h3>
                      <p>{list.content}</p>
                    </div>
                  ))}
                </div>
            </div>
          ) : ( 
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full p-4 sm:w-1/2">
                <h3 className="mb-4 text-2xl font-semibold">{about.heading}</h3>
                <p className="text-lg leading-relaxed text-justify text-gray-700">
                  {about.text}
                </p>
              </div>
              <div className="w-full p-4 sm:w-1/2">
                <img src={about.img} alt={about.heading} className="mx-auto mb-4 md:w-[80%] " />
              </div>
            </div>
            )}
          </div>
      ))}
    </section>
  );
};

export default About;
