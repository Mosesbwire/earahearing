
type data = Record<string, unknown>
export const getHearingTestData = () => {
    const TOTAL_FREQ = 5
    const left: data = {} as data
    const right: data = {} as data
    for (let freq = 0; freq < TOTAL_FREQ; freq ++) {
        const right_key = `Right_freq_${freq}`
        const left_key = `Left_freq_${freq}`

        const data_right = sessionStorage.getItem(right_key)
        const data_left = sessionStorage.getItem(left_key)

        if (!data_right || !data_left){
            console.log('Empty test')
        }
       
        right[right_key] = data_right
        left[left_key] = data_left 
    }

    return {right, left}
}

export const getTestQuizData = () => {
    return sessionStorage.getItem("test_data")
}

export const hearingFrequenciesData = () => {
    const {right, left} = getHearingTestData()
    const BASE_DECIBEL = 20
    const INCREMENTS = 5
    const BASE_VALUE = 0

    for (const key in right) {
        let value = Number(right[key])
        
        value = (value - BASE_VALUE) * INCREMENTS + BASE_DECIBEL
        right[key] = value
    }
    for (const key in left) {
        let value = Number(left[key])
        value = (value - BASE_VALUE) * INCREMENTS + BASE_DECIBEL
        left[key] = value
    }

    return {right, left}
}

export const clearTestFrequencyResults = () => {
    const TOTAL_FREQ = 5
    
    for (let freq = 0; freq < TOTAL_FREQ; freq ++) {
        const right_key = `Right_freq_${freq}`
        const left_key = `Left_freq_${freq}`
        sessionStorage.setItem(right_key, '-1')
        sessionStorage.setItem(left_key, '-1')

    }

}