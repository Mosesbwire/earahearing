import { TestQuietPlace } from "../../components/test-component/hearing-tests/QuietInstruction"
import { PrepareListeningTest } from "../../components/test-component/hearing-tests/prepListeningtest"
import leftEarImg from '../../assets/LEFT EAR.svg'
import rightEarImg from '../../assets/RIGHT EAR.svg'

const HearingTest = () => {
    return (
        <>
        <TestQuietPlace/>
        <PrepareListeningTest ear="left" img={leftEarImg}/>
        <PrepareListeningTest ear="right" img={rightEarImg}/>
        </>
    )
}

export default HearingTest