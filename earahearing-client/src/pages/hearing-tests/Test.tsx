import { Button } from "../../components/button/Button"
import { HeadphoneBtn } from "../../components/headphone-button/HeadphoneBtn"
import VolumePanel from "../../components/volume/Volume"
import { usePageContextNext, usePageContextPrev } from "../../hooks/usePageContext"
import './hearing-test.css'
const Test = () => {
    const volumeSteps = Array(10).fill(true)
    const next = usePageContextNext()
    const prev = usePageContextPrev()
    return (
        <div className="test">
            <div>
                <h1 className="headline text-centered">Hearing Test Right Ear</h1>
                <div className="emphasis-accented"></div>
                <p className="subheadline text-dark text-bold text-centered">500 Hz</p>
            </div>
            <div className="test-instruction-test">
                <div className="instruction-mobile">
                    <p className="text text-dark">Start listening from the <span className="emphasis text-bold">lowest volume setting</span> that you can just <span className="emphasis text-bold">barely</span> hear the sound in your <span className="empahasis text-bold">right</span> ear.</p>
                    <p className="text text-dark">If you do not hear any sound, increase volume unitll you just barely hear the sound.</p>
                </div>
                <div className="instruction-desktop">
                    <p className="text text-dark">Select the <span className="emphasis text-bold">lowest number headphone</span> that you can just <span className="emphasis text-bold">barely</span> hear the sound in your <span className="empahasis text-bold">right</span> ear.</p>
                    <p className="text text-dark">If you do not hear any sound, select the highest number headphone.</p>
                </div>
            </div>
            <div className="sound-panel">
                <VolumePanel/>
            </div>
            <div className="sound-panel-desktop">
                {volumeSteps.map((vol,idx) => (
                    <HeadphoneBtn volume={idx + 1} key={vol}/>
                ))}
            </div>
            <div className="test-direction row">
                <Button className="btn-primary-outline btn-sm" onClick={prev}>Prev</Button>
                <Button className="btn-primary-rounded btn-sm" onClick={next}>Next</Button>
            </div>
        </div>
    )
}


export default Test