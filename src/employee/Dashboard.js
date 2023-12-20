import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [searchId, setSearchId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Function to fetch employee by ID
  const fetchEmployeeById = async () => {
    try {
      const response = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${searchId}`);
      const data = await response.json();
      if (data && data.data) {
        setEmployee(data.data);
      } else {
        setSearchError('Employee not found');
      }
    } catch (error) {
      setSearchError('Error fetching data');
    }
  };

  // Function to handle edit mode
  const handleEdit = () => {
    setEditMode(!editMode);
  };

  // Function to handle name change during edit
  const handleNameChange = (e) => {
    const updatedEmployee = { ...employee, employee_name: e.target.value };
    setEmployee(updatedEmployee);
  };

  // Function to delete employee (simulating frontend delete)
  const handleDelete = () => {
    setEmployee(null); // You can further integrate with a backend API to delete from the database
  };

  return (
    <div>
      <h1>Employee Dashboard</h1>
      
      {/* Search functionality */}
      <div>
        <input 
          type="text" 
          placeholder="Search by ID" 
          value={searchId} 
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={fetchEmployeeById}>Search</button>
      </div>

      {/* Displaying Employee details */}
      {employee && (
        <div>
          <h2>Employee Details</h2>
          <p>ID: {employee.id}</p>
          
          {editMode ? (
            <div>
              <label>
                Employee Name: 
                <input 
                  type="text" 
                  value={employee.employee_name} 
                  onChange={handleNameChange} 
                />
              </label>
            </div>
          ) : (
            <p>Name: {employee.employee_name}</p>
          )}

          <p>Salary: {employee.employee_salary}</p>
          <p>Age: {employee.employee_age}</p>

          {/* Toggle button text based on edit mode */}
          <button onClick={handleEdit}>{editMode ? 'Save' : 'Edit'}</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

      {/* Error message display */}
      {searchError && <p>{searchError}</p>}
    </div>
  );
};

export default Dashboard;
