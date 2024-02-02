
import headphone from '../../assets/HEADPHONE BUTTON.svg'
import './headphoneBtn.css'

type headPhoneProps = {
    volume: number
}
export const HeadphoneBtn = ({volume}: headPhoneProps) => {
    return (
        <div className={`headphone-btn x-${volume}`}>
            <img src={headphone} alt="colored headphone" className={`headphone-img`} />
            <p className={`text-dark text-bold vol-level vol-${volume}`}>{volume}</p>
        </div>
    )
}

