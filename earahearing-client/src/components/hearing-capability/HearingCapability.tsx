
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
    capability: 'normal' | 'mild' | 'moderate' | 'severe',
}
const HearingCapability = ({capability}: propType) => {
    return <div className="hearing-capability">
        <div className="hearing-capability-wrapper">
            {hearingCapability[capability].gauge()}
            <div>{hearingCapability[capability].text()}</div>
        </div>
    </div>
}


export default HearingCapability