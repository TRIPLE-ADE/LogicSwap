import { FaTwitter, FaLinkedinIn, FaInstagram, FaCode, FaShieldAlt, FaLightbulb, FaLaptopCode, FaNetworkWired   } from "react-icons/fa" 

export const NavLinks = [
    {
        id: 1,
        title: "Home",
        link: "#home",
    },
    {
        id: 2,
        title: "About",
        link: "#about",
    },
    {
        id: 3,
        title: "Services",
        link: "#services",
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