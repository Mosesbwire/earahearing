
import './server-error.css'
const ServerError = () => {
    return <div className='server-error'>
        <div className="error-card">
            <p className='err-msg headline'><span className="status-code ">500</span> <span className="status-error">Server Error</span></p>
            <p className="text text-dark">Oops! something went wrong</p>
            <p className="text text-dark">Try to refresh this page or feel free to contact us if the error persists.</p>
        </div>
    </div>
}

export default ServerError