import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    photo: setSelectedFile,
    gender: "male",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = async (e) => {
    try {
      const file = e.target.files[0];
      const data = await uploadImageToCloudinary(file);
      setPreviewUrl(data.url);
      setSelectedFile(data.url);
      setFormData({
        ...formData,
        photo: data.url,
      });
    } catch (err) {
      console.log("error in handling the image :", err);
    }
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      toast.error(error.message || "Failed to register"); // Use error.message if available, or a default message
      setLoading(false);
    }
  };
  return (
    <section className="px-5 xl:px-0 my-10">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* sing up form */}
          <div className=" bg-purpleColor p-10">
            <h3
              className="text-headingColor text-[22px] leading-9
            font-bold mb-10"
            >
              Create an <span className="text-primaryColor">Account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="md:flex md:items-center mb-6">
                <div className="ml-5 w-32">
                  <label
                    className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="name"
                  >
                    Full Name :
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="FullName"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>
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

              <div className="md:flex md:items-center mb-6">
                <div className="ml-5 w-32">
                  <label
                    className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="gender"
                  >
                    Gender :
                  </label>
                </div>
                <ul className="items-center w-2/3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                    <div className="flex items-center ps-3">
                      <input
                        type="radio"
                        id="patient"
                        name="role"
                        value="patient"
                        checked={formData.role === "patient"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                      />
                      <label
                        htmlFor="petient"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                      >
                        Patient
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 ">
                    <div className="flex items-center ps-3">
                      <input
                        type="radio"
                        id="role"
                        name="role"
                        value="doctor"
                        checked={formData.role === "doctor"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                      />
                      <label
                        htmlFor="female"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                      >
                        Doctor
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="ml-5 w-32">
                  <label
                    className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="gender"
                  >
                    Gender :
                  </label>
                </div>
                <ul className="items-center w-2/3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                    <div className="flex items-center ps-3">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                      />
                      <label
                        htmlFor="male"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                      >
                        Male
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                    <div className="flex items-center ps-3">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                      />
                      <label
                        htmlFor="female"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                      >
                        Female
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 sm:border-b-0">
                    <div className="flex items-center ps-3">
                      <input
                        type="radio"
                        id="others"
                        name="gender"
                        value="others"
                        checked={formData.gender === "others"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                      />
                      <label
                        htmlFor="others"
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                      >
                        Others
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <div className="ml-5 w-32">
                  <label
                    className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="photo"
                  >
                    Photo :
                  </label>
                </div>
                {formData?.photo && (
                  <figure
                    className="w-[60px] h-[60px] rounded-full border-2
              border-solid  flex items-center justify-center"
                  >
                    <img
                      src={formData?.photo}
                      alt=""
                      className="w-full
                  rounded-full object-fill"
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileInputChange}
                    id="customFile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center
                    px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                    text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-semibold
                    rounded-lg truncate cursor-pointer"
                  >
                    {selectedFile ? "Updated Photo" : "Upload Photo"}
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white
              text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  {loading ? <HashLoader size={35} color="#fff" /> : "Sign Up"}
                </button>
              </div>

              <p className="mt-5 text-black text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-white font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
