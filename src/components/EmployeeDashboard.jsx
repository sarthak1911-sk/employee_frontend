import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://employee-backend-deploy.onrender.com/getAll")
      .then((response) => setEmployees(response.data))
      .catch(() => console.error("Something went wrong"));
  }, []);

  const del = (id) => {
    axios
      .delete(`https://employee-backend-deploy.onrender.com/delete?id=${id}`)
      .then(() => setEmployees(employees.filter((emp) => emp.id !== id)))
      .catch(() => console.log("Error deleting"));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">
            Employee Dashboard
          </h1>

          {/* ✅ Home Button */}
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all"
          >
            Home
          </button>
        </div>

        {/* Employee Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Sr.No</th>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {employees.length > 0 ? (
                employees.map((emp, index) => (
                  <tr
                    key={emp.id || index}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{emp.id}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {emp.name}
                    </td>
                    <td className="py-3 px-4">{emp.email}</td>
                    <td className="py-3 px-4 space-x-3">
                      <button
                        onClick={() => navigate(`/update/${emp.id}`)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => del(emp.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
