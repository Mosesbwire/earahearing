import mildHearingChart from "../../assets/gauge-chart-mild.svg"
import './hearing-capability.css'
const MildGauge = () => {
    return <div>
        <h1 className="subheadline lg-subheadline text-centered text-dark">Mild hearing loss</h1>
        <div className="gauge-chart-img">
            <img src={mildHearingChart} alt="gauge chart indicating mild hearing loss"/>
        </div>
    </div>
}

export default MildGauge