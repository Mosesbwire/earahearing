import { forwardRef} from 'react'
import './progress-bar.css'

export type progressBarProps = {
    text: string
}
export type Ref = HTMLDivElement

export const ProgressBar =forwardRef<Ref, progressBarProps>((props, ref) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                <div className="stepper"></div>
                <div className="step" ref={ref}></div>
            </div>
            <div className='text text-dark progress-text'>
                <p>{props.text}</p>
            </div>
        </div>
    )
})