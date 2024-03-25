import { useState } from "react"
import { usePageContextNext } from "../../hooks/usePageContext"
import { Button } from "../../components/button/Button"
import heroImage from '../../assets/images.webp'
import PrivacyPolicy from "../../components/privacy-policy/PrivacyPolicy"
import { clearTestFrequencyResults } from "../../lib/utils"

import './start-page.css'
const Start = () => {
    const [openPrivacyPolicy, setOpenPrivacyPolicy] = useState(false)
    const nextPage = usePageContextNext()
    clearTestFrequencyResults()

    const clickHandler = () => {
        setOpenPrivacyPolicy(!openPrivacyPolicy)
    }
    return (
        <section className="start-page-wrapper">
            { openPrivacyPolicy ? <div className="privacy-policy-container">
                <PrivacyPolicy clickHandler={clickHandler}/>
            </div>: null}
            <div className="hero">
                <div className="hero--image">
                    <img src={heroImage} alt="man and woman listening on headphones" />
                </div>
                <div className="hero--information container">
                    <h1 className="headline text-centered text-bold">Eara Online Hearing Test</h1>

                    <h1 className="headline text-centered text-bold">Do you think you have a hearing loss?</h1>
                    <h2 className="subheadline text-dark text-centered">Clinically-validated and proven to provide accurate hearing test results.</h2>
                    <h2 className="subheadline text-dark text-centered">Take our 4-minute hearing test and see your results.</h2>
                    <div className="disclaimer">
                        <p className="text text-dark">The Eara Online Hearing Test should not be considered a replacement for a consultation with a hearing care professional, and it does not serve as a medical diagnosis. </p>
                        <p className="text text-dark" >If you suspect you have a hearing loss, we recommend seeking the expertise of a hearing care professional for a comprehensive evaluation.</p>
                        <p className="text text-dark">By clicking the button below, you grant us permission to utilize the information you provide in the test, conduct the examination and present you with the test results. You have the option to revoke your consent at any time. For additional details refer to our <span className="underline privacy-link" onClick={clickHandler}>privacy policy</span>.</p>
                    </div>
                    <div className="start-btn">
                        <Button className="btn-primary-rounded btn-lg btn-desktop" onClick={nextPage}>
                            Start your free hearing test
                        </Button>
                        <Button className="btn-primary-rounded btn-lg btn-mobile" onClick={nextPage}>
                            Start
                        </Button>
                       
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Start