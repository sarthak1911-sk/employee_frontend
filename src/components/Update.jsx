import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    email: "",
    password: "",
  });

  const input = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const update = (e) => {
    e.preventDefault();
    axios
      .put("https://employee-backend-deploy.onrender.com/update", employee)
      .then(() => {
        alert("Employee updated successfully!");
        navigate("/dashboard");
      })
      .catch(() => alert("Error updating employee"));
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Update Employee</h2>

      <form
        onSubmit={update}
        className="space-y-4 w-80 bg-white p-6 rounded-xl shadow-md"
      >
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={input}
          placeholder="Enter Name"
          className="border p-2 w-full rounded"
        />

        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={input}
          placeholder="Enter Email"
          className="border p-2 w-full rounded"
        />

        <input
          type="password"
          name="password"
          value={employee.password}
          onChange={input}
          placeholder="Enter Password"
          className="border p-2 w-full rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Update
        </button>

        <Link
          to={"/dashboard"}
          className="block text-center bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg w-full"
        >
          Back to Dashboard
        </Link>
      </form>
    </div>
  );
}

export default Update;
