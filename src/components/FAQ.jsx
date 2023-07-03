import { useState } from "react";
import { section } from "../style"
import { FaqData } from "../constants"
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

  return (
    <section className={`${section.padding} scroll-m-10`} id="faq">
        <h2 className={`${section.sectionHeading} text-center`}>Frequently Asked Questions</h2>
        <p className={`${section.sectionSubHeading} mb-10`}>Got questions? We have answers</p>
        <div className="space-y-4 sm:w-[80%] m-auto">
            {FaqData.map((item, index) => (
            <div key={index} className="p-4 border border-black rounded">
                <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
                >
                <h2 className="font-semibold">{item.question}</h2>
                {activeIndex === index ? (
                    <FaAngleUp className="text-gray-500"/>
                ) : (
                    <FaAngleDown className="text-gray-500"/>
                )}
                </div>
                {activeIndex === index && <p className="mt-2">{item.answer}</p>}
            </div>
            ))}
        </div>

    </section>
  )
}

export default Faq
