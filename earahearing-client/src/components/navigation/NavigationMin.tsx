import { Logo } from "../logo/Logo"
import backArrow from "../../assets/back-arrow.svg"
import './nav.css'

const Nav = () => {
    return (
        <div className="nav-min" role="nav">
            <div className="nav-logo-min">
                <Logo logoType="dark"/>
            </div>
            <div>
            <a href="https://earahearing.com/">
                <div className="back-indicator">
                    <img src={backArrow} alt="back arrow" />
                    <p className="text text-dark">BACK</p>
                </div>
            </a>
            </div>
        </div>
    )
}

export default Nav