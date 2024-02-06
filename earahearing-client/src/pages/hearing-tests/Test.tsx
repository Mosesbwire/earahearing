import { useState } from "react"
import { Button } from "../../components/button/Button"
import { HeadphoneBtn } from "../../components/headphone-button/HeadphoneBtn"
import VolumePanel from "../../components/volume/Volume"
import { ArrowSvg } from "../../components/arrow/ArrowSvg"
import { usePageContextNext } from "../../hooks/usePageContext"
import { useProgressContextIncrease, useProgressContextDecrease } from "../../hooks/useProgressContext"
import sound from "../../lib/audio"
import { frequncyRange } from "../../lib/audio"
import './hearing-test.css'

type freq = Record<string, frequncyRange>
const frequencies = [500, 1000, 2000, 4000, 8000] as const
const ranges: freq = {
    0: 'freq_5',
    1: 'freq_10',
    2: 'freq_20',
    3: 'freq_40',
    4: 'freq_80'
}

const Test = () => {
    const [ear, setEar] = useState<'Left' | 'Right'>('Right')
    const [frequency, setFrequency] = useState(0)
    const [playingHeadphone, setPlayingHeadphone] = useState(-1)
    const [moveToNextFrequency, setMoveToNextFrequency] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const volumeSteps = Array(10).fill('vol')
    const next = usePageContextNext()
    const incrProgress = useProgressContextIncrease()
    const decrProgress = useProgressContextDecrease()
    

    const nextClickHandler = () => {
        incrProgress()
        setMoveToNextFrequency(true)
        setIsPlaying(false)
        sound.pause()
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

    const prevClickHandler = () => {
        setIsPlaying(false)
        sound.pause()
        setMoveToNextFrequency(true)
        if (ear === 'Right' && frequency !== 0){
            setFrequency(curr => curr - 1)
        } else if (ear === 'Left' && frequency === 0){
            setEar('Right')
            setFrequency(frequencies.length - 1)
        } else if (ear === 'Left' && frequency !== 0) { 
            setFrequency(curr => curr - 1)
        }

        if (frequency !== 0 || ear !== 'Right'){
            decrProgress()
        }
    }

    const playHeadphone = (index: number) => {
        sound.pause()
        sound.hearingTest(ear, ranges[`${frequency}`], index + 1)
        
        setPlayingHeadphone(index)
        setMoveToNextFrequency(false)
        setIsPlaying(true)
    }
    
    return (
        <div className="test">
            <div>
                <h1 className="headline text-centered">Hearing Test <span className="text-bold">{ear}</span> Ear</h1>
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
                <VolumePanel play={playHeadphone} nextFreq={moveToNextFrequency}/>
            </div>
            {playingHeadphone === -1 ? <div className="start-arrow">
                <ArrowSvg className="arrow"/>
                <div className="start-text">
                    <p className="text text-dark text-bold">START</p>
                </div>
            </div> : null}
            <div className="sound-panel-desktop">
                {volumeSteps.map((vol,idx) => (
                    <HeadphoneBtn key={`${vol+ idx}`} volume={idx + 1} index={idx} active={playingHeadphone} next={moveToNextFrequency} onClick={playHeadphone}/>
                ))}
            </div>
            <div className="test-direction row">
                <Button className="btn-primary-outline btn-sm" onClick={prevClickHandler}>Prev</Button>
                <Button className={`${isPlaying ? 'btn-primary-rounded': 'btn-primary-rounded-disabled'} btn-sm`} disabled={!isPlaying} onClick={nextClickHandler}>Next</Button>
            </div>
        </div>
    )
}


export default Test