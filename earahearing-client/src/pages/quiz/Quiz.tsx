import { About } from "../../components/about/About";
import { usePageContextCurrentPage } from "../../hooks/usePageContext";

export const LAST_QUIZ_PAGE = 5
export const TOTAL_QUIZ_PAGES = 5

type questionnaireFormat = {
    question: string,
    choices: string[]
}

type questionnaireFormatBoolean = Omit<questionnaireFormat, 'choices'>
const age: questionnaireFormat = {
    question: 'What is your age?',
    choices:  [
        '< 18 years old',
        '18 - 40 years old',
        '41 - 60 years old',
        '61 - 75 years old',
        '76+'
    ]
}

const interest: questionnaireFormat = {
    question: 'What interests you in taking a hearing test today?',
    choices: [
        'I am curious about my hearing',
        'I suspect I have a hearing loss',
        'I have hearing loss and I do not wear hearing aids',
        'I have hearing loss and I wear hearing aids'
    ]
}
const hearingLevel: questionnaireFormat = {
    question: 'How do you hear?',
    choices: [
        'I have excellent hearing',
        'I have good hearing',
        'I have a little trouble hearing',
        'I have a lot of trouble hearing',
        'I do not hear well'
    ]
}

const hearingLevelOne: questionnaireFormatBoolean = {
    question: 'Do you sometimes feel like people mumble or speak softly?'
}
const hearingInNoisyPlaces: questionnaireFormatBoolean = {
    question: 'Do you have difficulty understanding speech in a crowd or a noisy resturant?'
}

interface dataObject {
    question: string,
    choices?: string[]
}

type questionsType = Record<string, dataObject>
const questions:questionsType = {
    '1': age,
    '2': interest,
    '3': hearingLevel,
    '4': hearingLevelOne,
    '5': hearingInNoisyPlaces
}

const Quiz = () => {
    const currentPage = usePageContextCurrentPage()
    const data = questions[currentPage.toString()]
    return (
        <>
            {currentPage >= 1 && currentPage < 4 && data.choices ? <About choices={data.choices} question={data.question} isMultipleChoice={true}/> : 
            
            <About isMultipleChoice={false} question={data.question}/>}
        </>
    )
}

export default Quiz