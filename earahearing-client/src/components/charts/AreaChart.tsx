import { Chart, Filler, CategoryScale, LinearScale, PointElement, LineElement, CoreChartOptions, Plugin } from 'chart.js';
import { Line  } from 'react-chartjs-2';


Chart.register(Filler, CategoryScale, LinearScale, PointElement, LineElement);

const labels = ['0', '500Hz', '1000Hz', '2000Hz', '4000Hz', '8000Hz'];

const data = {
    labels,
    datasets: [
        {
            fill: true,
            data: [25, 25, 25, 25, 25,25],
            backgroundColor: 'rgba(197, 224, 180, 1)',    
        },
        {
            fill: true,
            data: [35, 35, 35, 35, 35,35],
            backgroundColor: 'rgba(255, 255, 0, 1)'
        },
        {
            fill: true,
            data: [60, 60, 60, 60, 60, 60],
            backgroundColor: 'rgba(248, 203, 173, 1)'
        },
        {
            fill: true,
            data: [65, 65, 65, 65, 65, 65],
            backgroundColor: 'rgba(255, 0, 0, 1)'
            
        }
    ]
}

const plugins: Plugin [] = [{
    id: 'hearing_classification',
    afterDraw: (chart: Chart<'line'>) => {
        
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        
        ctx.globalCompositeOperation = 'destination-over';
        const xAxis = chart.scales["x-axis-0"];
        const yAxis = chart.scales["y-axis-0"]
        yAxis.ticks.forEach((v, i) => {
            const y = yAxis.getPixelForTick(i);
            console.log(y)
            ctx.save();
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)'; // Adjust grid line color and opacity
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(chartArea.left, y);
            ctx.lineTo(chartArea.right, y);
            ctx.stroke();

        })
        
        ctx.restore();
    },
}]



const options: CoreChartOptions = {
    responsive: true,
    scales: {
        x: {
            position: 'top',
        },
        y: {
            reverse: true,
            min: 0,
            max: 65,
            ticks: {
                stepSize: 5
            }
        
        }
    }, 
    plugins: plugins  
}
const StackedAreaChart = () => {
    return <Line options={options} data={data} id='hearing_classification'/>

}

export default StackedAreaChart