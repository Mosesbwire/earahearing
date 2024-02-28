import Start from "../start-page/Start";
import TestLayout from "../../layouts/TestLayout";
import Quiz, {LAST_QUIZ_PAGE} from "../quiz/Quiz";
import HearingTest, {LAST_TEST_PAGE} from "../hearing-tests/HearingTest";
import ResultsForm from "../Results/ResultsForm";
import { usePageContextCurrentPage } from "../../hooks/usePageContext";

export default function Home(){
    const currentPage = usePageContextCurrentPage()
    
    const nextPage = () => {
        if (currentPage > 0 && currentPage <= LAST_QUIZ_PAGE) {
        
            return <TestLayout>
                <Quiz/>
            </TestLayout>
                
        } else if (currentPage > LAST_QUIZ_PAGE && currentPage <= LAST_TEST_PAGE){
            return <TestLayout>
                    <HearingTest/>
                </TestLayout>       
        } else {
            return <ResultsForm/>
        }
    }
    
    if (currentPage === 0){
        return <Start/>
    } else {
        return nextPage()
    }
}