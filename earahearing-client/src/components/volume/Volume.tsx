import { Button } from "../button/Button";
import plus from '../../assets/vol-up.svg'
import minus from '../../assets/vol-down.svg'
import './volume.css'

const VolumePanel = () => {
    return (
        <div className="row volume-control">
            <div className="vol-ctrl">
                <Button className="btn-dark btn-sm vol-up">
                    <img src={plus} alt="plus sign" />
                </Button>
            </div>

            <div className="vol">
                <p className="text-dark text-bold">0</p>
            </div>
            <div className="vol-ctrl">
                <Button className="btn-dark btn-sm vol-down">
                    <img src={minus} alt="minus sign" />
                </Button>
            </div>
        </div>
    )
}

export default VolumePanel