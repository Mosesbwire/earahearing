import React, { useState } from "react";
import { ProgressContext } from "../hooks/useProgressContext";
import { TOTAL_QUIZ_PAGES } from "../pages/quiz/Quiz";
import { TOTAL_TEST_PAGES } from "../pages/hearing-tests/HearingTest";
import { TOTAL_RESULT_PAGES } from "../pages/Results/ResultsForm";

type ProgressContextProps = {
    children: React.ReactNode
}

export type sections = 'About' | 'Test' | 'Results'
type progressSectionType = {
    section: sections
    totalPages: number
}

const appSections: progressSectionType[] = [
    {section: 'About', totalPages: TOTAL_QUIZ_PAGES},
    {section: 'Test', totalPages: TOTAL_TEST_PAGES},
    {section: 'Results', totalPages: TOTAL_RESULT_PAGES},
]
export default function ProgressContextProvider( {children}: ProgressContextProps) {
    const [width, setWidth] = useState(0)
    const [currentSection, setCurrentSection] = useState(0)
    const [sectionUpdate, setSectionUpdate] = useState({ref: appSections[currentSection].section, width})

    if (width >= 100) {
        setWidth(0)
        setCurrentSection(curr => curr + 1)
    }
    
    const selectSection = () => {  
        return appSections[currentSection]
    }

    const increaseProgress = () => {
        const section = selectSection()
        const size = 100 / section.totalPages
        setWidth(wd => wd + size)
        const updatedWidth = width + size
        setSectionUpdate({ref: section.section, width: updatedWidth})
    }

    const decreaseProgress = () => {
        const section = selectSection()
        const size = 100 / section.totalPages
        setWidth(wd => wd - size)
        const updatedWidth = width - size
        setSectionUpdate({ref: section.section, width: updatedWidth})
    }

    return (
        <ProgressContext.Provider value={[sectionUpdate, increaseProgress, decreaseProgress]}>
            {children}
        </ProgressContext.Provider>
    )
}