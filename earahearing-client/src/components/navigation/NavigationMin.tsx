import { Logo } from "../logo/Logo"
import { Button } from "../button/Button"
import './nav.css'

const Nav = () => {
    return (
        <div className="nav-min" role="nav">
            <div className="nav-logo-min">
                <Logo logoType="dark"/>
            </div>
            <div>
            <a href="https://earahearing.com/product/ai-self-fitting-otc-hearing-aids/">
                <Button className="btn-primary-rounded-scale btn-sm">Shop Now</Button>
            </a>
            </div>
        </div>
    )
}

export default Nav