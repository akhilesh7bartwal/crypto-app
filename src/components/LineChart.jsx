import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    } from 'chart.js';
import { Line } from "react-chartjs-2";
import {Col,Row, Typography} from 'antd';
import millify from "millify";

const {Title} = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) =>{
    console.log(coinHistory)
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i=0; i< coinHistory?.data?.history?.length; i++){
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());   
    }

    const data={
        labels: coinTimestamp,
        datasets:[
            {
                label:'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '0071bd'
            }
        ]
    };

    const options={
        scales: {
            yAxes: [
                {
                    ticks:{
                        beginAtZero: true
                    }
                }
            ]
        }
    };
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip,
        Legend
        );
    return(
        <>
            <Row className="chart-header">
                <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                    <Title level={5} className='current-price'>Current {coinName} Price: $ {millify(currentPrice)}</Title>
                </Col>
            </Row>
            <Line data={data} options={options}/>
        </>
    )
}
export default LineChart