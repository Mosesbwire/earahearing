import React from "react"

export type formProps = React.ComponentProps<'form'>


export const Form = ({children, ...rest}: formProps) => {
    return (
        <form {...rest}>
            {children}
        </form>
    )
}
