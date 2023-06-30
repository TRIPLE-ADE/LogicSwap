import { section } from "../style";
import { AboutSection } from "../constants";

const About = () => {
  return (
    <section className={`${section.padding} text-center`} id="about">
      <h2 className={`${section.sectionHeading}`}>About Us</h2>
      {AboutSection.map((about, index) => (
        <div key={about.id} className={`${index !== 0 ? 'py-5' : 'pb-5' }`}>
          <p className={`${section.sectionSubHeading}`}>{about.heading}</p>
          {index === AboutSection.length - 1 ? (
            <ul className="text-justify list-disc list-item">
              {about.text.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          ) : (
            <p>{about.text}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default About;
