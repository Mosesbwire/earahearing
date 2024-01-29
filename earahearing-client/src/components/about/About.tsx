import { Questionnaire } from "../questionnaire/Questionnaire";
import { Button } from "../button/Button";
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
    
    return (
        <div className="container about">
            <Questionnaire question={props.question}>
                {props.isMultipleChoice ? <div className="about--btn_choices">
                    {props.choices.map(choice => (
                        <Button className="btn-primary-outline" key={choice}>{choice}</Button>
                    ))}
                </div> : 
                <>
                    <div className="row about--btn_bool">
                        <Button className="btn-small-light col">Yes</Button>
                        <Button className="btn-small-dark col">No</Button>
                    </div>
                </>}
            </Questionnaire>
        </div>
    )
}