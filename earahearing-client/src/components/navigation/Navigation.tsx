
import { useState, useRef } from "react"
import { Logo } from "../logo/Logo"
import { Button } from "../button/Button"
import mobileMenu from '../../assets/hambuger-menu.svg'
import closeBtn from '../../assets/close-btn.svg'
import './navigation.css'

const Navigation = () => {
    const [isMenuOpen, toggleOpenMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const nav = useRef<HTMLElement>(null)
    

    const toggleMenu = () => {
        toggleOpenMenu(!isMenuOpen)
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.current?.classList.add('scrolled')
            setIsScrolled(true)
        } else if (window.scrollY <= 50) {
            nav.current?.classList.remove('scrolled')
            setIsScrolled(false)
        }
    })
    return <nav ref={nav}>
            <div className="sticky-wrapper">
                <div className="nav-wrapper">
                    <div className="nav-logo-container container">
                        <div className="nav-logo">
                            <Logo logoType={isScrolled ? 'light' : 'dark'}/>
                        </div>
                        <div className={`menu-btn ${isScrolled ? 'menu-btn-scrolled' : ''}`} onClick={toggleMenu}>
                            <img src={mobileMenu} alt="mobile menu icon" />
                        </div>
                    </div>
                    <div className={`nav ${isMenuOpen ? 'open' : 'close'}`}>
                        <div className="menu-close-btn-wrapper" onClick={toggleMenu}>
                            <img className='menu-close-btn' src={closeBtn} alt="cross button"/>
                        </div>
                        <div className="nav_links">
                            <li><a className={`${isScrolled ? 'scrolled-nav': ''}`} href="https://earahearing.com/product/ai-self-fitting-otc-hearing-aids/">Hearing Aids</a></li>
                            <li><a className={`${isScrolled ? 'scrolled-nav': ''}`} href="https://earahearing.com/explore-li/">Self-fitting App</a></li>
                            <li><a className={`${isScrolled ? 'scrolled-nav': ''}`} href="/">Hearing Test</a></li>
                            <a href="https://earahearing.com/product/ai-self-fitting-otc-hearing-aids/">
                                <Button className="btn-primary-rounded-scale btn-sm">Shop Now</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </nav>
}

export default Navigation