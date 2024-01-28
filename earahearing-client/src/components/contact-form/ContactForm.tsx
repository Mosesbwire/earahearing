import { Form } from "../form/Form";
import { Input } from "../input/Input";
import { Button } from "../button/Button";

export const ContactForm = () => {
    return <Form>
        <div className="names">
            <Input type="text" name="firstName" label="First Name"/>
            <Input type="text" name="lastName" label="Last Name"/>
        </div>
        <Input type="tel" name="phoneNumber" label="Phone Number"/>
        <Input type="email" name="email" label="Email"/>
        <Button type="submit" className="btn-primary-rounded">
            Submit
        </Button>
    </Form>
}