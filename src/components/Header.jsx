import { useState, useEffect } from "react"
import { NavLinks } from "../constants"
import { FaBars, FaTimes } from "react-icons/fa"
import { headerLogo } from "../assets"
import { hero } from "../assets"

const Header = () => {
    // toggle state handler
  const [toggle, setToggle] = useState(false)

  const [hasBackground, sethasBackground] = useState(false);

    //using useEffect to handle background for header
    useEffect(() => {
    const handleScroll = () => {
        const heroSectionHeight = document.getElementById('home').offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= heroSectionHeight) {
        sethasBackground(false); // Move out of hero section
        } else {
        sethasBackground(true); // Inside hero section
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  //function for changing toggle state
  const handleModal = () =>{
    setToggle(prev => !prev)
  }
  return (
    <header className={`fixed left-0 right-0 z-50 px-6 py-6 min-[900px]:px-16 min-[1024px]:px-24 ${hasBackground ? '' : 'bg-neutral-200'}`}  style={{backgroundImage: hasBackground ?  `url(${hero})` : `none`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <nav className="flex items-center justify-between text-dark-blue">
            <div className="logo">
                <img src={headerLogo} alt='LogiSwap Logo' />
            </div>
            <div>
                {/* desktop navbar */}
                <ul className='hidden gap-4 font-bold font-quicksand sm:flex sm:flex-row'>
                    {NavLinks.map(navLink => (<li key={navLink.id} className="hover:text-neutral-2"><a href={navLink.link} >{navLink.title}</a></li>))}
                </ul>
            </div>
            {/* rendering Bar Icon with toggle condition */}
            {!toggle &&  <FaBars className="text-2xl cursor-pointer sm:hidden" onClick={handleModal}/>}
            {/* rendering Times Icon with toggle condition */}
            {toggle && <FaTimes className="text-2xl cursor-pointer sm:hidden" onClick={handleModal}/>}
            
            {/* mobile navbar with toggle condition*/}
            {
                toggle && 
                <div className='fixed left-0 z-20 w-full min-h-full text-2xl font-bold text-center bg-neutral-200 font-quicksand top-20 sidebar'>
                <ul>
                    {NavLinks.map(navLink => (<li key={navLink.id} className="my-10"><a href={navLink.link} onClick={handleModal} >{navLink.title}</a></li>))}
                </ul>
                </div>
            }
        </nav>
    </header>
  )
}

export default Header