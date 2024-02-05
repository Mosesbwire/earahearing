import testAudio from '../assets/audio/audio-test.mp3'
import freq_500_Hz from '../assets/audio/freq-500.wav'
import freq_1000_Hz from '../assets/audio/freq-1000.wav'
import freq_2000_Hz from '../assets/audio/freq-2000.wav'
import freq_4000_Hz from '../assets/audio/freq-4000.wav'
import freq_8000_Hz from '../assets/audio/freq-8000.wav'

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
    constructor() {
        this.audioContext = new (window.AudioContext)
        this.sourceNode = this.audioContext.createBufferSource()
        this.isPlaying = false
    }
    
    async play(side: 'Left'| 'Right') {
        const panValue = side === 'Left' ? -1 : 1
        const resp = await fetch(testAudio)
        const arrayBuffer = await resp.arrayBuffer()
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer)
        this.sourceNode.buffer = audioBuffer
        const pan = new StereoPannerNode(this.audioContext, {pan: panValue})
        this.sourceNode.connect(pan).connect(this.audioContext.destination)
        
        return new Promise<void>((resolve) => {
            if (this.audioContext.state === 'running' && !this.isPlaying){
                resolve()
            }
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

    async hearingTest(side: 'Left' | 'Right', freq: frequncyRange) {
        const panValue = side === 'Left' ? -1 : 1
        const resp = await fetch(frequencies[freq])
        const arrayBuffer = await resp.arrayBuffer()
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer)
        this.sourceNode = this.audioContext.createBufferSource()
        this.sourceNode.buffer = audioBuffer
        const pan = new StereoPannerNode(this.audioContext, {pan: panValue})
        this.sourceNode.connect(pan).connect(this.audioContext.destination)
        const context = this.audioContext
        const source = this.sourceNode

        function decibel(db: number) {
            const gainNode = context.createGain()
            gainNode.gain.value *= Math.pow(10, db/ 20)

            source.connect(gainNode).connect(context.destination)
            source.start()
        }

        return decibel
    }
    
    
}

const sound = new Sound()

export default sound
