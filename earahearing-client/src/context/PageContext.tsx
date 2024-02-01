import React, { useState } from "react";
import { PageContext } from "../hooks/usePageContext";

type pageContextProviderProps = {
    children: React.ReactNode
}
export default function PageContextProvider({ children }: pageContextProviderProps){
    const [currentPage, setCurrentPage] = useState<number>(0)
    function nextPage(){
        
        setCurrentPage(page => page + 1)
    }
    function previousPage(){
        setCurrentPage(page => page - 1)
    }
    return (
        <PageContext.Provider value={[currentPage, nextPage, previousPage]}>
            {children}
        </PageContext.Provider>
    )
}