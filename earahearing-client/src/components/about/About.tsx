import { Questionnaire } from "../questionnaire/Questionnaire";
import { Button } from "../button/Button";
import { usePageContextNext } from "../../hooks/usePageContext";
import './about.css'

export type aboutProps = {
    isMultipleChoice: true,
    choices: string[],
    question: string
} | {
    isMultipleChoice: false,
    question: string
}
export const About = (props: aboutProps) => {
    const next = usePageContextNext()
    return (
        <div className="container about">
            <Questionnaire question={props.question}>
                {props.isMultipleChoice ? <div className="about--btn_choices">
                    {props.choices.map(choice => (
                        <Button className="btn-primary-outline" key={choice} onClick={next}>{choice}</Button>
                    ))}
                </div> : 
                <>
                    <div className="row about--btn_bool">
                        <Button className="btn-small-light col" onClick={next}>Yes</Button>
                        <Button className="btn-small-dark col" onClick={next}>No</Button>
                    </div>
                </>}
            </Questionnaire>
        </div>
    )
}