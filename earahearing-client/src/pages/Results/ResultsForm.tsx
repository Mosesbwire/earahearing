
import { Form } from "../../components/form/Form";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import BannerImg from "../../assets/CONGRATULATIONS.png"

import './results.css'


const ResultsForm = () => {
    return (
        <div className="results-form-page container">
            <div className="banner">
                <img src={BannerImg} alt="congratulations banner" />
            </div>
            <div className="results-form-text text-centered">
                <p className="text text-dark ">You have completed the hearing test.</p>
                <p className="text text-dark">Let's create a quick profile so you can keep record of your hearing test results</p>
            </div>
            <div className="result-form-element">
                <Form>
                   <div className="form-inputs">
                       <div>
                           <Input type="text"  name="firstName" label="First Name"/>
                           <Input type="text" name="lastName" label="Last Name"/>
                       </div>
                       <Input type="tel" name="phoneNumber" label="Phone Number"/>
                       <Input  type="email" name="email" label="Email"/>
                   </div>
                    
                    <div className="form-btn"><Button className="btn-primary-rounded btn-md">Get Results</Button></div>
                </Form>
            </div>
        </div>
    )
}

export default ResultsForm