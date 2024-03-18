import { StackedAreaChart } from "../../components/charts/areaChart"
import { hearingFrequenciesData } from "../../lib/utils"
import { Button } from "../../components/button/Button"
import HearingCapability from "../../components/hearing-capability/HearingCapability"
import hearingAid from "../../assets/hearing-aids.png"
import hearingAid_2 from "../../assets/hearing_aid-bg.png"
import manWearingAids from "../../assets/man_wearing_ha.jpeg"
import bluetoothIcon from "../../assets/bluetooth-ic.svg"
import batteryIcon from "../../assets/battery-ic.svg"
import selfFittingAppIcon from "../../assets/self-fitting-app.svg"
import audiologistIcon from "../../assets/audiologist-ic.svg" 
import docImg from "../../assets/audiologist-doc.png"
import phoneIcon from "../../assets/phone.svg"
import questionMark from "../../assets/question-mark-dark.svg"
import Navigation from "../../components/navigation/Navigation"
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
            <Navigation/>
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
                {rightEarCapability !== 'normal' || leftEarCapability !== 'normal' ? <div className="capability-wrapper">
                    <p className="text text-dark cap__text">
                    <span className="emphasized-text">More</span> recently, research is demonstrating the need to urgently intervene when hearing loss is indicated. Research has shown a strong relationship between hearing loss that is not treated and cognitive decline. This means that if you do not treat your hearing loss with hearing aids, then it can lead to memory problems, problems with balance, focus, comprehension, attention, concentration and much more. In addition, newer research has recently published that hearing aids have been proven to slow the effects of cognitive decline immediately! 
                    </p>
                    </div> : null}

                
            </div>
            {rightEarCapability === 'normal' && leftEarCapability === 'normal' ?null: <>
            <div className="ad-section">
                <div className="ad-section-wrapper container">
                    <p className="text text-light">So why not keep your brain strong and your mind healthy? It’s easy to hear better.</p>
                    <p className="text text-light"><span className="text-bold text-accented">Eara Explore Li+</span> hearing aids are the answer.</p>
                    <div className="ad-section-img-wrapper">
                        <img src={hearingAid} alt="rechargeable eara hearing aids with their charging case"/>
                    </div>
                </div>
            </div>
            <div className="eara-explainer">
                <div className="container">
                    <p className="text text-dark cap__text">Eara Explore Li+ are the first Self-Fitting, Bluetooth hearing aids available! These small devices are crafted for clarity thanks to advanced AI technology and dome construction. They boast new features that enhance fit and sound quality. Similar to expensive $4000 hearing aids, Eara Explore Li+ also features an open-fit style, providing users with natural, crystal-clear sound quality at the touch of a button. Users can easily take a quick 3-minute hearing test, allowing Eara Explore Li+ to automatically program itself. Additionally, users can independently adjust one or both ears at any frequency. Learn more about them here!</p>
                </div>
                <div className="eara-explainer__image-wrapper">
                    <img src={manWearingAids} alt="old man wearing aids playing with family" />
                </div>
            </div>
            <div className="eara-features">
                <h1 className="headline text-centered text-bold">Eara Explore Li+</h1>
                <div className="eara-features-wrapper">
                    <div className="eara-features__hearing-aid">
                        <img src={hearingAid_2} alt="hearing aid with is battery charging case" />
                    </div>
                    <div className="features-list container">
                        <div className="row hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={batteryIcon} alt="" />
                            </div>
                            <p className="text text-dark">Rechargable batteries</p>
                        </div>
                        <div className="row hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={bluetoothIcon} alt="" />
                            </div>
                            <p className="text text-dark">Bluetooth compatibility 5.0</p>
                        </div>
                        <div className="row hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={selfFittingAppIcon} alt="" />
                            </div>
                            <p className="text text-dark">Self-fitting app</p>
                        </div>
                        <div className="row hearing-aid-feature">
                            <div className="image_ic_wrapper">
                                <img src={audiologistIcon} alt="" />
                            </div>
                            <p className="text text-dark">Step-by-step instructions from an audiologist</p>
                        </div>
                </div>
                </div>
                <div className="eara-features_cta">
                    <a href="https://earahearing.com/product/ai-self-fitting-otc-hearing-aids/">
                        <Button className="btn-secondary-rounded btn-md">Shop Now</Button>
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