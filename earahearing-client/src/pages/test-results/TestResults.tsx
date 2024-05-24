import { StackedAreaChart } from "../../components/charts/areaChart"
import { hearingFrequenciesData } from "../../lib/utils"
import { Button } from "../../components/button/Button"
import HearingCapability from "../../components/hearing-capability/HearingCapability"
import hearingAid from "../../assets/hearing-aids.png"
import hearingAid_2 from "../../assets/hearing_aid-bg.png"
import manWearingAids from "../../assets/man_wearing_ha.jpeg"
import bluetoothIcon from "../../assets/bluetooth.png"
import batteryIcon from "../../assets/battery.png"
import selfFittingAppIcon from "../../assets/application.png"
import audiologistIcon from "../../assets/audiologist.png"
import customerAgent from "../../assets/customer agent.png"
import hearingAid_ic from "../../assets/hearing aid.png" 
import ear from "../../assets/ear.png"
import docImg from "../../assets/audiologist-doc.png"
import phoneIcon from "../../assets/phone.svg"
import questionMark from "../../assets/question-mark-dark.svg"
import NavigationMin from "../../components/navigation/NavigationMin"
import './test-result.css'

const TestResults = () => {
    
    const labels = ['500Hz', '1000Hz', '2000Hz','4000Hz','8000Hz', '8500Hz'];
    
    const hearingTestData = hearingFrequenciesData()
    
    const right = Object.values(hearingTestData.right).map((val, idx) => {
        return {x: labels[idx], y: Number(val)}
    })
    const left = Object.values(hearingTestData.left).map((val, idx) => {
        return {x: labels[idx], y: Number(val)}
    })

    const calculateHearingScore = (data: typeof right) => {
        return data.reduce((acc, curr, idx, array) => {
            acc += curr.y
            if (idx === array.length - 1){
                return acc / array.length
            } else {
                return acc
            }
        }, 0)
    }

   
    const hearingCapability = (hearingScore: number) => {
        if (hearingScore <= 25) {
            return 'normal'
        } else if (hearingScore > 25 && hearingScore <= 35) {
            return 'mild'
        } else if (hearingScore > 35 && hearingScore <= 64) {
            return 'moderate'
        } else {
            return 'severe'
        }
    }

    const rightEarCapability = hearingCapability(calculateHearingScore(right))
    const leftEarCapability = hearingCapability(calculateHearingScore(left))
    return <div className="results-page">
            <NavigationMin/>
            <div className="container results-page-headline">
                <h1 className="headline text-centered">Results</h1>
                <p className="text text-dark text-centered">Please be aware that this test is based on the user's response. <span className="underline">This is not a diagnostic test.</span></p>
                <p className="text text-dark text-centered">If you suspect you have a hearing loss, it is suggested to have an audiological evaluation by an audiologist.</p>
            </div>

            <div className="chart-wrapper">
                <StackedAreaChart right={right} left={left}/>
            </div>
            <div className="container ">
                <div className="user-hearing">

                    <HearingCapability right={rightEarCapability} left={leftEarCapability} isSameHearingCapability={rightEarCapability === leftEarCapability}/>
                </div>

                
            </div>
            <div className="container">
                <div className="capability-wrapper">
                        <p className="text text-dark cap__text">
                        Many people ignore hearing loss beacause they don't want to use hearing aids or spend a lot of money.
                        </p>
                        <p className="text text-dark cap__text">
                        But it's important to take care of hearing loss right away.
                        </p>
                </div>
                <div>
                    <p className="text text-dark text-bold text-centered subheadline">Learn more about how mild hearing loss happens</p>
                </div>
            </div>
            {rightEarCapability === 'normal' && leftEarCapability === 'normal' ?null: <>
            <div className="ad-section">
                <div className="ad-section-wrapper container">
                    <h1 className="text-light text-centered headline">Questions about your results?</h1>
                    <p className="text text-light text-centered">Schedule a complimentary appointment with our doctor</p>
                    <Button className="btn-secondary-rounded-ns btn-sm">Schedule your appointment here</Button>
                </div>
            </div>
            <div className="eara-explainer">
                <div className="container eara-explainer-headline">
                    <h1 className="headline text-bold text-accented text-centered">We understand how important hearing clearly is for enjoying life's special moments.</h1>
                </div>
                <div className="eara-explainer__image-wrapper">
                    <img src={manWearingAids} alt="old man wearing aids playing with family" />
                </div>
            </div>
            <div className="eara-features">
                <div className="features-header">
                    <h1 className="headline text-centered text-bold">Eara Explore Li+</h1>
                    <p className="text text-dark text-centered ">Keep your brain healthy</p>
                    <p className="text text-accented text-centered text-bold">Hear the difference</p>
                </div>
                <div className="eara-features-wrapper">
                    <div className="eara-features__hearing-aid">
                        <img src={hearingAid} alt="hearing aid with battery charging case" />
                    </div>
                    <div className="features-list container">
                        <div className="hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={batteryIcon} alt="" />
                            </div>
                            <p className="text text-dark text-bold text-centered card-title">Portable rechargeability</p>
                            <p className="text text-dark text-centered">20 hour battery life with compact portable charger.</p>
                        </div>
                        <div className="hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={bluetoothIcon} alt="" />
                            </div>
                            <p className="text text-dark text-bold text-centered card-title">5.0 Bluetooth compatible</p>
                            <p className="text text-dark text-centered">Bluetooth connect any device, including iOS, android, Bluetooth tv and tablet</p>
                        </div>
                        <div className="hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={selfFittingAppIcon} alt="" />
                            </div>
                            <p className="text text-dark text-bold text-centered card-title">Easy to use</p>
                            <p className="text text-dark text-centered">Simply download, connect and take our in-APP hearing test. Explore Li+ hearing aids will instantly adjust the sound around you.</p>
                        </div>
                        <div className="hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={customerAgent} alt="" />
                            </div>
                            <p className="text text-dark text-bold text-centered card-title">24/7 customer support</p>
                            <p className="text text-dark text-centered">We support you anytime you need us- for a lifetime.</p>
                        </div>
                        <div className="hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={ear} alt="" />
                            </div>
                            <p className="text text-dark text-bold text-centered card-title">Crystal clear sound</p>
                            <p className="text text-dark text-centered">Hear every word and sound clearly - even in noisy places.</p>
                        </div>
                        <div className="hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={hearingAid_ic} alt="" />
                            </div>
                            <p className="text text-dark text-bold text-centered card-title">Comfortable fit</p>
                            <p className="text text-dark text-centered">Designed to be worn all day, easily and effortless wearing.</p>
                        </div>
                </div>
                </div>
                <div className="eara-features_cta">
                    <a href="https://earahearing.com/product/ai-self-fitting-otc-hearing-aids/">
                        <Button className="btn-primary-rounded btn-md">Shop Now</Button>
                    </a>
                </div>
            </div>
            </>}
            <div className="audiologist-consultation container">
                <div className="consultations-wrapper">
                    <div className="consultation">
                        <div className="consultation-icon-wrapper">
                            <img src={questionMark} alt="" />
                        </div>
                        <p className="text text-dark">Questions about your results?</p>
                    </div>
                    <div className="consultation">
                        <div className="consultation-icon-wrapper">
                            <img src={questionMark} alt="" />
                        </div>
                        <p className="text text-dark">Want to schedule a complimentary appointment with the doctor?</p>
                    </div>
                    <div className="consultation">
                        <div className="consultation-icon-wrapper">
                            <img src={phoneIcon} alt="" />
                        </div>
                        <p className="text text-dark">Call now for your <span className="underline">free consultation</span> <br /> (800) 933-0885</p>
                    </div>
                </div>
                <div className="consultation-img-wrapper">
                    <img src={docImg} alt="doctor holding eara hearing aids" />
                </div>
            </div>
            <div className="eara-policy container">
                <p className="text text-dark">At Eara Hearing, your hearing health is our priority. If you have any questions or concerns about your hearing test or your results, don't hesitate to reach out to us.</p>
                <p className="text text-dark">Our dedicated team of professionals is here to assist you.</p>
                <p className="text text-dark">Feel free to email us at <span className="underline">info@earahearing.com</span></p>
                <p className="text text-dark">Our experienced doctors will be happy to address any inquiries you may have. Your satisfaction and comfort are important to us, and we're committed to providing you with the best possible care.</p>
            </div>
        </div>
}

export default TestResults