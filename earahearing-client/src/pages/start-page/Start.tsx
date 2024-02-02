import { usePageContextNext } from "../../hooks/usePageContext"
import { Logo } from "../../components/logo/Logo"
import { Button } from "../../components/button/Button"
import heroImage from '../../assets/images.jpg'
import './start-page.css'
const Start = () => {
    const nextPage = usePageContextNext()
    return (
        <section className="start-page-wrapper">
            <header className="container">
                <Logo/>
            </header>
            <div className="hero">
                <div className="hero--image">
                    <img src={heroImage} alt="man and woman listening on headphones" />
                </div>
                <div className="hero--information container">
                    <h1 className="headline text-centered">Do you think you have hearing loss?</h1>
                    <h2 className="subheadline text-dark text-centered">Clinically tested and proved to provide accurate hearing test results</h2>
                    <h2 className="subheadline text-dark text-centered">Take our 4 minute hearing test and see your results</h2>
                    <div className="start-btn">
                        <Button className="btn-primary-rounded btn-lg" onClick={nextPage}>
                            Start
                        </Button>
                       
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Start