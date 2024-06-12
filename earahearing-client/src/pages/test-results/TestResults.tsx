import { StackedAreaChart } from "../../components/charts/areaChart"
import { hearingFrequenciesData } from "../../lib/utils"
import { Button } from "../../components/button/Button"
import HearingCapability from "../../components/hearing-capability/HearingCapability"
import hearingAid from "../../assets/hearing-aid-app.jpg"
import manWearingAids from "../../assets/wearing-HA.jpeg"
import callCenter from "../../assets/icons/customer agent call center.svg"
import customerAgentHeadphones from "../../assets/icons/customer agen headphones.svg"
import truck from "../../assets/icons/truck.png"
import piggyBank from "../../assets/icons/piggy bank.svg"
import shield from "../../assets/icons/shield.svg"
import hearingAidIcon from "../../assets/icons/hearing aid ear.png"
import phoneIc from "../../assets/phone-ic.png"
import email from "../../assets/Email.png"
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

    const isNormalHearing = (data: typeof right) => {
        return Object.values(data).every((el)=> {
            return el.y <= 25
        })
    }
   
    const hearingCapability = (data: typeof right) => {
        const hearingScore = calculateHearingScore(data)
        if (hearingScore <= 25) {
            return isNormalHearing(data) ?  'normal' : 'mild'
        } else if (hearingScore > 25 && hearingScore <= 35) {
            return 'mild'
        } else if (hearingScore > 35 && hearingScore <= 64) {
            return 'moderate'
        } else {
            return 'severe'
        }
    }

    const rightEarCapability = hearingCapability(right)
    const leftEarCapability = hearingCapability(left)

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
            <div className="">
                <div className="user-hearing">
                    {rightEarCapability === leftEarCapability ? <>
                        <div className="same_cap_wrapper">
                            <HearingCapability capability={rightEarCapability}/>
                        </div>
                    </> : <div className="capability-row">
                                <div className="left">
                                    <p className="text-dark headline text-centered">Left Ear</p>
                                    <HearingCapability capability={leftEarCapability}/>
                                </div>
                            <div className="right">
                                <p className="text-dark headline text-centered">Right Ear</p>
                                <HearingCapability capability={rightEarCapability}/>
                            </div>
                        </div>}
                </div>                
            </div>
            <div className="container">
                <div className="capability-wrapper">
                    <p className="text text-dark text-bold">Why does it matter to treat your hearing loss with hearing aids ?</p>
                </div>
                <div>
                    <p className="text text-dark text-bold text-centered subheadline learn-more">Learn more about how mild hearing loss happens</p>
                </div>
            </div>
            {rightEarCapability === 'normal' && leftEarCapability === 'normal' ?null: <>
            <div className="eara-explainer">
                <div className="container eara-explainer-headline">
                    <h1 className="headline text-bold text-accented text-centered">We understand how important hearing clearly is for enjoying life's special moments.</h1>
                </div>
                <div className="eara-explainer__image-wrapper">
                    <img src={manWearingAids} alt="old man wearing hearing aids playing with family" />
                </div>
            </div>
            <div className="eara-features">
                <div className="features-header">
                    <h1 className="headline text-centered text-bold">What you get with Eara Explore Li+</h1>
                </div>
                <div className="eara-features-wrapper">
                    <div className="eara-features__hearing-aid">
                        <img src={hearingAid} alt="hearing aid with mobile phone showing self fitting app" />
                    </div>
                    <div className="features-list">
                        <div className="hearing-aid-feature">
                            <div>
                                <div className="image_ic_wrapper">
                                    <img src={hearingAidIcon} alt="" />
                                </div>
                                <p className="text text-dark text-bold text-centered card-title">High-tech hearing aids</p>
                                <p className="text text-dark text-centered">Nearly invisible, Explore Li+ hearing aids are bluetooth-enabled and offer 360-degree sound and complete APP support with self-fitting technology.</p>
                            </div>
                        </div>
                        <div className="hearing-aid-feature">
                            <div>
                                <div className="image_ic_wrapper">
                                    <img src={callCenter} alt="" />
                                </div>
                                <p className="text text-dark text-bold text-centered card-title">Lifetime support</p>
                                <p className="text text-dark text-centered">Our customer service team is here to support you 24 hours a day 7 days a week.</p>
                            </div>
                        </div>
                        <div className="hearing-aid-feature">
                            <div>
                                <div className="image_ic_wrapper">
                                    <img src={piggyBank} alt="" />
                                </div>
                                <p className="text text-dark text-bold text-centered card-title">Incredible value</p>
                                <p className="text text-dark text-centered">Everything you need for better hearing- all for as low as $499 per pair. Financing also available.</p>
                            </div>
                        </div>
                </div>
                </div>
                <div className="eara-features_cta">
                    <a href="https://earahearing.com/product/ai-self-fitting-otc-hearing-aids/">
                        <Button className="btn-primary-rounded btn-md">SHOP NOW</Button>
                    </a>
                </div>
            </div>
            <div className="eara_guarantees">
                <div className="guarantee_header">
                    <h1 className="headline text-bold text-centered text-light">45-day risk-free-trial</h1>
                    <p className="text text-dark">Try Eara Explore Li+ hearing aids for 45 days. If you are not fully satisfied, we'll refund your entire order.</p>
                </div>
                <div className="guarantees">
                    <div className="guarantee">
                        <div className="guarantee_ic">
                            <img src={shield} alt="" />
                        </div>
                        <p className="text-dark text">1 year warranty</p>
                    </div>
                    <div className="guarantee">
                        <div className="guarantee_ic">
                            <img src={customerAgentHeadphones} alt="" />
                        </div>
                        <p className="text-dark text">Customer support 7 days a week</p>
                    </div>
                    <div className="guarantee">
                        <div className="guarantee_ic">
                            <img src={truck} alt="" />
                        </div>
                        <p className="text-dark text">Free shipping and returns</p>
                    </div>
                </div>
            </div>
            </>}
            <div className="banner-ad-section">
                <div className="container banner-ad-wrapper">
                    <div className="banner-ad">
                        <p className="text">Use discount code <span className="text-accented text-bold">HEARBETTER</span> at checkout to get <span className="text-accented text-bold">15%</span> off your first purchase</p>
                    </div>
                    <p className="text-light text-bold text-centered banner-ad-copy">Don't let hearing loss hold you back.</p>
                    <p className="text-light text-bold text-centered banner-ad-copy">Start enjoying clearer conversations and better sound quality now.</p>
                    <div className="banner-ad-cta">
                        <Button className="btn-primary-rounded-scale btn-md">Start hearing better now</Button>
                    </div>
                </div>
                <div className="ad-section">
                <div className="contact-info">
                    <div className="contact-info-wrapper">
                        <p className="text text-dark text-centered"><span className="headline">Need help deciding?</span> <br />Contact our friendly Eara experts.</p>
                        <div className="row contact-info-row">
                            <div className="contact-info-ic">
                                <img src={phoneIc} alt="phone icon" />
                            </div>
                            <p className="text text-dark">(800) 933-0885</p>
                        </div>
                        <div className="row contact-info-row">
                            <div className="contact-info-ic">
                                <img src={email} alt="email icon" />
                            </div>
                            <p className="text text-dark">info@earahearing.com</p>
                        </div>
                    </div>
                </div>
                <div className="ad-section-wrapper container">
                    <h1 className="text-dark text-centered headline">Questions about your results?</h1>
                    <p className="text text-dark text-centered">Schedule a complimentary appointment with our doctor</p>
                    <a href="https://calendly.com/sarah-smiley/30min" target="_blank">

                        <Button className="btn-secondary-rounded-ns btn-sm">Schedule your appointment here</Button>
                    </a>
                </div>
            </div>

            </div>
        </div>
}

export default TestResults