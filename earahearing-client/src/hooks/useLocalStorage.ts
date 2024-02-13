import { useState } from 'react'



export const useLocalStorage = <T>(): [T | undefined, (key: string, data: T)=> void, (key: string)=> void] => {
    const [state, setState] = useState<T>()

    const addData = (key: string, data: T) => {
        localStorage.setItem(key, JSON.stringify(data))
        setState(data)
    }

    const getData = (key: string) => {
        const data = localStorage.getItem(key)
        if(data) {
            setState(JSON.parse(data))
        } else {
            setState(undefined)
        }
    }

    return [
        state,
        addData,
        getData
    ]
}



