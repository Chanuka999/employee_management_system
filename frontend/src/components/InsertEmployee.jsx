import React, { useState } from "react";
import "./InsertEmployee.css";
import axios from "axios";

const InsertEmployee = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");

  const idHanddler = (event) => {
    setEmployeeId(event.target.value);
  };

  const nameHanddler = (event) => {
    setName(event.target.value);
  };

  const addressHanddler = (event) => {
    setAddress(event.target.value);
  };

  const nicHanddler = (event) => {
    setNic(event.target.value);
  };

  const checkHanddler = (event) => {
    event.preventDefault();

    const newEmployee = {
      employeeId,
      name,
      address,
      nic,
    };

    axios
      .post("http://localhost:4000/api/employees", newEmployee)
      .then(() => {
        alert("employee added");
        setEmployeeId("");
        setName("");
        setAddress("");
        setNic("");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={checkHanddler}>
        <label htmlFor="employeeId">Employee ID:</label>
        <input
          type="text"
          id="employeeId"
          name="employeeId"
          required
          onChange={idHanddler}
          value={employeeId}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={nameHanddler}
          value={name}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          onChange={addressHanddler}
          value={address}
        />

        <label htmlFor="nic">NIC:</label>
        <input
          type="text"
          id="nic"
          name="nic"
          required
          onChange={nicHanddler}
          value={nic}
        />

        <div className="btn-group">
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </div>
      </form>
    </div>
  );
};

export default InsertEmployee;
