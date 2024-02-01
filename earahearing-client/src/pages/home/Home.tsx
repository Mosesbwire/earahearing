import Start from "../start-page/Start";
import Quiz, {TOTAL_QUIZ_PAGES} from "../quiz/Quiz";
import HearingTest from "../hearing-tests/HearingTest";
import { usePageContextCurrentPage } from "../../hooks/usePageContext";

export default function Home(){
    const currentPage = usePageContextCurrentPage()
    if (currentPage === 0){
        return <Start/>
    } else if (currentPage > 0 && currentPage <= TOTAL_QUIZ_PAGES) {
        return <Quiz/>
    } else {
        return <HearingTest/>
    }
}