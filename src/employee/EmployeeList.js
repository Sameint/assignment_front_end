// EmployeeList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, onDelete, onEdit, onClick }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
          onEdit={onEdit}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
