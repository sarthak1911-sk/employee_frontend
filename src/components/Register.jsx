import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [RegisterForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegisterForm((old) => ({ ...old, [name]: value }));
  };

  const Register = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://employee-backend-deploy.onrender.com/register",
        RegisterForm
      )
      .then((response) => {
        if (response.data) {
          navigate("/login");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch(() => alert("Something went wrong"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md transform hover:scale-[1.02] transition-transform duration-300">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
          Create Account
        </h2>

        <form onSubmit={Register} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={RegisterForm.name}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={RegisterForm.email}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={RegisterForm.password}
              onChange={inputHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md transition-all duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already registered?{" "}
          <Link
            to={"/login"}
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        ⬅ Home
      </button>
    </div>
  );
}

export default Register;
