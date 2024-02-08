import React from "react";
import './questionnaire.css'


export type questionnaireProps = React.ComponentProps<'div'> & {
    question : string
}
export const Questionnaire = ({children, question, ...rest}: questionnaireProps) => {
    return (
        <div {...rest} className="questionnaire">
            <h1 className="subheadline text-dark">{question}</h1>
            {children}
        </div>
    )
}