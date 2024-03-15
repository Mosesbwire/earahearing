import normalHearingChart from "../../assets/gauge-chart-normal.svg"
import './hearing-capability.css'

const NormalGauge = () => {
    return <div>
        <h1 className="subheadline text-centered text-dark">Normal hearing</h1>
        <div className="gauge-chart-img">
            <img src={normalHearingChart} alt="gauge chart indicating normal hearing"/>
        </div>
    </div>
}

export default NormalGauge