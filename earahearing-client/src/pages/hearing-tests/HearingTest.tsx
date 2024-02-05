import { TestQuietPlace } from "../../components/test-component/hearing-tests/QuietInstruction"
import { PrepareListeningTest } from "../../components/test-component/hearing-tests/prepListeningtest"
import Test from "./Test"
import { usePageContextCurrentPage } from "../../hooks/usePageContext"
import React from "react";
import './hearing-test.css'


export type pagesType = Record<string, React.JSX.Element>
export const LAST_TEST_PAGE = 9
export const TOTAL_TEST_PAGES = 12
const pages: pagesType = {
    '6': <TestQuietPlace/>,
    '7': <PrepareListeningTest ear="Left" />,
    '8': <PrepareListeningTest ear="Right" />,
    '9': <Test/>
}
const HearingTest = () => {
    const currentPage = usePageContextCurrentPage()
    return (
        <div>
            <div className="hearing-test-page container">
                {pages[currentPage.toString()]}
            </div>
        </div>
    )
}

export default HearingTest