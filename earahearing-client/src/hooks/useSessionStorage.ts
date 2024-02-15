import { useState, useEffect } from 'react'



export const useSessionStorage = <T>(key: string, initialValue: T): [T , (data: T)=> void] => {
    
    const storeData = (data: T) => {
        sessionStorage.setItem(key, JSON.stringify(data))
    }

    const getData = () => {
        const item = sessionStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    }

    const [value, setValue] = useState<T>(getData())
    
    useEffect(()=> {
        const handleStorageChange = () => {
            setValue(getData())
        }
        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [key])

    const updateValue = (data: T) => {
        setValue(data)
        storeData(data)
    }

    return [
        value,
        updateValue
    ]
}



