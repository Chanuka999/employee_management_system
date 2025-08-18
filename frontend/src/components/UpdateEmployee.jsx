import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateEmployee = () => {
  const [employee, setEmployee] = useState({
    employeeId: "",
    name: "",
    address: "",
    nic: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:4000/api/employees/${id}`)
      .then((res) => {
        // Backend returns { success: true, data: employee }
        const emp = res.data && res.data.data ? res.data.data : {};
        console.log("Fetched employee:", emp);
        setEmployee({
          employeeId: emp.employeeId || "",
          name: emp.name || "",
          address: emp.address || "",
          nic: emp.nic || "",
        });
      })
      .catch((err) => {
        console.log(
          "Error from update Employee",
          err.response ? err.response.data : err
        );
      });
  }, [id]);

  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      employeeId: employee.employeeId,
      name: employee.name,
      address: employee.address,
      nic: employee.nic,
    };
    axios
      .put(`http://localhost:4000/api/employees/${id}`, data)
      .then((res) => {
        navigate(`/showdetails/${id}`);
      })
      .catch((err) => {
        console.log("error in update", err);
      });
  };
  return (
    <div>
      <div className="updateEmployee">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Employee List
              </Link>
            </div>
          </div>

          <div className="col-d-8 m-auto">
            <form noValidate onSubmit={onSubmit}>
              <div className="form-qroup">
                <label htmlFor="title">Employee ID</label>
                <input
                  type="text"
                  placeholder="title of employee"
                  name="employeeId"
                  className="form-control"
                  value={employee.employeeId}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-qroup">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="form-control"
                  value={employee.name}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-qroup">
                <label htmlFor="title">address</label>
                <input
                  type="text"
                  placeholder="address"
                  name="address"
                  className="form-control"
                  value={employee.address}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-qroup">
                <label htmlFor="title">Nic</label>
                <input
                  type="number"
                  placeholder="nic"
                  name="nic"
                  className="form-control"
                  value={employee.nic}
                  onChange={onChange}
                />
              </div>
              <br />
              <br />

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
