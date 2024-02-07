import { TestQuietPlace } from "../../components/test-component/hearing-tests/QuietInstruction"
import { PrepareListeningTest } from "../../components/test-component/hearing-tests/prepListeningtest"
import { ConfrimDevice } from "../../components/test-component/hearing-tests/confirm-devices"
import Test from "./Test"
import { usePageContextCurrentPage } from "../../hooks/usePageContext"
import React from "react";
import './hearing-test.css'


export type pagesType = Record<string, React.JSX.Element>
export const LAST_TEST_PAGE = 10
export const TOTAL_TEST_PAGES = 13
const pages: pagesType = {
    '6': <ConfrimDevice/>,
    '7': <TestQuietPlace/>,
    '8': <PrepareListeningTest ear="Left" />,
    '9': <PrepareListeningTest ear="Right" />,
    '10': <Test/>
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