import testAudio from '../assets/audio/audio-test.mp3'
import freq_500_Hz from '../assets/audio/freq-500.mp3'
import freq_1000_Hz from '../assets/audio/freq-1000.mp3'
import freq_2000_Hz from '../assets/audio/freq-2000.mp3'
import freq_4000_Hz from '../assets/audio/freq-4000.mp3'
import freq_8000_Hz from '../assets/audio/freq-8000.mp3'

const frequencies = {
    freq_5: freq_500_Hz,
    freq_10: freq_1000_Hz,
    freq_20: freq_2000_Hz,
    freq_40: freq_4000_Hz,
    freq_80: freq_8000_Hz
}

export type frequncyRange = keyof typeof  frequencies
class Sound {
    audioContext: AudioContext
    sourceNode: AudioBufferSourceNode
    isPlaying: boolean
    BASE_VOL = 0.00007
    DB_INCREMENTS = 5
    constructor() {
        this.audioContext = new (window.AudioContext)
        this.sourceNode = this.audioContext.createBufferSource()
        this.isPlaying = false
    }
    
    async play(side: 'Left'| 'Right') {
        await this.initAudio(testAudio)
        const pan = this.setPanning(side)
        const gainNode = this.audioContext.createGain()
        this.sourceNode.loop = true
        this.sourceNode.connect(pan).connect(gainNode).connect(this.audioContext.destination)
        return new Promise<void>((resolve) => {
            if (this.audioContext.state === 'running' && !this.isPlaying){
                resolve()
            }
            gainNode.gain.value = this.BASE_VOL * 30
            this.sourceNode.start()
            this.isPlaying = true
        })
    }

    pause() {
        if (this.sourceNode.buffer && this.isPlaying){
            this.sourceNode.stop()
            this.sourceNode = this.audioContext.createBufferSource()
            this.isPlaying = false
        }
    }

    async hearingTest(side: 'Left' | 'Right', freq: frequncyRange, gain: number) {
        const file = frequencies[freq]
        await this.initAudio(file)
        const pan = this.setPanning(side)
        const gainNode = this.audioContext.createGain()
        this.sourceNode.loop = true
        this.sourceNode.connect(pan).connect(gainNode).connect(this.audioContext.destination)
        const increase = gain * this.DB_INCREMENTS
        const linearIncrease = Math.pow(10, increase/ 20)
        let vol = this.BASE_VOL * linearIncrease
        
    
        return new Promise<void>((resolve) => {
            if (this.audioContext.state === 'running' && !this.isPlaying){
                resolve()
            }
            if (gain === 0) vol = 0
            gainNode.gain.value = vol
            
            this.sourceNode.start()
            this.isPlaying = true
        })
       
    } 

    async initAudio(file:string) {
        const resp = await fetch(file)
        const arrayBuffer = await resp.arrayBuffer()
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer)
        this.sourceNode = this.audioContext.createBufferSource()
        this.sourceNode.buffer = audioBuffer
    }

    setPanning(side: 'Left' | 'Right') {
        const panValue = side === 'Left' ? -1 : 1
        const pan = new StereoPannerNode(this.audioContext, {pan: panValue})
        return pan
    }
}

const sound = new Sound()

export default sound
