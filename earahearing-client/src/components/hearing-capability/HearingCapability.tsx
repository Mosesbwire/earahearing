
import Normal from "./Normal"
import Mild from "./Mild"
import Moderate from "./Moderate"
import Severe from "./Severe"
import NormalGauge from "./NormalGauge"
import MildGauge from "./MildGauge"
import ModerateGauge from "./ModerateGauge"
import SevereGauge from "./SevereGauge"

const hearingCapability = {
    normal: {gauge: NormalGauge, text: Normal},
    mild: {gauge: MildGauge, text: Mild},
    moderate: {gauge: ModerateGauge, text: Moderate},
    severe: {gauge: SevereGauge, text: Severe}
}

type propType = {
    right: 'normal' | 'mild' | 'moderate' | 'severe',
    left: 'normal' | 'mild' | 'moderate' | 'severe',
    isSameHearingCapability: boolean
}
const HearingCapability = ({right, left, isSameHearingCapability}: propType) => {
    return <div className="hearing-capability">
        <div className="hearing-capability-wrapper">
            <div className="right-ear-capability">
                <h1 className="headline text-centered">Left Ear</h1>
                {hearingCapability[left].gauge()}
                {isSameHearingCapability ? null : <div>{hearingCapability[left].text()}</div>}
            </div>
            <div className="left-ear-capability">
                <h1 className="headline text-centered">Right Ear</h1>
                {hearingCapability[right].gauge()}
                {isSameHearingCapability ? null : <div>{hearingCapability[right].text()}</div>}
            </div>
        </div>
        {isSameHearingCapability ? <div>{hearingCapability[right].text()}</div> : null}
    </div>
}


export default HearingCapability