import normalHearingChart from "../../assets/gauge-chart-normal.svg"
import './hearing-capability.css'

const Normal = () => {
    return <div>
        <h1 className="subheadline text-centered text-dark">Normal hearing</h1>
        <div className="gauge-chart-img">
            <img src={normalHearingChart} alt="gauge chart indicating normal hearing"/>
        </div>
        <p className="text text-dark cap-text">
        The test indicates you may have normal hearing. This is great news! 
        Make sure to always wear hearing protection when you’re in a lot of noise, otherwise, exposing your ears to loud sounds overtime can cause hearing loss.
        If you’re surprised to see that the results are normal, there are explanations for how this can happen. 
        Hearing loss does not always appear on a hearing test, as the process of how we hear is very complex. Hearing loss can be present from cellular damage, the damage can be caused from exposure to loud sounds (i.e., machinery, firearm use, power tools, etc.) or from other factors such like genetic predisposition to hearing loss. This type of hearing loss leads to difficulty understanding conversations in noise, even when the hearing test shows normal hearing. 
        While a hearing test may show normal hearing, those who experience difficulty understanding speech in noisy situations may be experiencing a type of hearing loss known as "hidden" hearing loss. This is because the hearing cells are damaged, which makes hearing more challenging.
        </p>
    </div>
}

export default Normal