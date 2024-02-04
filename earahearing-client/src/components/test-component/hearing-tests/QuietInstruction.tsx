import { TestContainer } from "../TestContainer";
import { TestImage } from "../TestInstructionImg";
import { TestInstruction } from "../TestInstruction";
import { Button } from "../../button/Button";
import quietPlaceImg from '../../../assets/COFFE TABLE.svg'
import { usePageContextNext } from "../../../hooks/usePageContext";
import { useProgressContextIncrease } from "../../../hooks/useProgressContext";

import './hearingtest.css'

export const TestQuietPlace = () => {
    const next = usePageContextNext()
    const incrProgress = useProgressContextIncrease()

    const onClickHandler = () => {
        next()
        incrProgress()
    }
    return (
        <section className="quiet-test-wrapper">
            <TestContainer>
                <div className="test-row">
                    <TestInstruction>
                        <h1 className="headline text-light">Before you get started You will need a quiet environment</h1>
                        <h2 className="subheadline text-light">Any background noise like the refrigerator, dishwasher or even wind can interfere with the test.</h2>
                        <div className="quiet-cta">
                            <Button className="btn-primary-rounded btn-md" onClick={onClickHandler}>I am in a quiet place</Button>
                        </div>
                    </TestInstruction>
                    <TestImage>
                        <img src={quietPlaceImg} alt="coffee table with mug next to a couch" className="quiet-img"/>
                    </TestImage>
                </div>
            </TestContainer>
        </section>
    )
}