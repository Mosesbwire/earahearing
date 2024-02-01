import { TestQuietPlace } from "../../components/test-component/hearing-tests/QuietInstruction"
import { PrepareListeningTest } from "../../components/test-component/hearing-tests/prepListeningtest"
import Test from "./Test"
import leftEarImg from '../../assets/LEFT EAR.svg'
import rightEarImg from '../../assets/RIGHT EAR.svg'
import { usePageContextCurrentPage } from "../../hooks/usePageContext"
import React from "react";


export type pagesType = Record<string, React.JSX.Element>
export const LAST_TEST_PAGE = 9
const pages: pagesType = {
    '6': <TestQuietPlace/>,
    '7': <PrepareListeningTest ear="left" img={leftEarImg}/>,
    '8': <PrepareListeningTest ear="right" img={rightEarImg}/>,
    '9': <Test/>
}
const HearingTest = () => {
    const currentPage = usePageContextCurrentPage()
    return (
        <>
            {pages[currentPage.toString()]}
        </>
    )
}

export default HearingTest