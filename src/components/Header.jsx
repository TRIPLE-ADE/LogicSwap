import { useState } from "react"
import { NavLinks } from "../constants"
import { FaBars, FaTimes } from "react-icons/fa"
import { headerLogo } from "../assets"
import { section } from "../style"

const Header = () => {
    // toggle state handler
  const [toggle, setToggle] = useState(false)

  //function for changing toggle state
  const handleModal = () =>{
    setToggle(prev => !prev)
  }
  return (
    <header className={`${section.padding} ${toggle ? 'fixed left-0 right-0 z-50' : ''}`}>
        <nav className="flex items-center justify-between text-dark-blue">
            <div className="logo">
                <img src={headerLogo} alt='LogiSwap Logo' />
            </div>
            <div>
                {/* desktop navbar */}
                <ul className='font-bold font-quicksand hidden gap-4 sm:flex sm:flex-row'>
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
                <div className='fixed left-0 z-20 w-full min-h-full text-2xl font-bold text-center font-quicksand top-20 sidebar'>
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