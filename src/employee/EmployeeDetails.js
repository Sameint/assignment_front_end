// EmployeeDetails.js
import React from 'react';

const EmployeeDetails = ({ employee }) => {
  return (
    <div className="employee-details">
      <h2>{employee.employee_name}</h2>
      <p>ID: {employee.id}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
    </div>
  );
};

export default EmployeeDetails;
