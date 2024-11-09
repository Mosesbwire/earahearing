import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/button/Button"
import { HeadphoneBtn } from "../../components/headphone-button/HeadphoneBtn"
import VolumePanel from "../../components/volume/Volume"
import { ArrowSvg } from "../../components/arrow/ArrowSvg"
import { useProgressContextIncrease, useProgressContextDecrease } from "../../hooks/useProgressContext"
import { useSessionStorage } from "../../hooks/useSessionStorage"
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
    const key = `${ear}_freq_${frequency}`
    const setSelectedHeadphone = useSessionStorage(key, -1)[1]
    const [isSelected, setIsSelected] = useState(-1)
    const [moveToNextFrequency, setMoveToNextFrequency] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isClickPending, setIsClickPending] = useState(false)
    const volumeSteps = Array(10).fill('vol')
    const navigate = useNavigate()
    const incrProgress = useProgressContextIncrease()
    const decrProgress = useProgressContextDecrease()

    
    useEffect(() => {
        
        if (sessionStorage.getItem(key) && Number(sessionStorage.getItem(key)) !== -1) {
            setIsSelected(Number(sessionStorage.getItem(key)))
    
        } else {
            setIsSelected(-1)
            setIsPlaying(false)
        }
    }, [key])

    
    const nextClickHandler = () => {
        incrProgress()
        setMoveToNextFrequency(true)
        sound.pause()
        setPlayingHeadphone(-1)

        if (ear === 'Left' && frequency === frequencies.length - 1){
            navigate('/form')
        }

        if (frequency === frequencies.length - 1) {
            setEar('Left')
            setFrequency(0)
           
        } else {
            setFrequency(curr => curr + 1)
        }  

        
    }

    const prevClickHandler = () => {
        setIsPlaying(true)
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
        if (isClickPending) return

        setIsClickPending(true)
        sound.pause()
        sound.hearingTest(ear, ranges[`${frequency}`], index + 1)

        setPlayingHeadphone(index)
        setMoveToNextFrequency(false)
        setIsPlaying(true)
        
        setSelectedHeadphone(index)
        setIsSelected(-1)

        setTimeout(()=> {
            setIsClickPending(false)
        }, 600)
        
    }
    
    return (
        <div className="test">
            <div>
                <h1 className="headline text-bold text-centered">Hearing Test</h1>
                <p className="subheadline text-dark text-centered"><span className="curr-frequency">{ear} Ear</span> {frequencies[frequency]} Hz</p>
            </div>
            <div className="test-instruction-test">
                <div className="instruction-mobile">
                    <p className="text text-dark">Start at 1.</p>
                    <p className="text text-dark">Sound is now playing.</p>
                    <p className="text text-dark">Push the +  sign until you can <span className="emphasis-text-accented text-bold">barely hear</span> the sound in your <span className="text-bold emphasis-text-main-color">{ear} ear</span>.</p>
                    <p className="text text-dark">If you do not hear any sound, click the + sign until 10.</p>
                    <p className="text text-dark">Then click Next.</p>
                </div>
                <div className="instruction-desktop">
                    <p className="text text-dark">Select the headphones with the <span className="emphasis text-bold">lowest number</span> that you can <span className="emphasis text-bold">just barely</span> hear the sound.</p>
                    <p className="text text-dark">If you do not hear any sound, select the highest number headphone.</p>
                </div>
            </div>
            <div className="sound-panel">
                <VolumePanel play={playHeadphone} nextFreq={moveToNextFrequency} selected={isSelected} pendingClick={isClickPending}/>
            </div>
            <div className={`start-arrow ${playingHeadphone !== -1 ? 'toggle-arrow' : ''}`}>
                <ArrowSvg className="arrow"/>
                <div className="start-text">
                    <p className="text text-dark text-bold">START</p>
                </div>
            </div>
            <div className="sound-panel-desktop">
                {volumeSteps.map((vol,idx) => (
                    <HeadphoneBtn key={`${vol+ idx}`} volume={idx + 1} index={idx} active={playingHeadphone} selected={isSelected} next={moveToNextFrequency} onClick={playHeadphone}/>
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