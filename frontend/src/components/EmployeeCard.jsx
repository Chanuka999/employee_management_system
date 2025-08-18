import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
  const onDeleteEmployee = (id) => {
    axios
      .delete(`http://localhost:4000/api/employees/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://png.pngtree.com/png-clipart/20240310/original/pngtree-working-employee-3d-character-illustration-png-image_14552818.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {employee.employeeId}
          <br />
          {employee.address}
          <br />
          {employee.nic}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDeleteEmployee(employee._id)}>
          Delete
        </Button>
        <Link size="small" to={`/showdetails/${employee._id}`}>
          Display
        </Link>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
