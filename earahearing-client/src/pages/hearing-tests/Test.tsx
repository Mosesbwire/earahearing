import { useEffect, useState } from "react"
import { Button } from "../../components/button/Button"
import { HeadphoneBtn } from "../../components/headphone-button/HeadphoneBtn"
import VolumePanel from "../../components/volume/Volume"
import { ArrowSvg } from "../../components/arrow/ArrowSvg"
import { usePageContextNext } from "../../hooks/usePageContext"
import { useProgressContextIncrease, useProgressContextDecrease } from "../../hooks/useProgressContext"
import { useLocalStorage } from "../../hooks/useLocalStorage"
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

type selectedFreqType = Record<frequncyRange, number>

type dataType = {
    Left: selectedFreqType,
    Right: selectedFreqType
}
const selectedFrequencies: dataType = {
    Left: {
        freq_5: -1,
        freq_10: -1,
        freq_20: -1,
        freq_40: -1,
        freq_80: -1
    },
    Right: {
        freq_5: -1,
        freq_10: -1,
        freq_20: -1,
        freq_40: -1,
        freq_80: -1
    }
}

const Test = () => {
    const [ear, setEar] = useState<'Left' | 'Right'>('Right')
    const [frequency, setFrequency] = useState(0)
    const [playingHeadphone, setPlayingHeadphone] = useState(-1)
    const [isSelected, setIsSelected] = useState(-1)
    const [data, addData, getData] = useLocalStorage<dataType>()
    const [moveToNextFrequency, setMoveToNextFrequency] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isClickPending, setIsClickPending] = useState(false)
    const volumeSteps = Array(10).fill('vol')
    const next = usePageContextNext()
    const incrProgress = useProgressContextIncrease()
    const decrProgress = useProgressContextDecrease()
    const visited = selectedFrequencies[ear][ranges[frequency]]
    useEffect(()=> {
        if(data){
            const currFreq = ranges[frequency]
            const currEar = selectedFrequencies[ear]
            const visited = currEar[currFreq]
            if (visited === -1) {
                setIsPlaying(false)
            }
        }
    }, [data, frequency, ear])
    useEffect(()=> {
        if(data){
            const currFreq = ranges[frequency]
            const currEar = selectedFrequencies[ear]
            const selected = currEar[currFreq]
            setIsSelected(selected)
        }
    }, [data, frequency, ear])


    if (isSelected === -1 && !data){
        addData('freq', selectedFrequencies)
    }

    const nextClickHandler = () => {
        incrProgress()
        setMoveToNextFrequency(true)
        sound.pause()
        setPlayingHeadphone(-1)
        
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
        getData('freq')   
    }

    const playHeadphone = (index: number) => {
        if (isClickPending) return

        setIsClickPending(true)
        sound.pause()
        sound.hearingTest(ear, ranges[`${frequency}`], index + 1)
        setIsSelected(-1)
        setPlayingHeadphone(index)
        setMoveToNextFrequency(false)
        setIsPlaying(true)
        const currFreq = ranges[frequency]
        const currEar = selectedFrequencies[ear]
        currEar[currFreq] = index
        
        addData('freq', selectedFrequencies)
        setTimeout(()=> {
            setIsClickPending(false)
        }, 1000)
        
    }
    
    return (
        <div className="test">
            <div>
                <h1 className="headline text-bold text-centered">Hearing Test</h1>
                <p className="subheadline text-dark text-centered"><span className="curr-frequency">{ear} Ear</span> {frequencies[frequency]} Hz</p>
            </div>
            <div className="test-instruction-test">
                <div className="instruction-mobile">
                    <p className="text text-dark">Start at 0</p>
                    <p className="text text-dark">Sound is now playing.</p>
                    <p className="text text-dark">Push the +  sign untill you can barely <span className="emphasis-text-accented text-bold">hear</span> the sound in your <span className="text-bold emphasis-text-main-color">{ear}</span></p>
                    <p className="text text-dark">If you do not hear any sound, click the + sign untill 10.</p>
                    <p className="text text-dark">Then click Next.</p>
                </div>
                <div className="instruction-desktop">
                    <p className="text text-dark">Select the <span className="emphasis text-bold">lowest number headphone</span> that you can just <span className="emphasis text-bold">barely</span> hear the sound in your <span className="empahasis text-bold">right</span> ear.</p>
                    <p className="text text-dark">If you do not hear any sound, select the highest number headphone.</p>
                </div>
            </div>
            <div className="sound-panel">
                <VolumePanel play={playHeadphone} nextFreq={moveToNextFrequency} selected={visited} pendingClick={isClickPending}/>
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