import React from "react"

import './test-container.css'

type testInstuctionProps = {
    children: React.ReactNode
}
export const TestInstruction = ({children}:testInstuctionProps) => {
    return (
        <div className="test-instruction">
            {children}
        </div>
    )
}