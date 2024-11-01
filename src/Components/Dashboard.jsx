import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Plot from 'react-plotly.js'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MdPeople, MdSettings, MdBuild, MdUpdate, MdInsertChart } from "react-icons/md";
import apiService from './../apiService.js';
import './Dashboard.css'

const useDashboardData = () => {
    const [assetsInUse, setAssetsInUse] = useState(0);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const inUseData = await apiService.getAssignedAssetsCount();
                setAssetsInUse(inUseData);
            } catch (error) {
    
            } finally {
            
            }
        };

        fetchDashboardData();
    }, []);

    return {
        assetsInUse
    };
};



const Dashboard = () => {
    const { assetsInUse } = useDashboardData();
    const [frames, setFrames] = useState([]);

    useEffect(() => {
        // Define frames to animate bars from 0 to the actual values
        const assetCategories = ['Laptops', 'Screens', 'PowerBanks', 'Keyboards', 'Headsets', 'Mouses', 'Servers', 'PC'];
        const totalAssets = [30, 40, 50, 20, 40, 30, 60, 50];
        const spareAssets = [25, 35, 45, 30, 50, 35, 55, 45];
        const numFrames = 20; // Number of animation steps

        const frames = Array.from({ length: numFrames }, (_, i) => {
            const progress = (i + 1) / numFrames;
            return {
                data: [
                    { y: totalAssets.map(val => val * progress) },
                    { y: spareAssets.map(val => val * progress) }
                ]
            };
        });

        setFrames(frames);
    }, []);


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
                        <h2 className="card-title">Total Users</h2>
                        <p className="card-stats">53,000</p>
                    </div>
                    <div className="icon-container">
                        <MdPeople className="card-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Total Assets</h2>
                        <p className="card-stats">8,300</p>
                    </div>
                    <div className="icon-container">
                        <MdSettings className="card-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Assets in Use</h2>
                        <p className="card-stats">{assetsInUse.toLocaleString()}</p>
                    </div>
                    <div className="icon-container">
                        <MdBuild className="card-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Assets Under Maintenance</h2>
                        <p className="card-stats">2,500</p>
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
                    layout={{ title: 'Analytics', font: { family: 'Poppins', size: 14} , barmode: 'group', autosize: false, width: 1762, heigh: 450 }}
                />
                </div>
            </div>

            <div className="pie-charts-container">
            <div className="pie-chart">
                <Plot
                    data={[
                        { labels: ['Laptops', 'Screens', 'Powerbanks', 'Keyboards', 'Headsets', 'Mouses', 'Servers'], values: [30, 40, 50, 20, 40, 30, 60], type: 'pie', name: 'Asset Distribution' }
                    ]}
                    layout={{ title: 'Asset Distribution', font: { family: 'Poppins', size: 14}, autosize: false, width: 654, heigh: 295}}
                />
            </div>
            <div className="pie-chart-asset-status">
                <Plot
                    data={[
                        { labels: ['Assigned', 'Spare', 'In Maintenance', 'Active'], values: [40, 25, 5, 30], type: 'pie', name: 'Asset Distribution' }
                    ]}
                    layout={{ title: 'Asset Status', font: { family: 'Poppins', size: 14}, autosize: false, width: 654, heigh: 295 }}
                />
            </div>
            <div className="pie-chart-asset-expiry">
                <Plot
                    data={[
                        { labels: ['Replacement', 'Not Replacement'], values: [80,20], type: 'pie', name: 'End Dates for Laptop' }
                    ]}
                    layout={{ title: 'End Dates for Laptops', font: { family: 'Poppins', size: 14}, autosize: false, width: 425, heigh: 295 }}
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