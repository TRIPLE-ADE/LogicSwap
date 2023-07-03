import { FaTwitter, FaLinkedinIn, FaInstagram, FaCode, FaShieldAlt, FaLightbulb, FaLaptopCode, FaNetworkWired, FaAward, FaHandsHelping, FaGraduationCap, FaUsers, FaCogs   } from "react-icons/fa" 
import { about, mission, client1, client2, client3 } from "../assets"

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
        // text: `At Logic Swap, we are a team of experienced professionals dedicated
        // to providing exceptional technology solutions to businesses of all
        // sizes. With a deep understanding of the industry and a passion for
        // delivering high-quality work, we have built a reputation for excellence
        // and client satisfaction.`,
        text: `At Logic Swap, we are a team of experienced professionals dedicated 
        to providing exceptional technology solutions to businesses of all sizes. 
        With our deep industry knowledge and commitment to delivering high-quality work, 
        we have earned a reputation for excellence and client satisfaction.
        With over five years of experience in the technology sector, we have witnessed the transformative power of technology 
        and continually adapt to stay ahead in this rapidly changing industry.`,
        img: about,
    },
    {
        id: 3,
        heading: 'Our Mission',
        text: `Our mission is to empower businesses through innovative technology solutions. We believe that 
        technology can be a powerful enabler, driving growth, efficiency, and success. We are committed to 
        providing tailored solutions that align with our clients' objectives and contribute to their 
        long-term success. Together, let's unlock the full potential of your business.`,
        img: mission,
    },
    {
        id: 4,
        heading: 'Our Values',
        text: [
            {
                heading: 'Excellence',
                icon: <FaAward/>,
                content: 'Striving for excellence in every aspect of our work, setting high standards for quality and customer satisfaction.'
            },
            {
                heading: 'Collaboration',
                icon: <FaHandsHelping/>,
                content: 'Building strong partnerships with clients, understanding unique needs, and exceeding expectations.'
            },
            {
                heading: 'Integrity',
                icon: <FaShieldAlt/>,
                content: 'Conducting business with transparency, honesty, and ethical practices in all interactions.'
            },
            {
                heading: 'Continuous Learning',
                icon: <FaGraduationCap/>,
                content: 'Embracing a culture of continuous learning, staying updated with the latest technologies and industry trends.'
            },
            {
                heading: 'Customer-Centric Approach',
                icon: <FaUsers/>,
                content: 'Putting clients at the center, understanding challenges, and providing personalized solutions.'
            },
            {
                heading: 'Cutting-Edge Technology',
                icon: <FaCogs/>,
                content: 'Staying at the forefront of technological advancements to deliver innovative solutions for business growth.'
            }
        ]

        // text: [
        // 'Excellence: Striving for excellence in every aspect of our work, setting high standards for quality and customer satisfaction.',
        // 'Collaboration: Building strong partnerships with clients, understanding their needs, and exceeding expectations.',
        // 'Integrity: Conducting business with transparency, honesty, and ethical practices.',
        // 'Continuous Learning: Embracing a culture of continuous learning and staying updated with the latest technologies and trends.',
        // 'Customer-Centric Approach: Putting our clients at the center, understanding their challenges, and providing personalized solutions.',
        // 'Cutting-Edge Technology: Embracing the forefront of technological advancements, delivering innovative solutions for business growth.'
        // ]
    }
]

export const TestimonialsData = [
    {
      name: 'The Manager',
      company: 'Londri Pad',
      message: "Working with Logic Swap Tech Solutions was a game-changer for our business. Their expertise and innovative solutions have significantly improved our operations and customer experience"
    },
    {
      name: 'The Members',
      company: 'Association',
      message: 'We are extremely satisfied with the outstanding service provided by Logic Swap Tech Solutions. Their professionalism, attention to detail, and prompt communication have made them a valuable partner.',
    },
    {
      name: 'The Chair Leaders',
      company: 'Association',
      message: "Logic Swap Tech Solutions has truly exceeded our expectations. Their team's technical proficiency, dedication, and commitment to delivering exceptional results have been instrumental in our success.",
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

export const CompanyLogosData = [
    {
        index: 1,
        logo: client1,
    },
    {
        index: 2,
        logo: client2,
    },
    {
        index: 3,
        logo: client3,
    }
]

export const SocialLinks = [
    {
        id: 1,
        icon: <FaTwitter/>,
        link: '#'
    },
    {
        id: 2,
        icon: <FaLinkedinIn/>,
        link: '#'
    },
    {
        id: 3,
        icon: <FaInstagram/>,
        link: '#'
    },
]