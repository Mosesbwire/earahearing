import Start from "../start-page/Start";
import Quiz, {LAST_QUIZ_PAGE} from "../quiz/Quiz";
import HearingTest, {LAST_TEST_PAGE} from "../hearing-tests/HearingTest";
import ResultsForm from "../Results/ResultsForm";
import { usePageContextCurrentPage } from "../../hooks/usePageContext";

export default function Home(){
    const currentPage = usePageContextCurrentPage()
    if (currentPage === 0){
        return <Start/>
    } else if (currentPage > 0 && currentPage <= LAST_QUIZ_PAGE) {
        return <Quiz/>
    } else if (currentPage > LAST_QUIZ_PAGE && currentPage <= LAST_TEST_PAGE){
        return <HearingTest/>
    } else {
        return <ResultsForm/>
    }
}