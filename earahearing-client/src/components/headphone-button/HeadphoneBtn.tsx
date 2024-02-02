
import headphone from '../../assets/HEADPHONE BUTTON.svg'
import './headphoneBtn.css'

export const HeadphoneBtn = () => {
    return (
        <div className='headphone-btn'>
            <img src={headphone} alt="colored headphone" className='headphone-img' />
            <p className='text-dark text-bold vol-level'>1</p>
        </div>
    )
}

