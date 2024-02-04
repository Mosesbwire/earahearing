import { TestContainer } from "../TestContainer"
import { TestInstruction } from "../TestInstruction"
import { TestImage } from "../TestInstructionImg"
import { Button } from "../../button/Button"
import { usePageContextNext } from "../../../hooks/usePageContext"
import { useProgressContextIncrease } from "../../../hooks/useProgressContext"
import './hearingtest.css'

type listeningProps = {
    img: string,
    ear: string
}
export const PrepareListeningTest = ({img, ear}: listeningProps) => {
    const next = usePageContextNext()
    const incrProgress = useProgressContextIncrease()

    const nextClickHandler = () => {
        next()
        incrProgress()
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
                        <img src={img} alt="ear image" className="ear-img"/>
                        <div className="prep-listening-cta">
                            <Button className="btn-primary-rounded btn-md">Play sound</Button>
                            <Button className="btn-sm btn-disabled" disabled={false} onClick={nextClickHandler}>Next</Button>
                        </div>
                    
                    </TestImage>
                </div>
            </TestContainer>
        </div>
    )
}

