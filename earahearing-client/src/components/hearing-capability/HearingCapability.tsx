
import Normal from "./Normal"
import Mild from "./Mild"
import Moderate from "./Moderate"
import Severe from "./Severe"


const hearingCapability = {
    normal: Normal,
    mild: Mild,
    moderate: Moderate,
    severe: Severe
}

type propType = {
    state: 'normal' | 'mild' | 'moderate' | 'severe'
}
const HearingCapability = ({state}: propType) => {
    return <div>
        {hearingCapability[state]()}
    </div>
}


export default HearingCapability