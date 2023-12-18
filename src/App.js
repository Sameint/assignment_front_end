// Dashboard.js
import React, { useState, useEffect } from 'react';
import EmployeeList from './employee/EmployeeList';
import EmployeeDetails from './employee/EmployeeDetails';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    // Fetch data from API on component mount
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (employeeId) => {
    // Update state to remove the selected employee
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== employeeId)
    );

    // Clear selected employee details
    setSelectedEmployee(null);
  };

  const handleEdit = (employeeId) => {
    // Handle edit functionality (if needed)
    console.log(`Edit employee with ID: ${employeeId}`);
  };

  const handleCardClick = (employeeId) => {
    // Find the selected employee
    const employee = employees.find((employee) => employee.id === employeeId);
    setSelectedEmployee(employee);
  };

  return (
    <div className="dashboard">
      <input type="text" placeholder="Search by ID" />
      <button>Search</button>

      <EmployeeList
        employees={employees}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onClick={handleCardClick}
      />

      {selectedEmployee && <EmployeeDetails employee={selectedEmployee} />}
    </div>
  );
};

export default App;
