import { Chart, Filler, CategoryScale, LinearScale, PointElement, LineElement, CoreChartOptions, Legend, ScatterController} from 'chart.js';
import ChartDataLabels, {Context} from 'chartjs-plugin-datalabels'
import { Line } from 'react-chartjs-2';
import './areaChart.css'


Chart.register(Filler, CategoryScale, LinearScale, PointElement, LineElement, Legend, ChartDataLabels, ScatterController);

const labels = ['0', '250Hz','500Hz', '1000Hz', '2000Hz','4000Hz','8000Hz', '8500Hz'];
const HEARING_LEVEL_LABEL_POSITION = 4
type propType = {
    right: {x: string, y: number}[],
    left: {x: string, y: number}[]
}

export const StackedAreaChart = ({right, left}: propType) => {
    const data = {
        labels,
        datasets: [
            {
                label: 'Left ear',
                type: 'scatter',
                pointStyle: 'crossRot',
                borderWidth: 2,
                pointBorderColor: 'blue',
                data: left,
                backgroundColor: 'blue',
                pointRadius: 10,
                datalabels: {
                    formatter: function() {
                        return ''
                    }
                }
            },
            {
                label: 'Right ear',
                type: 'scatter',
                pointStyle: 'circle',
                data: right,
                backgroundColor: 'red',
                pointRadius: 10,
                datalabels: {
                    formatter: function() {
                        return ''
                    }
                }    
            },
            {
                fill: true,
                data: [25, 25, 25, 25, 25, 25, 25, 25],
                backgroundColor: 'rgba(197, 224, 180, 1)',  
                labels: 'Normal',
                label: 'Normal',
                datalabels: {
                    align: 'top',
                    offset: 30,
                    font: {
                        size: '18'
                    },
                    formatter: function(_value: string, context: Context) {
                        if (context.dataIndex !== HEARING_LEVEL_LABEL_POSITION) {
                            return null
                        }
                        //@ts-ignore
                        return context.dataset.labels
                    }
                }
            },
            {
                fill: true,
                data: [35, 35, 35, 35, 35, 35, 35, 35],
                backgroundColor: 'rgba(255, 255, 0, 1)',
                labels: 'Mild',
                label: 'Mild',
                datalabels: {
                    align: 'top',
                    offset: 0,
                    font: {
                        size: '18'
                    },
                    formatter: function(_value: string, context: Context) {
                        if (context.dataIndex !== HEARING_LEVEL_LABEL_POSITION) {
                            return null
                        }
                        //@ts-ignore
                        return context.dataset.labels
                    }
                }
            },
            {
                fill: true,
                data: [60, 60, 60, 60, 60, 60, 60, 60],
                backgroundColor: 'rgba(248, 203, 173, 1)',
                labels: 'Moderate',
                label: 'Moderate',
    
                datalabels: {
                    align: 'top',
                    offset: 30,
                    font: {
                        size: '18'
                    },
                    formatter: function(_value: string, context: Context) {
                        if (context.dataIndex !== HEARING_LEVEL_LABEL_POSITION) {
                            return null
                        }
                        //@ts-ignore
                        return context.dataset.labels
                    }
                }
            },
            {
                fill: true,
                data: [70, 70, 70, 70, 70, 70, 70, 70],
                backgroundColor: 'rgba(255, 0, 0, .4)',
                labels: 'Moderately Severe',
                label: 'Moderately Severe',
    
                datalabels: {
                    align: 'top',
                    offset: 0,
                    font: {
                        size: '18'
                    },
                    formatter: function(_value: string, context: Context) {
                        if (context.dataIndex !== HEARING_LEVEL_LABEL_POSITION) {
                            return null
                        }
                        //@ts-ignore
                        return context.dataset.labels
                    }
                }
                
            },
            
    
        ]
    }
    
    //@ts-ignore
    const options: CoreChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        scales: {
            x: {
                position: 'top',
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    color: 'rgba(0, 0, 0, 0.3)',
                    z: 1
                },
                title: {
                    text: 'Frequencies (Hz)',
                    display: true
                }
            },
            
            y: {
                
                reverse: true,
                min: 0,
                max: 70,
                ticks: {
                    stepSize: 5
                },
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    color: 'rgba(0, 0, 0, 0.3)',
                    z: 1
                },
                title: {
                    display: true,
                    text: 'Decibels (dB)'
                }
            
            }
        },
        plugins: {
            legend: {
                display: true,
                align: 'center',
                labels: {
                    //@ts-ignore
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    filter: (item: unknown, context: Context) => {
                        //@ts-ignore
                        if (item.text === 'Left ear' || item.text === 'Right ear'){
                            return item
                        }
                    },
                    //@ts-ignore
                    usePointStyle: true
                }
            }
        }
        
    }

    
    return <div className='chart-container'>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Line options={options} data={data} id='hearing_classification'/>
    </div> 

}
