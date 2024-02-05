import React, { useState } from "react"
import { Button } from "../../components/button/Button"
import { HeadphoneBtn } from "../../components/headphone-button/HeadphoneBtn"
import VolumePanel from "../../components/volume/Volume"
import { usePageContextNext, usePageContextPrev } from "../../hooks/usePageContext"
import { useProgressContextIncrease } from "../../hooks/useProgressContext"
import './hearing-test.css'


const frequencies = [500, 1000, 2000, 4000, 8000] as const

const Test = () => {
    const [ear, setEar] = useState<'Left' | 'Right'>('Right')
    const [frequency, setFrequency] = useState(0)
    const [playingHeadphone, setPlayingHeadphone] = useState(-1)
    const [moveToNextFrequency, setMoveToNextFrequency] = useState(false)
    const volumeSteps = Array(10).fill('vol')
    const next = usePageContextNext()
    const prev = usePageContextPrev()
    const incrProgress = useProgressContextIncrease()

    const nextClickHandler = () => {
        incrProgress()
        setMoveToNextFrequency(true)
        if (frequency === frequencies.length - 1) {
            setEar('Left')
            setFrequency(0)
        } else {
            setFrequency(curr => curr + 1)
        } 
          
        if (ear === 'Left' && frequency === frequencies.length - 1){
            next()
        }
    }

    const playHeadphone = (index: number) => {
        setPlayingHeadphone(index)
        setMoveToNextFrequency(false)
    }
    
    return (
        <div className="test">
            <div>
                <h1 className="headline text-centered">Hearing Test {ear} Ear</h1>
                <div className="emphasis-accented"></div>
                <p className="subheadline text-dark text-bold text-centered">{frequencies[frequency]} Hz</p>
            </div>
            <div className="test-instruction-test">
                <div className="instruction-mobile">
                    <p className="text text-dark">Start listening from the <span className="emphasis text-bold">lowest volume setting</span> that you can just <span className="emphasis text-bold">barely</span> hear the sound in your <span className="empahasis text-bold">right</span> ear.</p>
                    <p className="text text-dark">If you do not hear any sound, increase volume unitll you just barely hear the sound.</p>
                </div>
                <div className="instruction-desktop">
                    <p className="text text-dark">Select the <span className="emphasis text-bold">lowest number headphone</span> that you can just <span className="emphasis text-bold">barely</span> hear the sound in your <span className="empahasis text-bold">right</span> ear.</p>
                    <p className="text text-dark">If you do not hear any sound, select the highest number headphone.</p>
                </div>
            </div>
            <div className="sound-panel">
                <VolumePanel/>
            </div>
            <div className="sound-panel-desktop">
                {volumeSteps.map((vol,idx) => (
                    <HeadphoneBtn key={`${vol+ idx}`} volume={idx + 1} index={idx} active={playingHeadphone} next={moveToNextFrequency} onClick={playHeadphone}/>
                ))}
            </div>
            <div className="test-direction row">
                <Button className="btn-primary-outline btn-sm" onClick={prev}>Prev</Button>
                <Button className="btn-primary-rounded btn-sm" onClick={nextClickHandler}>Next</Button>
            </div>
        </div>
    )
}


export default Test