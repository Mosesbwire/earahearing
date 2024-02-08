import { TestContainer } from "../TestContainer";
import { Button } from "../../button/Button";
import personHeadphones from '../../../assets/PICTURE.svg'
import headPhone from '../../../assets/HEADPHONE.svg'
import earbud from '../../../assets/EAR BUDS.svg'
import { VolumeBars } from "../../volumeBars/VolumeBar";
import { usePageContextNext } from "../../../hooks/usePageContext";
import './confirm-device.css'

export const ConfrimDevice = () => {

    const nextPage = usePageContextNext()
    return (
        <section className="">
            <TestContainer>
                <div className="check-devices">
                    <div className="explainer-wrapper">
                        <div className="grid-row">
                            <p className="numbered-step">1</p>
                            <p className="text text-dark instruction">You will need headphones or earbuds to listen</p>
                        </div>
                            <div className="devices explainer-img">
                                <img src={headPhone} alt="headphones" className="desktop-img"/>
                                <img src={earbud} alt="earbuds" className="earbuds"/>
                            </div>
                    </div>
                    <div className="explainer-wrapper">
                        <div className="grid-row">
                            <p className="numbered-step">2</p>
                            <p className="text text-dark instruction">Be sure to turn up the volume of your device to maximum volume setting</p>
                        </div>
                            <div className="explainer-img volume-bars">
                                <VolumeBars/>
                            </div>
                    </div>
                    <div className="explainer-wrapper">
                        <div className="grid-row">
                            <p className="numbered-step">3</p>
                            <p className="text text-dark instruction">Put your headphone or earbuds on and connect them to your device</p>
                        </div>
                            <div className="explainer-img">
                                <img src={personHeadphones} alt="girl wearing headphones on an orange background" className="wearing-headphones"/>
                            </div>
                    </div>
                    <div className="devices-cta">
                        <Button className="btn-primary-rounded btn-md" onClick={nextPage}>Start Test</Button>
                    </div>
                </div>
            </TestContainer>
        </section>
    )
}