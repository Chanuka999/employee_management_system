import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

router.get("/text", (req, res) => {
  res.send("Employee routes working");
});

router.post("/", async (req, res) => {
  const employee = req.body;

  const newEmployee = new Employee(employee);
  try {
    await newEmployee.save();
    res.status(200).json({ success: true, data: newEmployee });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const employee = req.body;

  try {
    const updateEmployee = await Employee.findByIdAndUpdate(id, employee, {
      new: true,
    });
    res.status(200).json({ success: true, data: updateEmployee });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "delete successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: "data not deleted" });
  }
});

export default router;
