import { useRef } from "react";
import { ProgressBar, Ref } from "./Progress";
import { useProgressContextData } from "../../hooks/useProgressContext";
import { sections } from "../../context/ProgressContext";

type refsTable = Record<sections, React.RefObject<Ref>>

export const ProgressBarContainer = () => {
    const stepRefAbout = useRef<Ref>(null)
    const stepRefTest = useRef<Ref>(null)
    const stepRefResults = useRef<Ref>(null)
    const progressData = useProgressContextData()

    const refs: refsTable = {
        'About': stepRefAbout,
        'Test': stepRefTest,
        'Results': stepRefResults
    }
    const updateRef = () => {
        const key: sections = progressData.ref as sections
        const ref = refs[key]
        if (ref.current) {
            ref.current.style.width = `${progressData.width}%`
        }
    }

    updateRef()
    return (
        <div className="row progress">
            <ProgressBar text={'About You'} ref={stepRefAbout}/>
            <ProgressBar text={'Hearing Test'} ref={stepRefTest}/>
            <ProgressBar text={'Results'} ref={stepRefResults}/>
        </div>
    )
}