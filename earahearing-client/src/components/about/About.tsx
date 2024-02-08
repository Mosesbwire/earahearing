import { useState } from "react";
import { Questionnaire } from "../questionnaire/Questionnaire";
import { Button } from "../button/Button";
import { usePageContextNext } from "../../hooks/usePageContext";
import { useProgressContextIncrease } from "../../hooks/useProgressContext";
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
    const [selectedChoice, setSelectedChoice] = useState<string>('')
    const [selectedBtn, setSelectedBtn] = useState<string>('')
    const next = usePageContextNext()
    const incrProgress = useProgressContextIncrease()
    
    const BTN_YES = 'YES'
    const BTN_NO = 'NO'

    const timeOut = () => {
        setTimeout(()=> {
            next()
            incrProgress()
            setSelectedBtn('')
        }, 200)
    }
    const onClickHandlerChoice = (choice: string)=> {
        setSelectedChoice(choice)
        timeOut()
    }

    const onClickHandlerBtn = (e: React.MouseEvent) => {
        setSelectedBtn(e.currentTarget.id)
        timeOut()
    }
    return (
        <div className="container about">
            <Questionnaire question={props.question}>
                {props.isMultipleChoice ? <div className="about--btn_choices">
                    {props.choices.map(choice => (
                        <Button className={`btn-primary-outline btn-lg btn-txt ${choice === selectedChoice ? 'btn-selected' : ''}`} key={choice} onClick={()=> onClickHandlerChoice(choice)}>{choice}</Button>
                    ))}
                </div> : 
                <>
                    <div className="row about--btn_bool">
                        <Button className={`btn-small btn-light col ${selectedBtn === BTN_YES ? 'btn-selected': ''}`} id={BTN_YES} onClick={onClickHandlerBtn}>Yes</Button>
                        <Button className={`btn-small btn-dark col ${selectedBtn === BTN_NO ? 'btn-selected': ''}`} id={BTN_NO} onClick={onClickHandlerBtn}>No</Button>
                    </div>
                </>}
            </Questionnaire>
        </div>
    )
}