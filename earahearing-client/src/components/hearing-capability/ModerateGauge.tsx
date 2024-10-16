import moderateHearingChart from '../../assets/gauge-chart-mod.svg'
import './hearing-capability.css'
const ModerateGauge = () => {
    return <div>
        <h1 className='subheadline lg-subheadline text-centered text-dark'>Moderate hearing loss</h1>
        <div className="gauge-chart-img">
            <img src={moderateHearingChart} alt="gauge chart indicating moderate hearing loss"/>
        </div>
    </div>
}

export default ModerateGauge