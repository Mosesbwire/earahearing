import { usePageContextNext } from "../../hooks/usePageContext"
import { Button } from "../../components/button/Button"
import heroImage from '../../assets/images.webp'
import './start-page.css'
const Start = () => {
    const nextPage = usePageContextNext()
    
    return (
        <section className="start-page-wrapper">
            <div className="hero">
                <div className="hero--image">
                    <img src={heroImage} alt="man and woman listening on headphones" />
                </div>
                <div className="hero--information container">
                    <h1 className="headline text-centered text-bold">Do you think you have a hearing loss?</h1>
                    <h2 className="subheadline text-dark text-centered">Clinically-validated and proven to provide accurate hearing test results.</h2>
                    <h2 className="subheadline text-dark text-centered">Take our 4-minute hearing test and see your results.</h2>
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