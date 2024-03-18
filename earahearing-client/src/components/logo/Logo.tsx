
import blueLogo from '../../assets/eara29-final.png'
import lightLogo from "../../assets/earahearing-light.png"
import './logo.css'

type logoProps = {
    logoType: 'light' | 'dark'
}
export const Logo = ({logoType }:logoProps) => {
    const logo = logoType === 'dark' ? blueLogo : lightLogo
    

    const clickHandler = () => {
        location.href="https://earahearing.com/"
    }
    return (
        <img src={logo} alt="earahearing logo" className='logo' onClick={clickHandler}/>
    )
}
