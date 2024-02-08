import { TestContainer } from "../TestContainer";
import { TestImage } from "../TestInstructionImg";
import { TestInstruction } from "../TestInstruction";
import { Button } from "../../button/Button";
import quietPlaceImg from '../../../assets/COFFE TABLE.svg'
import { usePageContextNext } from "../../../hooks/usePageContext";
import { useProgressContextIncrease } from "../../../hooks/useProgressContext";

import './quiet-instruction.css'
// import './hearingtest.css'

export const TestQuietPlace = () => {
    const next = usePageContextNext()
    const incrProgress = useProgressContextIncrease()

    const onClickHandler = () => {
        next()
        incrProgress()
    }
    return (
        <TestContainer>
            <section className="quiet-test-wrapper">
                
                    <TestInstruction>
                        <div className="quiet-instructions">
                            <h1 className="headline text-light">Before we begin you will need to be in a quiet environment</h1>
                            <h2 className="subheadline text-light">Any background noise like the refrigerator, dishwasher or even wind can interfere with the test.</h2>
                            <div className="quiet-cta">
                                <Button className="btn-primary-rounded btn-md" onClick={onClickHandler}>I am in a quiet place</Button>
                            </div>
                        </div>
                    </TestInstruction>
                    <TestImage>
                        <div className="quiet-img-wrapper">
                            <img src={quietPlaceImg} alt="coffee table with mug next to a couch" className="quiet-img"/>
                        </div>
                    </TestImage>
                
            </section>
        </TestContainer>
    )
}