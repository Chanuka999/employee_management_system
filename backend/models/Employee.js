import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EmployeeShema = new Schema({
  employeeId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  nic: {
    type: String,
  },
});

const Employee = mongoose.model("Employee", EmployeeShema);

export default Employee;
