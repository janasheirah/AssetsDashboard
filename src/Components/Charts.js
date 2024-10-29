import React from 'react';
import Plot from 'react-plotly.js'
import { Link } from 'react-router-dom';

const Charts = () => {
    return (
        <div className="container">
            <div className="top-bar">
                <Link to="/" className="back-button">Back to Dashboard</Link>
                <h1>Analytics</h1>
            </div>
            <div className="charts">
            <Plot
                data={[
                    { x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], y: [30, 40, 50, 20, 40, 30, 60, 50], type: 'bar', name: 'Assets Under Maintenance' },
                    { x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], y: [25, 35, 45, 30, 50, 35, 55, 45], type: 'bar', name: 'Assets in Use' },
                ]}
                layout={{ title: 'Monthly Analytics', barmode: 'group' }}
                />
                {/* Add more charts here */}
            </div>
        </div>
    );
};

export default Charts;