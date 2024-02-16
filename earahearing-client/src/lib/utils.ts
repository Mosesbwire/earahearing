
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