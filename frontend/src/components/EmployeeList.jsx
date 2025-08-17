import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

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

  const employeeList =
    employees.length === 0
      ? "no employees found"
      : employees.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ));
  return (
    <div className="show_Employeelist">
      <div className="container">
        <div className="list">{employeeList}</div>
      </div>
    </div>
  );
};

export default EmployeeList;
