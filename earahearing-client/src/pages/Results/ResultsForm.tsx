import React, { useState } from "react";
import * as Yup from 'yup'
import { useForm } from "../../hooks/useForm";
import { Form } from "../../components/form/Form";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";

import './results.css'
export const TOTAL_RESULT_PAGES = 1

type Inputs = Record<string, string>
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const ResultsForm = () => {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().trim().min(1, 'Name must be more than one character long').required('First Name is required'),
        lastName: Yup.string().trim().min(1, 'Name must be more than one character long ').required('Last Name is required'),
        email: Yup.string().trim().email('Enter a valid email').required('Email is required'),
        phoneNumber: Yup.string().trim().matches(phoneRegExp, {message: 'Enter a valid phone number'}).required('Phone number is required')
    })
    const initialValues: Inputs = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }

    type validationErrorsType = {
        firstName?: string,
        lastName?: string,
        email?: string,
        phoneNumber?: string
    }

    const validationErrors: validationErrorsType = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    }

    const [values, handleChange, resetForm] = useForm<Inputs>(initialValues)
    const [formErrors, setFormErrors] = useState(validationErrors)

    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        handleChange(e)
        const key = e.currentTarget.name
        setFormErrors({...formErrors, [key]: ''})
    }

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        validationSchema.validate(values, {abortEarly: false}).then(valid => {
            console.log(valid)
            resetForm()
        }).catch((validationError: Yup.ValidationError) => {
            const errors: Record<string, string> = {}
            validationError.inner.forEach(error => {
                if(error.path){
                    errors[error.path] = error.message
                }
            })
            setFormErrors(errors)
        })
        
    }
    
    return (
        <div className="results-form-page container">
    
            <div className="results-form-text text-centered">
                <h1 className="headline text-bold banner-text">Congratulations !</h1>
                <p className="text text-dark ">You have completed the hearing test.</p>
                <p className="text text-dark create-txt">Let's create a quick profile so you can keep record of your hearing test results</p>
            </div>
            <div className="result-form-element">
                <Form onSubmit={submit}>
                   <div className="form-inputs">
                       <div className="names-row">
                           <div className="inputs">
                               <Input type="text"  name="firstName" label="First Name" required value={values['firstName']} onChange={onInputChange}/>
                               {formErrors.firstName && <small className="error-msg">{formErrors.firstName}</small>}
                           </div>
                           <div className="inputs">
                               <Input type="text" name="lastName" label="Last Name" required value={values['lastName']} onChange={onInputChange}/>
                               {formErrors.lastName && <small className="error-msg">{formErrors.lastName}</small>}
                           </div>
                       </div>
                       <div className="inputs">
                           <Input type="tel" name="phoneNumber" label="Phone Number" required value={values['phoneNumber']} onChange={onInputChange}/>
                           {formErrors.phoneNumber && <small className="error-msg">{formErrors.phoneNumber}</small>}
                       </div>
                       <div className="inputs">
                           <Input  type="email" name="email" label="Email" required value={values['email']} onChange={onInputChange}/>
                           {formErrors.email && <small className="error-msg">{formErrors.email}</small>}
                       </div>
                   </div>
                    
                    <div className="form-btn">
                        <Button className="btn-primary-rounded btn-md" type={'submit'}>Get Results</Button>
                    </div>
                </Form>
                <small className="text-dark disclaimer-results">By clicking the button above, you are providing consent to display the results of your hearing test, provide explanation about your hearing ability and present the information that will help you choose the care option best for you. Read our Privacy <a href="">Policy here</a>.</small>
            </div>
        </div>
    )
}

export default ResultsForm