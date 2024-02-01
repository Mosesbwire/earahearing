import { TestContainer } from "../TestContainer"
import { TestInstruction } from "../TestInstruction"
import { TestImage } from "../TestInstructionImg"
import { Button } from "../../button/Button"
import { usePageContextNext } from "../../../hooks/usePageContext"

type listeningProps = {
    img: string,
    ear: string
}
export const PrepareListeningTest = ({img, ear}: listeningProps) => {
    const next = usePageContextNext()
    return (
        <div className="container">
            <TestContainer>
                <TestInstruction>
                    <h1 className="headline text-light">Prepare for the test</h1>
                    <h2 className="subheadline text-light">Let's make sure everything is working</h2>
                    <h2 className="subheadline text-light">Click play sound to test the {ear} ear</h2>
                </TestInstruction>
                <TestImage>
                    <h1 className="headline">{ear}</h1>
                    <img src={img} alt="ear image" />
                    <Button className="btn-primary-rounded">Play sound</Button>
                    <Button className="btn-primary-rounded" onClick={next}>Next</Button>
                </TestImage>
            </TestContainer>
        </div>
    )
}

