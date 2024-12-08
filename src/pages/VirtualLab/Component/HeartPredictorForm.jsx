import { useRef, useState } from "react";
import logo from "../../../assets/images/Dashboard1.png";
import Faq from "../../../components/Faq/Faq";
import heartDiseaseFAQ from "../../../constant/HeartFAQ";
import axios from "axios";
import { GiBubblingFlask } from "react-icons/gi";
import ResultPage from "../../../components/Result";
import HepatitisPreventions from "../../../Precuations/Hepatitis";

const HeartPredictionForm = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    age: 40,
    sex: "male",
    cp: 0,
    trtbps: 120,
    chol: 200,
    fbs: 100,
    restecg: 0,
    thalachh: 150,
    exng: 0,
    oldpeak: 0,
    slp: 1,
    caa: 0,
    thall: 2,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value < 0 ? 0 : value;
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  // Submit form data
  const [result, setResult] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        "http://127.0.0.1:5000/lab/heart  ",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response?.data?.Data?.Probability[0][1]);
      console.log("Form submitted successfully", response.data.Data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const handleClearForm = () => {
    setFormData({
      age: 40,
      sex: "male",
      cp: 0,
      trtbps: 120,
      chol: 200,
      fbs: 100,
      restecg: 0,
      thalachh: 150,
      exng: 0,
      oldpeak: 0,
      slp: 1,
      caa: 0,
      thall: 2,
    });
  };
  const randomNumber = Math.random() * 1.7;
  return (
    <section className="flex flex-row justify-around  px-10">
      <div className="w-3/5 flex flex-col justify-start items-end px-7">
        <div className="flex flex-row justify-center items-center">
          <GiBubblingFlask className="w-16 h-16 text-gray-700" />
          <h1 className="text-4xl font-protest text-gray-700">
            Heart Disease Predictor
          </h1>
          <img src={logo} alt="" className="h-60 z-[10]" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-cardColor text-white p-5 rounded-xl mt-[-40px]"
        >
          <div className="grid grid-cols-2 gap-y-6 w-full">
            <div className="px-3">
              <label htmlFor="Age" className="block">
                Age
                <input
                  type="number"
                  id="Age"
                  name="Age"
                  value={formData.age}
                  onChange={handleChange}
                  min={0}
                  step={1}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>
            <div className="px-3">
              <label htmlFor="gender" className="block">
                Gender
                <select
                  id="gender"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </label>
            </div>
            <div className="px-3">
              <label htmlFor="cp" className="block">
                Chest Pain Type
                <input
                  type="number"
                  id="cp"
                  name="cp"
                  value={formData.cp}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="trtbps" className="block">
                Resting Blood Pressure
                <input
                  type="number"
                  id="trtbps"
                  name="trtbps"
                  value={formData.trtbps}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="chol" className="block">
                Serum Cholesterol
                <input
                  type="number"
                  id="chol"
                  name="chol"
                  value={formData.chol}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="fbs" className="block">
                Fasting Blood Sugar
                <input
                  type="number"
                  id="fbs"
                  name="fbs"
                  value={formData.fbs}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="restecg" className="block">
                Resting Electrocardiographic Results
                <input
                  type="number"
                  id="restecg"
                  name="restecg"
                  value={formData.restecg}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="thalachh" className="block">
                Maximum Heart Rate Achieved
                <input
                  type="number"
                  id="thalachh"
                  name="thalachh"
                  value={formData.thalachh}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="exng" className="block">
                Exercise Induced Angina
                <input
                  type="number"
                  id="exng"
                  name="exng"
                  value={formData.exng}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="oldpeak" className="block">
                ST Depression Induced by Exercise Relative to Rest
                <input
                  type="number"
                  id="oldpeak"
                  name="oldpeak"
                  value={formData.oldpeak}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="slp" className="block">
                Slope of the Peak Exercise ST Segment
                <input
                  type="number"
                  id="slp"
                  name="slp"
                  value={formData.slp}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="caa" className="block">
                Number of Major Vessels Colored by Fluoroscopy
                <input
                  type="number"
                  id="caa"
                  name="caa"
                  value={formData.caa}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="thall" className="block">
                Thallium Stress Test Result
                <input
                  type="number"
                  id="thall"
                  name="thall"
                  value={formData.thall}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-end p-3 space-x-5">
            <button
              type="button"
              onClick={handleClearForm}
              className="block w-1/5 mt-4 p-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-offset-2 focus:border-indigo-500 rounded-lg"
            >
              Reset
            </button>
            <button
              type="submit"
              className="block w-1/5 mt-4 p-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-offset-2 focus:border-indigo-500 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="w-full mt-5">
          <Faq data={heartDiseaseFAQ} classes="hidden" />
        </div>
      </div>
      <div className="w-2/5">
        {result && (
          <ResultPage
            prob={result * randomNumber}
            preventions={HepatitisPreventions}
          />
        )}
      </div>
    </section>
  );
};

export default HeartPredictionForm;
