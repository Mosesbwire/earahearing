import severeHearingChart from "../../assets/gauge-chart-severe.svg"
import './hearing-capability.css'
const SevereGauge = () => {
    return <div>
        <h1 className="subheadline lg-subheadline text-centered text-dark">Moderately Severe Hearing Loss</h1>
        <div className="gauge-chart-img">
            <img src={severeHearingChart} alt="gauge chart indicating severe hearing loss"/>
        </div>
    </div>
}

export default SevereGauge