
import { HeadPhoneBtnSvg } from './headphoneBtnSvg'
import './headphoneBtn.css'

type headPhoneProps = {
    volume: number,
    index: number,
    active: number
    onClick: (idx: number) => void
}
export const HeadphoneBtn = ({volume, index, active, onClick}: headPhoneProps) => {
    const isActive = index === active
    return (
        <div className={`headphone-btn x-${volume}`} onClick={() => onClick(index)}>
            <HeadPhoneBtnSvg className='headphone-img' isActive={isActive}/>
            <p className={`text-dark text-bold vol-level vol-${volume}`}>{volume}</p>
        </div>
    )
}

