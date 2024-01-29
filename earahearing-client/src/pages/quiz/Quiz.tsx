import { About } from "../../components/about/About";

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
        '76 - 90 years old'
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
        'I have a lot of trouble hearing well',
        'I do not hear well'
    ]
}

const hearingLevelOne: questionnaireFormatBoolean = {
    question: 'Do you sometimes feel like people mumble or speak softly?'
}
const hearingInNoisyPlaces: questionnaireFormatBoolean = {
    question: 'Do you have difficulty understanding speech in a crowd or a noisy resturant?'
}

const Quiz = () => {
    return (
        <>
        <About question={age.question} isMultipleChoice={true} choices={age.choices}/>
        <About question={interest.question} isMultipleChoice={true} choices={interest.choices}/>
        <About question={hearingLevel.question} isMultipleChoice={true} choices={hearingLevel.choices}/>
        <About question={hearingLevelOne.question} isMultipleChoice={false}/>
        <About question={hearingInNoisyPlaces.question} isMultipleChoice={false}/>
        </>
    )
}

export default Quiz