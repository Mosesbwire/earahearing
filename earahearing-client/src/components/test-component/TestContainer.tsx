import React from "react"
export type testContainerProps = React.ComponentProps<'section'>
export const TestContainer = ({children, ...rest}: testContainerProps) => {
    return (
        <section {...rest} className="test-wrapper">
            {children}
        </section>
    )
}