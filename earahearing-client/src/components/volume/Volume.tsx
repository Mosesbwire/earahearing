import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import plus from '../../assets/vol-up.svg'
import minus from '../../assets/vol-down.svg'
import './volume.css'

type volProps = {
    play: (index: number) => void,
    nextFreq: boolean,
    selected: number,
    pendingClick: boolean
}

const VolumePanel = ({play, nextFreq, selected, pendingClick}: volProps) => {
    const [volume, setVolume] = useState(0)
    useEffect(()=> {
        if (nextFreq) {
            setVolume(selected + 1)
        } 
    }, [nextFreq, selected])



    const volumeUp = () => {
        if (pendingClick) return
        if (volume === 10) {
            setVolume(0)
            play(-1)
            return
        }
        setVolume(vol => vol + 1)
        play(volume)
    }

    const volumeDown = () => {
        if (pendingClick) return
        if (volume > 0) {
            setVolume(vol => vol -1)
        } else {
            setVolume(0)
        }
        play(volume - 2)
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
                <Button className="btn-dark btn-sm vol-down"  disabled={volume === 0} onClick={volumeDown}>
                    <img src={minus} alt="minus sign" />
                </Button>
            </div>
        </div>
    )
}

export default VolumePanel