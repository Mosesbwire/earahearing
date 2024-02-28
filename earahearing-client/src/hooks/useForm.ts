
import React, { useState } from "react";

export const useForm = <T>(initialValues: T): [T, (evt: React.FormEvent<HTMLInputElement>)=> void, () => void] => {
    const [values, setValues] = useState(initialValues)

    const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = evt.currentTarget

        setValues({...values, [name]: value})
    }

    const resetForm = () => {
        setValues(initialValues)
    }

    return [
        values,
        handleChange,
        resetForm
    ]
}


