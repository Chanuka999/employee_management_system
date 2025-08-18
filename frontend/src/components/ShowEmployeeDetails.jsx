import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ShowEmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/employees/${id}`)
      .then((res) => {
        setEmployee(res.data?.data || {});
      })
      .catch(() => {
        console.log("Error from showEmployee details");
      });
  }, [id]);

  const TableItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>ID</td>
            <td>{employee.employeeId}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Name</td>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Address</td>
            <td>{employee.address}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Nic</td>
            <td>{employee.nic}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <div className="shopEmployeeDetails">
      <div className="col-md-10 m-auto">
        <br />
        <Link to={"/"} className="btn btn-outline-danger float-right">
          Back to main
        </Link>
      </div>
      <br />
      <div className="col-md-8 m-auto">
        <h1 className="display-6-bold text-center">Employee Details</h1>
        <p className="text-center">This is full detail of employee</p>
        <hr />
        <br />
      </div>

      <div className="col-md-10 m-auto">{TableItem}</div>

      <div className="col-md-6 m-auto">
        <Link
          to={`/updatedetails/${employee._id}`}
          className="btn btn-outline-info btn-lg btn-block d-flex justify-content-center"
        >
          Edit Employee
        </Link>
      </div>
    </div>
  );
};

export default ShowEmployeeDetails;
