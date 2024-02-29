import { StackedAreaChart } from "../../components/charts/areaChart"
import { hearingFrequenciesData } from "../../lib/utils"
import { Button } from "../../components/button/Button"
import HearingCapability from "../../components/hearing-capability/HearingCapability"
import hearingAidImg from "../../assets/hearing_aid_1.png"
import './test-result.css'

const TestResults = () => {
    
    const labels = ['500Hz', '1000Hz', '2000Hz','4000Hz','8000Hz', '8500Hz'];
    
    const hearingTestData = hearingFrequenciesData()
    
    const right = Object.values(hearingTestData.right).map((val, idx) => {
        return {x: labels[idx], y: Number(val)}
    })
    const left = Object.values(hearingTestData.left).map((val, idx) => {
        return {x: labels[idx], y: Number(val)}
    })

    const calculateHearingScore = (data: typeof right) => {
        return data.reduce((acc, curr, idx, array) => {
            acc += curr.y
            if (idx === array.length - 1){
                return acc / array.length
            } else {
                return acc
            }
        }, 0)
    }

   
    const hearingCapability = (hearingScore: number) => {
        if (hearingScore <= 25) {
            return 'normal'
        } else if (hearingScore > 25 && hearingScore <= 35) {
            return 'mild'
        } else if (hearingScore > 35 && hearingScore <= 64) {
            return 'moderate'
        } else {
            return 'severe'
        }
    }

    const rightEarCapability = hearingCapability(calculateHearingScore(right))
    const leftEarCapability = hearingCapability(calculateHearingScore(left))
    return <div className="chart">
            <div className="container">
                <h1 className="headline text-centered">Audiogram</h1>
            </div>
            <StackedAreaChart right={right} left={left}/>
            <div className="container ">
                <div className="capability capability-wrapper">
                    <h1 className="headline text-centered" >Right Ear</h1>
                    <HearingCapability state={rightEarCapability}/>
                </div>
                <div className="capability capability-wrapper">
                    <h1 className="headline text-centered">Left Ear</h1>
                    <HearingCapability state={leftEarCapability}/>
                </div>
                {rightEarCapability !== 'normal' || leftEarCapability !== 'normal' ? <div className="capability-wrapper">
                    <p className="text text-dark cap__text">
                    More recently, research is demonstrating the need to urgently intervene when hearing loss is indicated. Research has shown a strong relationship between hearing loss that is not treated and cognitive decline. This means that if you do not treat your hearing loss with hearing aids, than it can lead to memory problems, problems with balance, focus, comprehension, attention, concentration and much more. In addition, newer research has recently published that hearing aids have been proven to slow the affects of cognitive decline immediately! 
                    </p>
                    <p className="text text-dark cap__text">So why not keep your brain strong and your mind healthy? It’s easy to hear better.</p>
                    <p className="text text-dark cap__text">Eara Explore Li+ are the answer. Eara Explore Li+ are the first OTC AI hearing aids on the market. These little hearing aids are small, and designed for clarity. New AI technology and dome construction allows for new features that are better than ever for fit and sound quality. Just like the $4000 hearing aids, the open fit style is also found in Eara Explore Li+. This gives the user a natural, crystal clear sound quality with only the push of a button. The user simply takes a 2 minute hearing test, Eara Explore Li+ programs themselves and then the user can make independent adjustments of one ear or both ears at any frequency. Read more about them here!</p>
                    </div> : null}
                <div className="hearing-aid-wrapper">
                    <img src={hearingAidImg} alt="" className="hearing-aid-img"/>
                    <Button className="btn-primary-rounded btn-md">Shop</Button>
                </div>
            </div>
        </div>
}

export default TestResults