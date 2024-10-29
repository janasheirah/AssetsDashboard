import React from 'react'
import { Link } from 'react-router-dom'
import Plot from 'react-plotly.js'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MdPeople, MdSettings, MdBuild, MdUpdate, MdInsertChart } from "react-icons/md";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* <div className="icon-container">
                <ArrowBackIcon style={{ fontSize: '2rem', cursor: 'pointer', color: '#005F87' }} />
            </div> */}
            <div className="icon-container-back">
                {/* Back Icon */}
                <span className="back-arrow">&#x2190;</span>
                <h1 className="dashboard-heading">Dashboard</h1>
            </div>
             <div className="dashboard-cards">
                <div className="card">
                    <div className="card-content">
                        <h2>Total Users</h2>
                        <p>53,000</p>
                    </div>
                    <div className="icon-container">
                        <MdPeople className="card-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Total Assets</h2>
                        <p>8,300</p>
                    </div>
                    <div className="icon-container">
                        <MdSettings className="card-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Assets in Use</h2>
                        <p>2,100</p>
                    </div>
                    <div className="icon-container">
                        <MdBuild className="card-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Assets Under Maintenance</h2>
                        <p>2,500</p>
                    </div>
                    <div className="icon-container">
                        <MdUpdate className="card-icon" />
                    </div>
                </div>
            </div>


            <div className="bar-charts-container">
                <div className="analytics-bar">
                <Plot
                    data={[
                        { x: ['Laptops', 'Screens', 'PowerBanks', 'Keyboards', 'Headsets', 'Mouses', 'Servers', 'PC'], y: [30, 40, 50, 20, 40, 30, 60, 50], type: 'bar', name: 'Spare Assets', marker: { color: '#84E3B9' }},
                        { x: ['Laptops', 'Screens', 'PowerBanks', 'Keyboards', 'Headsets', 'Mouses', 'Servers', 'PC'], y: [25, 35, 45, 30, 50, 35, 55, 45], type: 'bar', name: 'Total Assets', marker: { color: '#0A9B00' }},
                    ]}
                    layout={{ title: 'Analytics', barmode: 'group', autosize: false, width: 1762, heigh: 450 }}
                />
                </div>
            </div>

            <div className="pie-charts-container">
            <div className="pie-chart">
                <Plot
                    data={[
                        { labels: ['Laptops', 'Screens', 'Powerbanks', 'Keyboards', 'Headsets', 'Mouses', 'Servers'], values: [30, 40, 50, 20, 40, 30, 60], type: 'pie', name: 'Asset Distribution' }
                    ]}
                    layout={{ title: 'Asset Distribution', autosize: false, width: 654, heigh: 295 }}
                />
            </div>
            <div className="pie-chart-asset-status">
                <Plot
                    data={[
                        { labels: ['Assigned', 'Spare', 'In Maintenance', 'Active'], values: [40, 25, 5, 30], type: 'pie', name: 'Asset Distribution' }
                    ]}
                    layout={{ title: 'Asset Status', autosize: false, width: 654, heigh: 295 }}
                />
            </div>
            <div className="pie-chart-asset-expiry">
                <Plot
                    data={[
                        { labels: ['Replacement', 'Not Replacement'], values: [80,20], type: 'pie', name: 'End Dates for Laptop' }
                    ]}
                    layout={{ title: 'End Dates for Laptops', autosize: false, width: 425, heigh: 295 }}
                />
            </div>

            </div>
        </div>
    );
  };

const Card = ({ title, value, icon}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-title">{title}</div>
                {value && <div className="card-value">{value}</div>}
            </div>
            <div className="card-icon">{icon}</div>
        </div>
    );
};

export default Dashboard;