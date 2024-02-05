import { useState } from "react"
import { TestContainer } from "../TestContainer"
import { TestInstruction } from "../TestInstruction"
import { TestImage } from "../TestInstructionImg"
import { Button } from "../../button/Button"
import { usePageContextNext } from "../../../hooks/usePageContext"
import { useProgressContextIncrease } from "../../../hooks/useProgressContext"
import { RightSpeaker } from "../../ears-speaker/RightSpeaker"
import { LeftSpeaker } from "../../ears-speaker/LeftSpeaker"
import './hearingtest.css'

type listeningProps = {
    ear: 'Left' | 'Right'
}
export const PrepareListeningTest = ({ear}: listeningProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const next = usePageContextNext()
    const incrProgress = useProgressContextIncrease()

    const nextClickHandler = () => {
        next()
        incrProgress()
        setIsPlaying(false)
    } 
    const playSound = () => {
        setIsPlaying(true)
    }
    return (
        <div className="">
            <TestContainer>
                <div className="test-row">
                    <TestInstruction>
                        <h1 className="headline text-light">Prepare for the test</h1>
                        <h2 className="subheadline text-light">Let's make sure everything is working</h2>
                        <h2 className="subheadline text-light">Click <span className="text-accented">play sound</span> to test the {ear} ear</h2>
                    </TestInstruction>
                    <TestImage >
                        <h1 className="headline text-centered ear-test">{ear.toUpperCase()}</h1>
                       
                        {ear === 'Left' ? <LeftSpeaker className="ear-img" isPlaying={isPlaying}/> : <RightSpeaker className="ear-img" isPlaying={isPlaying}/>}
                        <div className="prep-listening-cta">
                            <Button className="btn-primary-rounded btn-md" onClick={playSound}>Play sound</Button>
                            <Button className={`btn-sm ${isPlaying ? 'btn-dark' : 'btn-disabled'}`} disabled={!isPlaying} onClick={nextClickHandler}>Next</Button>
                        </div>
                    
                    </TestImage>
                </div>
            </TestContainer>
        </div>
    )
}

