/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react'

type progressContextType  = [{ref: string, width: number}, ()=> void, () => void]

export const ProgressContext = createContext({} as progressContextType)

const useGetProgressContext = () => {
    const context = useContext(ProgressContext)
    if (!context) {
        throw new Error('ProgressContext cannot be used outside of ProgressContext')
    }

    return context 
}

export const useProgressContextData = () => {
    const context = useGetProgressContext()
    return context[0]
}

export const useProgressContextIncrease = () => {
    const context = useGetProgressContext()
    return context[1]
}
