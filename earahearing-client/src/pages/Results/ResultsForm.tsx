
import { Form } from "../../components/form/Form";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";


import './results.css'

export const TOTAL_RESULT_PAGES = 1
const ResultsForm = () => {

    const scroll = () => {
        window.scrollTo({top: 500, behavior: 'smooth'})
    }
    return (
        <div className="results-form-page container">
    
            <div className="results-form-text text-centered">
                <h1 className="headline text-bold banner-text">Congratulations !</h1>
                <p className="text text-dark ">You have completed the hearing test.</p>
                <p className="text text-dark create-txt">Let's create a quick profile so you can keep record of your hearing test results</p>
            </div>
            <div className="result-form-element">
                <Form>
                   <div className="form-inputs">
                       <div className="names-row">
                           <Input type="text"  name="firstName" label="First Name" onClick={scroll}/>
                           <Input type="text" name="lastName" label="Last Name" onClick={scroll}/>
                       </div>
                       <Input type="tel" name="phoneNumber" label="Phone Number"/>
                       <Input  type="email" name="email" label="Email"/>
                   </div>
                    
                    <div className="form-btn"><Button className="btn-primary-rounded btn-md">Get Results</Button></div>
                </Form>
                <small className="text-dark disclaimer-results">By clicking the button above, you are providing consent to display the results of your hearing test, provide explanation about your hearing ability and present the information that will help you choose the care option best for you. Read our Privacy <a href="">Policy here</a>.</small>
            </div>
        </div>
    )
}

export default ResultsForm