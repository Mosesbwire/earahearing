import preloader from "../../assets/preloader.svg"
import './loading.css'
const Loading = ()=> {
    return <div className="loading">
        <div className="loading-wrapper">
            <img src={preloader} alt="loading"  className="preloader"/>
            <small className="text">Your results are on the way.</small>
        </div>
    </div>
}

export default Loading