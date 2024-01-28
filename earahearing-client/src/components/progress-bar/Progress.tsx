
import './progress-bar.css'

export type progressBarProps = {
    text: string
}
export const ProgressBar = ({text}: progressBarProps) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                <div className="stepper"></div>
                <div className="step"></div>
            </div>
            <div className='text text-dark progress-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}