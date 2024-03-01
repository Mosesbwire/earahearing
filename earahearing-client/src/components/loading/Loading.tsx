import preloader from "../../assets/preloader.gif"
import './loading.css'
const Loading = ()=> {
    return <div className="loading">
        <img src={preloader} alt="loading"  className="preloader"/>
    </div>
}

export default Loading