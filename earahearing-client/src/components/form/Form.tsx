import React from "react"

export type formProps = React.ComponentProps<'form'>

export const Form = ({children}: formProps) => {
    return (
        <form action="">
            {children}
        </form>
    )
}
