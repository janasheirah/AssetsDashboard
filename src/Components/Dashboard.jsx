import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Plot from 'react-plotly.js'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MdPeople, MdSettings, MdBuild, MdUpdate, MdInsertChart, MdComputer, MdChecklist, MdCheckBox, MdCheck } from "react-icons/md";
import apiService from './../apiService.js';
import './Dashboard.css'
import { Laptop } from '@mui/icons-material';
import './AssetTable.css'; // Import your CSS file




const useDashboardData = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalAssets, setTotalAssets] = useState(0);
    const [assetsInUse, setAssetsInUse] = useState(0);
    const [assetsUnderMaintenance, setAssetsUnderMaintenance] = useState(0);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const totalUsersData = await apiService.getTotalUsersCount();
                const totalAssetsData = await apiService.getTotalAssetsCount();
                const inUseData = await apiService.getAssignedAssetsCount();
                const assetsUnderMaintenanceData = await apiService.getAssetsUnderMaintenanceCount();
                setTotalUsers(totalUsersData);
                setTotalAssets(totalAssetsData);
                setAssetsInUse(inUseData);
                setAssetsUnderMaintenance(assetsUnderMaintenanceData);
            } catch (error) {
    
            } finally {
            
            }
        };

        fetchDashboardData();
    }, []);

    return {
        totalUsers,
        totalAssets,
        assetsInUse,
        assetsUnderMaintenance
    };
};




const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('charts'); // Default to 'charts' tab
    const data = {
        yearData:{
        2022: {
            spareAssets: [30, 40, 50, 20, 40, 30, 60, 50],
            totalAssets: [25, 35, 45, 30, 50, 35, 55, 45],
            ReplacementData: [80,20],
            Distribution:[30,20,10,5,15,10,10],
        },
        2023: {
            spareAssets: [28, 42, 48, 25, 45, 32, 58, 48],
            totalAssets: [24, 38, 44, 28, 48, 33, 53, 42],
            ReplacementData: [30,70],
            Distribution:[35,15,5,10,10,10,15],
        },
    },
    categoryData:{
        Laptops:[10,20,40,30],
        Screens:[20,20,30,30],
        PowerBanks:[30,30,30,10],
        Keyboards:[40,40,10,10],
        Headsets:[40,40,15,5],
        Mouses:[60,10,10,20],
        Servers:[85,5,5,5],
        PC:[50,20,10,20],
    }
    };
     // Categories for x-axis labels
     const categories = ['Laptops', 'Screens', 'PowerBanks', 'Keyboards', 'Headsets', 'Mouses', 'Servers', 'PC'];
     const category = Object.keys(data.categoryData);
     const year = Object.keys(data.yearData);
     // State to manage the selected year
     const [selectedYear, setSelectedYear] = useState(2022);
     const [selectedCategory, setSelectedCategory] = useState("Laptops");

     // Handle year selection
     const handleYearChange = (event) => {
         setSelectedYear(Number(event.target.value));
     };
     const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
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
            
            <div className="icon-container-back">
                <span className="back-arrow">&#x2190;</span>
                <h1 className="dashboard-heading">Dashboard</h1>
            </div>
            <div className="tabs-header">
                 <button 
                   className={`tab-button ${activeTab === 'charts' ? 'active' : ''}`} 
                   onClick={() => setActiveTab('charts')}
                 >            
                 Charts
                 </button>
                 <button 
                   className={`tab-button ${activeTab === 'assets' ? 'active' : ''}`} 
                   onClick={() => setActiveTab('assets')}
                 >
                 Assets
                 </button>
             </div>
             {activeTab === 'charts' && (
                <div className="charts-content">
                    <h2>Charts Section</h2>
                    {/* Charts section content */}
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
                        <MdComputer className="card-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Assets in Use</h2>
                        <p className="card-stats">{assetsInUse.toLocaleString()}</p>
                    </div>
                    <div className="icon-container">
                        <MdCheckBox className="card-icon" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="card-title">Assets Under Maintenance</h2>
                        <p className="card-stats">2,500</p>
                    </div>
                    <div className="icon-container">
                        <MdBuild className="card-icon" />
                    </div>
                </div>
                    </div>
            

            <div className="bar-charts-container">
                <div className="chart-title">
                  <h2>Analytics</h2>
             {/* Dropdown to select the year */} 
             <div className="legend-dropdown">
             <select id="Year-filter" className="Year-filter" value={selectedYear} onChange={handleYearChange} >
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                </select> 
                </div>
                </div>
                <div className="analytics-bar">
                <Plot
                    data={[
                        { x: categories, y: data.yearData[selectedYear].spareAssets, type: 'bar', name: 'Spare Assets', marker: { color: '#84E3B9' }},
                        { x: categories, y: data.yearData[selectedYear].totalAssets, type: 'bar', name: 'Total Assets', marker: { color: '#0A9B00' }},
                    ]}
                    layout={{ title: 'Analytics', font: { family: 'Poppins', size: 14} , barmode: 'group', autosize: false, width: 1762, heigh: 450 }}
                />
                </div>
            </div>
           
            
            <div className="pie-charts-container">
            <div className="pie-chart">
            {/*<div className="piechart-title">
                 <h2>Asset Distribution</h2>*/}
            <div className="legend-dropdown">
             <select id="Year-filter" className="Year-filter" value={selectedYear} onChange={handleYearChange} >
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                </select> 
                </div>
                {/*</div>*/}

                <Plot
                    data={[
                        { labels: ['Laptops', 'Screens', 'Powerbanks', 'Keyboards', 'Headsets', 'Mouses', 'Servers'], values:data.yearData[selectedYear].Distribution , type: 'pie' }
                    ]}
                    layout={{ title: 'Asset Distribution', font: { family: 'Poppins', size: 14}, autosize: false, width: 654, heigh: 295}}
                />
            </div>
            
            <div className="pie-chart-asset-status">
            {/*<div className="piechart-title">
            <h2>Asset Status</h2>*/}
            <div className="legend-dropdown">
             <select id="Category-filter" className="Category-filter" value={selectedCategory} onChange={handleCategoryChange} >
                    <option value={"Laptops"}>"Laptops"</option>
                    <option value={"Screens"}>"screens"</option>
                    <option value={"PowerBanks"}>"PowerBanks"</option>
                    <option value={"Keyboards"}>"Keyboards"</option>
                    <option value={"Headsets"}>"Headsets"</option>
                    <option value={"Mouses"}>"Mouses"</option>
                    <option value={"Servers"}>"Servers"</option>
                    <option value={"PC"}>"PC"</option>

                </select>        
                </div>
                {/*</div>*/}
                <Plot
                    data={[
                        { labels: ['Assigned', 'Spare', 'In Maintenance', 'Active'], values: data.categoryData[selectedCategory], type: 'pie', name: 'Asset Distribution' }
                    ]}
                    layout={{ title: 'Asset Status', font: { family: 'Poppins', size: 14}, autosize: false, width: 654, heigh: 295 }}
                />
            </div>
            <div className="pie-chart-asset-expiry">
            {/*<div className="piechart-title">
            <h2>End Dates for Laptop</h2>*/}
            <div className="legend-dropdown">
             <select id="Year-filter" className="Year-filter" value={selectedYear} onChange={handleYearChange} >
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                </select> 
                </div>
                {/*</div>*/}
                <Plot
                    data={[
                        { labels: ['Replacement', 'Not Replacement'], values: data.yearData[selectedYear].ReplacementData, type: 'pie', name: 'End Dates for Laptop' }
                    ]}
                    layout={{ title: 'End Dates for Laptops', font: { family: 'Poppins', size: 14}, autosize: false, width: 425, heigh: 295 }}
                />
            </div>
            </div>
            </div>
             )}
                {/* Content for Assets Tab */}
            {activeTab === 'assets' && (
                <div className="assets-content">
                    <h2>Assets Section</h2>
                    <p>Details about assets can be displayed here.</p>
                    <table className="asset-table">
      <thead>
        <tr data-href="#">
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Purchase Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id} data-href="#">
            <td>{index + 1}</td>
            <td>{row.name}</td>
            <td>{row.category}</td>
            <td>{row.brand}</td>
            <td>{row.model}</td>
            <td>{row.purchaseDate}</td>
            <td>
              <span className={`status ${row.status}`}>{row.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
                </div>
            )}
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



    