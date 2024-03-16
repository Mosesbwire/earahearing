import blueLogo from '../../assets/eara29-final.png'
import lightLogo from "../../assets/earahearing-light.png"
import './logo.css'

type logoProps = {
    logoType: 'light' | 'dark'
}
export const Logo = ({logoType }:logoProps) => {
    const logo = logoType === 'dark' ? blueLogo : lightLogo
    return (
        <img src={logo} alt="earahearing logo" className='logo'/>
    )
}
