import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import axios from "axios";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployee, setFilterdEmployee] = useState([]);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    const filterd = employees.filter((employee) =>
      employee.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilterdEmployee(filterd);
  }, [searchQuery, employees]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/employees")
      .then((res) => {
        // API returns { success: true, data: [...] }
        const arr = Array.isArray(res.data?.data) ? res.data.data : [];
        setEmployees(arr);
        console.log(arr);
      })
      .catch(() => {
        console.log("error while getting data");
      });
  }, []);

  const onDeleteEmployee = (id) => {
    axios
      .delete(`http://localhost:4000/api/employees/${id}`)
      .then(() => {
        // window.location.reload();
        setEmployees(employees.filter((employee) => employee._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const employeeList =
    filteredEmployee.length === 0
      ? "no employees found"
      : filteredEmployee.map((employee, index) => (
          <EmployeeCard
            key={index}
            employee={employee}
            onDelete={onDeleteEmployee}
          />
        ));
  return (
    <div className="show_Employeelist">
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="search employees"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="list">{employeeList}</div>
      </div>
    </div>
  );
};

export default EmployeeList;
