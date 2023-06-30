import { FaTwitter, FaLinkedinIn, FaInstagram, FaCode, FaShieldAlt, FaLightbulb, FaLaptopCode, FaNetworkWired   } from "react-icons/fa" 
import { pic1 } from "../assets"

export const NavLinks = [
    {
        id: 1,
        title: "Home",
        link: "#home",
    },
    {
        id: 2,
        title: "Services",
        link: "#services",
    },
    {
        id: 3,
        title: "About",
        link: "#about",
    },
    {
        id: 4,
        title: "Testimonial",
        link: "#testimonial",
    },
]

export const ServiceCard = [
    {
        id: 1,   
        icon: <FaCode/>,
        title: "Web Programming",
        text: "Craft dynamic and functional websites and web applications tailored to your specifications."
    },
    {
        id: 2,    
        icon: <FaShieldAlt/>,
        title: "Cyber Security",
        text: "Protect your valuable assets with our comprehensive cybersecurity solutions."
    },
    {
        id: 3,
        icon: <FaLightbulb/>, 
        title: "IT Consulting",
        text: "Get expert guidance and strategic insights to optimize your technology infrastructure."
    },
    {
        id: 4, 
        icon: <FaLaptopCode/>,
        title: "Web and Mobile Application Development",
        text: "Enhance your online presence with custom web and mobile applications."
    },
    {
        id: 5,
        icon: <FaNetworkWired/>,
        title: "Networking Services",
        text: " Ensure seamless connectivity and reliable network infrastructure with our solutions."

    }
]

export const AboutSection = [
    {
        id: 1,
        heading: 'Who we are',
        text: `At Tech Swap, we are a team of experienced professionals dedicated
        to providing exceptional technology solutions to businesses of all
        sizes. With a deep understanding of the industry and a passion for
        delivering high-quality work, we have built a reputation for excellence
        and client satisfaction.`
    },
    {
        id: 2,
        heading: 'Our Background',
        text: `With [number of years] years of experience in the technology sector, we
        have witnessed the evolution of the digital landscape and the
        transformative power of technology. Our journey has allowed us to refine
        our skills, expand our knowledge, and stay ahead of the curve in a
        rapidly changing industry.`
    },
    {
        id: 3,
        heading: 'Our Mission',
        text: `Our mission is to empower businesses through innovative technology
        solutions. We believe that technology can be a powerful enabler, driving
        growth, efficiency, and success. We are committed to providing tailored
        solutions that align with our clients' objectives and contribute to
        their long-term success.`
    },
    {
        id: 4,
        heading: 'Our Values',
        text: [
            `Excellence: We strive for excellence in every aspect of our work, setting
            high standards for quality, performance, and customer satisfaction.`,
            `Collaboration: We believe in building strong partnerships with our
            clients, working collaboratively to understand their unique needs and
            deliver solutions that exceed expectations.`,
            `Integrity: We conduct our business with integrity, maintaining transparency, honesty, and ethical
            practices in all our interactions.`,
            ` Continuous Learning: We embrace a culture of continuous learning and improvement, staying updated with the
            latest technologies, industry trends, and best practices.`,
            `Customer-Centric Approach: Our clients are at the center of everything we do. We listen,
            understand their challenges, and provide personalized solutions that
            address their specific requirements.`

        ]
    }
]

export const TestimonialsData = [
    {
      name: 'John Doe',
      company: 'ABC Company',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat justo non libero tincidunt tincidunt. Proin tristique, nisi sit amet bibendum interdum, turpis tortor tincidunt tellus, ut lacinia enim massa a justo.',
      image: pic1,
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      message: 'Sed condimentum tincidunt dolor, nec auctor risus. Curabitur sit amet gravida neque, a pharetra velit. Maecenas blandit odio vitae aliquam rhoncus. Sed convallis neque enim, vitae sagittis massa hendrerit.',
      image: pic1,
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Corporation',
      message: 'Sed condimentum tincidunt dolor, nec auctor risus. Curabitur sit amet gravida neque, a pharetra velit. Maecenas blandit odio vitae aliquam rhoncus. Sed convallis neque enim, vitae sagittis massa hendrerit.',
      image: pic1,
    },
]

export const FaqData = [
    {
        question: "How long does it typically take to complete a web programming project?",
        answer: "The duration of a web programming project can vary depending on its complexity, scope, and specific requirements. We assess each project individually and provide a timeline based on the factors involved. We strive to deliver projects in a timely manner without compromising quality."
    },
    {
        question: "Can you assist with website maintenance and updates after the initial development?",
        answer: "Absolutely! We offer website maintenance and support services to ensure your website remains up-to-date, secure, and optimized. From regular content updates to security patches and technical improvements, we provide ongoing assistance and support according to your needs."
    },
    {
        question: "What steps do you take to ensure that the websites you build are mobile-friendly and responsive?",
        answer: "We follow responsive web design principles to ensure that the websites we develop are mobile-friendly and adapt seamlessly across different devices and screen sizes. We conduct thorough testing and optimization to guarantee an optimal user experience on desktops, tablets, and smartphones."
    },
    {
        question: "How do you handle scalability and future growth considerations in web application development?",
        answer: "When developing web applications, we consider scalability and future growth from the outset. We design and architect the application to be modular and flexible, allowing for easy expansion and integration of new features or functionalities as your business evolves. This ensures that your web application can accommodate increased user traffic and changing needs over time."
    },
    {
        question: "Can you provide ongoing cybersecurity monitoring and protection for our website or application?",
        answer: "Yes, we offer ongoing cybersecurity monitoring and protection services to safeguard your website or application against potential threats. We employ various security measures, including regular vulnerability scans, intrusion detection systems, security patches and updates, and proactive monitoring to ensure the continuous protection of your digital assets."
    },
    {
        question: "What methodologies or frameworks do you follow in your software development process?",
        answer: "We follow industry-standard software development methodologies such as Agile or Scrum. These methodologies emphasize iterative development, collaboration, and adaptability. Depending on the project requirements, we choose the most suitable framework and adapt our approach to ensure efficient project management, timely delivery, and client satisfaction."
    },
    {
        question: "Do you offer consultation services to help us determine the best technology solutions for our business?",
        answer: "Yes, we provide IT consultation services to assist you in determining the most suitable technology solutions for your business needs. Our experienced consultants assess your requirements, analyze your existing infrastructure, and offer expert guidance and recommendations to help you make informed decisions that align with your business goals and objectives."
    },
    {
        question: "Can you integrate third-party APIs or software systems into our website or application?",
        answer: "Absolutely! We have extensive experience in integrating third-party APIs and software systems into websites and applications. Whether it's integrating payment gateways, social media platforms, CRM systems, or other external services, we have the expertise to seamlessly integrate these functionalities into your project."
    },
    {
        question: "What level of expertise do your consultants possess in the IT industry?",
        answer: "Our consultants are highly skilled professionals with extensive expertise in the IT industry. They have diverse backgrounds and specialize in various domains such as web development, cybersecurity, infrastructure management, and software engineering. We ensure that our consultants stay updated with the latest industry trends and technologies to provide the highest level of expertise to our clients."
    },
    {
        question: "Can you provide training or documentation for using the web or mobile applications you develop?",
        answer: "Yes, we provide comprehensive training and documentation for using the web or mobile applications we develop. Our goal is to ensure that you and your team have the necessary knowledge and resources to effectively use and maintain the applications we deliver."
    }
]

export const SocialLinks = [
    {
        id: 1,
        icon: <FaTwitter/>,
        link: 'https://twitter.com/'
    },
    {
        id: 2,
        icon: <FaLinkedinIn/>,
        link: 'https://www.linkedin.com/in/'
    },
    {
        id: 3,
        icon: <FaInstagram/>,
        link: 'https://'
    },
]