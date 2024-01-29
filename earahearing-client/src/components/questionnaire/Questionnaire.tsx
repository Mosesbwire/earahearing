import React from "react";
import { ProgressBarContainer } from "../progress-bar/ProgressBar";
import './questionnaire.css'


export type questionnaireProps = React.ComponentProps<'div'> & {
    question : string
}
export const Questionnaire = ({children, question, ...rest}: questionnaireProps) => {
    return (
        <div {...rest} className="questionnaire">
            <ProgressBarContainer/>
            <h1 className="subheadline text-dark">{question}</h1>
            {children}
        </div>
    )
}