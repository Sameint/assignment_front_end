// src/components/EmployeeCard.js
import React from 'react';

const EmployeeCard = ({ employee, onDelete, onEdit, onSelect }) => {
  const { id, employee_name, employee_salary, employee_age } = employee;

  return (
    <div className="card" onClick={() => onSelect(id)}>
      <h3>{employee_name}</h3>
      <p>ID: {id}</p>
      <p>Salary: {employee_salary}</p>
      <p>Age: {employee_age}</p>
      <button onClick={() => onEdit(employee)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default EmployeeCard;
