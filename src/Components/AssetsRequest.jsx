import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AssetsRequest.css';

const AssetsRequest = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddRequest = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="assets-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Link to="/" className="sidebar-item">Home</Link>
        {/* Other Sidebar Links */}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <Link to="/" className="back-button">&#8592; Back</Link>
          <h1>Assets Requests</h1>
          <button className="add-request-btn" onClick={handleAddRequest}>+ Add Request</button>
        </div>

        {/* Search Bar */}
        <input type="text" className="search-bar" placeholder="Type to Search" />

        {/* Table */}
        <div className="table">
          {/* Render your table here */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Asset Category</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example data rows */}
              <tr>
                <td>1</td>
                <td>Momen</td>
                <td>Mostafa</td>
                <td>momenmostafa585@gmail.com</td>
                <td>01119738864</td>
                <td>Manager</td>
                <td>Laptop</td>
                <td>12 Jan 2023</td>
                <td className="status completed">Completed</td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>

        {/* Popup for Add Request */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Add Asset Request</h2>
              <form>
                {/* Add form fields here */}
                <select name="catefory" id="category">
                  <option disabled selected value> -- Select a category -- </option>	
                  <option value="Laptop">Laptop</option>
                  <option value="Headset">Headset</option>
                  <option value="Powerbank">Powerbank</option>
                  <option value="Keyboard">Keybaord</option>
                </select>
                <button type="button" onClick={closePopup}>Close</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetsRequest;
