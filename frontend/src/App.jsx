import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import InsertEmployee from "./components/InsertEmployee";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/insert" element={<InsertEmployee />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
