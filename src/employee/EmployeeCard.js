// EmployeeCard.js
import React from 'react';

const EmployeeCard = ({ employee, onDelete, onEdit, onClick }) => {
  const handleDelete = () => {
    onDelete(employee.id);
  };

  const handleEdit = () => {
    onEdit(employee.id);
  };

  const handleClick = () => {
    onClick(employee.id);
  };

  return (
    <div className="employee-card" onClick={handleClick}>
      <h3>{employee.employee_name}</h3>
      <p>ID: {employee.id}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default EmployeeCard;
