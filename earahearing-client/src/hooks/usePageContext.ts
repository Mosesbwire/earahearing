import { createContext, useContext } from "react"

type pageContextType = [number, ()=> void, ()=> void]

export const PageContext = createContext<pageContextType>({} as pageContextType)

const useGetContext = () => {
    const context = useContext(PageContext)
    if (!context) {
        throw new Error('usePageContext cannot be used outside of pageContext')
    }
    return context
}

export const usePageContextNext = () => {
    const context = useGetContext()
    return context[1]
}

export const usePageContextPrev = () => {
    const context = useGetContext()
    return context[2]
}
export const usePageContextCurrentPage = () =>{
    const context = useGetContext()
    return context[0]
}
