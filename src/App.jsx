import { Route, Routes } from "react-router-dom";
import Update from "./components/Update";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/update/:id" element={<Update />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/dashboard" element={<EmployeeDashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
