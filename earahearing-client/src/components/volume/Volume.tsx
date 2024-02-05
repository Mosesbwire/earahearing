import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import plus from '../../assets/vol-up.svg'
import minus from '../../assets/vol-down.svg'
import './volume.css'

type volProps = {
    onClick: (index: number) => void,
    nextFreq: boolean
}

const VolumePanel = ({onClick, nextFreq}: volProps) => {
    const [volume, setVolume] = useState(0)
    useEffect(()=> {
        if (nextFreq) {
            setVolume(0)
        }

    }, [nextFreq])


    const volumeUp = () => {
        if (volume > 10) {
            setVolume(0)
            return
        }
        onClick(volume + 1)
        setVolume(vol => vol + 1)
    }

    const volumeDown = () => {
        if (volume > 0) {
            setVolume(vol => vol -1)
        } else {
            setVolume(0)
        }
        onClick(volume)
    }

    
    return (
        <div className="row volume-control">
            <div className="vol-ctrl">
                <Button className="btn-dark btn-sm vol-up" onClick={volumeUp}>
                    <img src={plus} alt="plus sign" />
                </Button>
            </div>

            <div className="vol">
                <p className="text-dark text-bold">{volume}</p>
            </div>
            <div className="vol-ctrl">
                <Button className="btn-dark btn-sm vol-down" onClick={volumeDown}>
                    <img src={minus} alt="minus sign" />
                </Button>
            </div>
        </div>
    )
}

export default VolumePanel