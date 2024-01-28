import React from "react"

import './button.css'
export type buttonProps = React.ComponentProps<'button'> & {
    name: string
}

export const Button = ({name, className, ...rest}: buttonProps) => {
    return (
        <button {...rest} className={`btn ${className}`}>{name}</button>
    )
}
