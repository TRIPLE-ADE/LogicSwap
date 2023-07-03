import { footerLogo } from '../assets'
import { NavLinks, SocialLinks } from '../constants'
import { section } from '../style'

const Footer = () => {
  return (
    <footer className='text-white bg-dark-blue'>
        <div className={`${section.flexCenter} sm:grid sm:grid-cols-4 ${section.padding}`}>
            <section className='text-white'>
                <img src={footerLogo} alt="LogiSwap Logo" />
            </section>
            <section>
                <h5 className={`${section.footerHeading}`}>Quick Links</h5>
                <ul className={`${section.flexCenter}`}>
                    {NavLinks.map(navLink => (<li key={navLink.id}><a href={navLink.link} className='hover:text-primary' >{navLink.title}</a></li>))}
                </ul>
            </section>
            <section>
                <h5 className={`${section.footerHeading}`}>Support</h5>
                <ul className={`${section.flexCenter}`}>
                    <li>
                        <a href="#faq" className='hover:text-primary'>FAQ</a>
                    </li>
                </ul>
            </section>
            <section>
                <h5 className={`${section.footerHeading}`}>Contact</h5>
                <div  className={`${section.flexCenter}`}>
                    <div className='flex justify-center gap-5 sm:justify-start'>
                        {SocialLinks.map((socialLink) => (
                            <a key={socialLink.id} href={socialLink.link} target='_blank' rel='noreferrer' className=':hover:text-primary'>
                                {socialLink.icon}
                            </a>
                        ))}
                    </div>
                    <button className={`${section.button}`}><a href="mailto:logicswaptech@gmail.com">Contact Us</a></button>
                </div>
            </section>
        </div>
        <div className={`${section.flexCenter} sm:flex-row gap-2 border-t ${section.padding}`}>
            <p>Copyright © 2023 LogicSwap Tech.</p>
            <p>All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer