import React from "react"

import './test-container.css'
type testImageProp = {
    children: React.ReactNode
}
export const TestImage = ({children}: testImageProp) => {
    return (
        <div className="test-image">
            {children}
        </div>
    )

}