import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext"; // Updated import statement
import HashLoader from "react-spinners/HashLoader.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, "login data");

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      toast.error(error.message || "Failed to register"); // Use error.message if available, or a default message
      setLoading(false);
    }
  };
  return (
    <section className="my-10">
      <div
        className="w-full max-w-[570px] mx-auto
      rounded-lg shadow-md p-10 bg-purpleColor"
      >
        <h3
          className="text-headingColor text-[30px] leading-9
        font-bold mb-10 text-center"
        >
          Hello <span className="text-white">Welcome</span> Back
        </h3>
        <form action="" onSubmit={submitHandler}>

          <div className="md:flex md:items-center mb-6">
            <div className="ml-5 w-32">
              <label
                className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
                <div className="ml-5 w-32">
                  <label
                    className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="password"
                  >
                    Password :
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>

          <div className="mt-7 flex flex-row justify-center">
            <button
              disabled={loading && true}
              type="submit"
              className="w-1/3  text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-semibold
               rounded-lg px-4 py-3"
            >
              {loading ? <HashLoader size={35} color="#fff" /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-black text-center">
            Don't have an account?
            <Link to="/register" className="text-white font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
