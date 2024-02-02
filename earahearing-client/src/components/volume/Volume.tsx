import { Button } from "../button/Button";
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import './volume.css'

const VolumePanel = () => {
    return (
        <div className="row volume-control">
            <div>
                <Button className="btn-dark btn-sm">
                    <img src={plus} alt="plus sign" />
                </Button>
            </div>

            <div className="vol">
                <p className="text-dark text-bold">0</p>
            </div>
            <div>
                <Button className="btn-dark btn-sm">
                    <img src={minus} alt="minus sign" />
                </Button>
            </div>
        </div>
    )
}

export default VolumePanel