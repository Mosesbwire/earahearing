import normalHearingChart from "../../assets/gauge-chart-normal.svg"
import './hearing-capability.css'

const NormalGauge = () => {
    return <div>
        <h1 className="subheadline lg-subheadline text-centered text-dark">Normal Hearing</h1>
        <div className="gauge-chart-img">
            <img src={normalHearingChart} alt="gauge chart indicating normal hearing"/>
        </div>
    </div>
}

export default NormalGauge