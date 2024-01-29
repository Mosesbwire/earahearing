import { ProgressBar } from "./Progress";


export const ProgressBarContainer = () => {
    return (
        <div className="row progress">
            <ProgressBar text="About You"/>
            <ProgressBar text="Hearing Test"/>
            <ProgressBar text="Results"/>
        </div>
    )
}