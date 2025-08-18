import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import InsertEmployee from "./components/InsertEmployee";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowEmployeeDetails from "./components/ShowEmployeeDetails";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/insert" element={<InsertEmployee />} />
          <Route path="/showdetails/:id" element={<ShowEmployeeDetails />} />
          <Route path="/updatedetails/:id" element={<UpdateEmployee />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
