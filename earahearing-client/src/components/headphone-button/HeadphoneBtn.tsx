
import { HeadphoneSvg } from './HeadphoneSvg'
import './headphoneBtn.css'

type headPhoneProps = {
    volume: number,
    index: number,
    active: number,
    selected: number,
    next: boolean
    onClick: (idx: number) => void
}
export const HeadphoneBtn = ({volume, index, active, selected, next, onClick}: headPhoneProps) => {
    const isActive = index === active && !next
    const isSelected = index === selected
    
    return (
        <div className={`headphone-btn x-${volume}`} onClick={() => onClick(index)}>
            <HeadphoneSvg className='headphone-img' isActive={isActive} isSelected={isSelected}/>
            <p className={`text-dark text-bold vol-level vol-${volume}`}>{volume}</p>
        </div>
    )
}

