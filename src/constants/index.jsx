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