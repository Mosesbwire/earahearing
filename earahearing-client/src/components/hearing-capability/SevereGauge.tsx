import severeHearingChart from "../../assets/gauge-chart-severe.svg"
import './hearing-capability.css'
const SevereGauge = () => {
    return <div>
        <h1 className="subheadline text-centered text-dark">Moderately severe hearing loss</h1>
        <div className="gauge-chart-img">
            <img src={severeHearingChart} alt="gauge chart indicating severe hearing loss"/>
        </div>
    </div>
}

export default SevereGauge