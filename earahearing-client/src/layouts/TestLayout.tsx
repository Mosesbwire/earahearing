import React from "react";
import { ProgressBarContainer } from "../components/progress-bar/ProgressBar";

type testLayoutProps = {
    children: React.ReactNode
}

const TestLayout = ({children}: testLayoutProps) => {
    return (
        <div>
            <ProgressBarContainer/>
            {children}
        </div>
    )
}


export default TestLayout