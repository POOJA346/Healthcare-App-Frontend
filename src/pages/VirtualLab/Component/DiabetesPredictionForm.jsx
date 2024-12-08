import { useState } from "react";
import logo from "../../../assets/images/Dashboard1.png";
import Faq from "../../../components/Faq/Faq";
import diabetesFAQ from "../../../constant/diabetesFAQ";
import axios from "axios";
import { GiBubblingFlask } from "react-icons/gi";
import ResultPage from "../../../components/Result";
import diabetesPrevention from "../../../Precuations/Diabetes";

const DiabetesPredictionForm = () => {
  const [formData, setFormData] = useState({
    Pregnancies: 0,
    Glucose: 80,
    BloodPressure: 120,
    SkinThickness: 20,
    Insulin: 5,
    BMI: 22,
    DiabetesPedigreeFunction: 0.5,
    Age: 30,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        "http://127.0.0.1:5000/lab/diabetes",
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
      Pregnancies: 0,
      Glucose: 80,
      BloodPressure: 120,
      SkinThickness: 20,
      Insulin: 5,
      BMI: 22,
      DiabetesPedigreeFunction: 0.5,
      Age: 30,
    });
  };
  // State variables to hold form data
  return (
    <section className="flex flex-row justify-around px-10">
      <div className="w-3/5 flex flex-col justify-start items-end px-7">
        <div className="flex flex-row justify-center items-center">
          <GiBubblingFlask className="w-16 h-16 text-gray-700" />
          <h1 className="text-4xl font-protest text-gray-700">
            Diabetes Disease Predictor
          </h1>
          <img src={logo} alt="" className="h-60 z-[10]" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-cardColor text-white p-5 rounded-xl mt-[-40px]"
        >
          <div className="grid grid-cols-2 gap-y-6 w-full">
            <div className="px-3">
              <label htmlFor="Pregnancies" className="block">
                Pregnancies
                <input
                  type="number"
                  id="Pregnancies"
                  name="Pregnancies"
                  value={formData?.Pregnancies}
                  min={0}
                  max={8}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="Glucose" className="block">
                Glucose
                <input
                  type="number"
                  id="Glucose"
                  name="Glucose"
                  value={formData?.Glucose}
                  min={0}
                  max={250}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="BloodPressure" className="block">
                Blood Pressure
                <input
                  type="number"
                  id="BloodPressure"
                  name="BloodPressure"
                  min={50}
                  max={200}
                  value={formData?.BloodPressure}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="SkinThickness" className="block">
                Skin Thickness (µm)
                <input
                  type="number"
                  id="SkinThickness"
                  name="SkinThickness"
                  min={10}
                  max={120}
                  value={formData?.SkinThickness}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="Insulin" className="block">
                Insulin (µU/mL)
                <input
                  type="number"
                  id="Insulin"
                  name="Insulin"
                  min={1}
                  max={150}
                  value={formData?.Insulin}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="BMI" className="block">
                BMI
                <input
                  type="number"
                  id="BMI"
                  name="BMI"
                  min={1}
                  max={100}
                  value={formData?.BMI}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="DiabetesPedigreeFunction" className="block">
                Diabetes Pedigree Function
                <input
                  type="number"
                  id="DiabetesPedigreeFunction"
                  name="DiabetesPedigreeFunction"
                  min={0.01}
                  max={1}
                  step={0.01}
                  value={formData?.DiabetesPedigreeFunction}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="Age" className="block">
                Age
                <input
                  type="number"
                  id="Age"
                  name="Age"
                  min={10}
                  max={90}
                  value={formData?.Age}
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
        <div className="2/5">
          <Faq item={diabetesFAQ} />
        </div>
      </div>
      <div className="w-2/5">
        {result && (
          <ResultPage prob={result} preventions={diabetesPrevention} />
        )}
      </div>
    </section>
  );
};

export default DiabetesPredictionForm;
