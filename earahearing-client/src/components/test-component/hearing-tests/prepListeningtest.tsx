import { useState } from "react"
import { TestContainer } from "../TestContainer"
import { TestInstruction } from "../TestInstruction"
import { TestImage } from "../TestInstructionImg"
import { Button } from "../../button/Button"
import { usePageContextNext } from "../../../hooks/usePageContext"
import { useProgressContextIncrease } from "../../../hooks/useProgressContext"
import { RightSpeaker } from "../../ears-speaker/RightSpeaker"
import { LeftSpeaker } from "../../ears-speaker/LeftSpeaker"
import sound from "../../../lib/audio"
// import './hearingtest.css'
import './prep-listening.css'

type listeningProps = {
    ear: 'Left' | 'Right'
}
export const PrepareListeningTest = ({ear}: listeningProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const next = usePageContextNext()
    const incrProgress = useProgressContextIncrease()
    const nextClickHandler = () => {
        sound.pause()
        next()
        incrProgress()
        setIsPlaying(false)
    } 
    const playSound = async () => {
        setTimeout(()=> {

            setIsPlaying(true)
        },3000)
        await sound.play(ear)
    }
    return (
            <TestContainer>
                <div className="test-prep-wrapper">
                    <TestInstruction>
                        <div className="prep-instructions">
                            <h1 className="headline text-light">Prepare for the test</h1>
                            <h2 className="subheadline text-light">Let's make sure everything is working</h2>
                            <h2 className="subheadline text-light">Click <span className="text-accented">play sound</span> to test the {ear} ear</h2>
                        </div>
                    </TestInstruction>
                    <TestImage >
                        <div className="prep-img">
                            <h1 className="headline text-centered ear-test">{ear.toUpperCase()}</h1>
                            <div className="ear-img-wrapper">
                                {ear === 'Left' ? <LeftSpeaker className="ear-img" isPlaying={isPlaying}/> : <RightSpeaker className="ear-img" isPlaying={isPlaying}/>}
                            </div>
                            <div className="prep-listening-cta">
                                <Button className="btn-primary-rounded btn-md" onClick={playSound}>Play sound</Button>
                                <Button className={`btn-sm ${isPlaying ? 'btn-dark' : 'btn-disabled'}`} disabled={!isPlaying} onClick={nextClickHandler}>Next</Button>
                            </div>
                        </div>
                    
                    </TestImage>
                </div>
            </TestContainer>
    )
}

