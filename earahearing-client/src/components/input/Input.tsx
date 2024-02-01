import React from "react"
import './input.css'


export type inputProps = React.ComponentProps<'input'> & {
    label: string
}
export const Input = ({type, name, label, ...rest}: inputProps) => {
    return (
        <div>
            <label htmlFor={name} className="label text text-dark">{label}</label>
            <input {...rest} type={type} name={name} autoComplete="true" className="input" id={name}/>
        </div>
    )
}