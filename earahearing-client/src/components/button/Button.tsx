import React from "react"

import './button.css'
export type buttonProps = React.ComponentProps<'button'>

export const Button = ({children, className, ...rest}: buttonProps) => {
    return (
        <button {...rest} className={`btn ${className}`}>{children}</button>
    )
}
 