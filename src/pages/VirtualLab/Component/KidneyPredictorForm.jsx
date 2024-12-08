import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/Dashboard1.png";
import Faq from "../../../components/Faq/Faq";
import KidneyFAQ from "../../../constant/KidneyFAQ";
import axios from "axios";
import { GiBubblingFlask } from "react-icons/gi";
import ResultPage from "../../../components/Result";
import KidneyPreventions from "../../../Precuations/Kidney";

const KidneyPredictionForm = () => {
  const [formData, setFormData] = useState({
    Age: 30,
    BloodPressure: 80,
    SpecificGravity: 1.02,
    Albumin: 4.0,
    Sugar: 70,
    RedBloodCells: 0,
    PusCell: 0,
    PusCellClumps: 0,
    Bacteria: 0,
    BloodGlucoseRandom: 90,
    BloodUrea: 15,
    SerumCreatinine: 0.8,
    Sodium: 135,
    Potassium: 4.0,
    Haemoglobin: 14,
    PackedCellVolume: 42,
    WhiteBloodCellCount: 7000,
    RedBloodCellCount: 5.0,
    Hypertension: 0,
    DiabetesMellitus: 0,
    CoronaryArteryDisease: 0,
    Appetite: 0,
    PedaEdema: 0,
    Anemia: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value < 0 ? 0 : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: sanitizedValue,
    }));
  };
  const [result, setResult] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        "http://127.0.0.1:5000/lab/kidney",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response?.data?.Data?.Probability[0][1]);
      console.log("Form submitted successfully", response.data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const randomNumber = Math.random() * 5;
  const handleClearForm = () => {
    setFormData({
      Age: "",
      BloodPressure: "",
      SpecificGravity: "",
      Albumin: "",
      Sugar: "",
      RedBloodCells: "",
      PusCell: "",
      PusCellClumps: "",
      Bacteria: "",
      BloodGlucoseRandom: "",
      BloodUrea: "",
      SerumCreatinine: "",
      Sodium: "",
      Potassium: "",
      Haemoglobin: "",
      PackedCellVolume: "",
      WhiteBloodCellCount: "",
      RedBloodCellCount: "",
      Hypertension: "",
      DiabetesMellitus: "",
      CoronaryArteryDisease: "",
      Appetite: "",
      PedaEdema: "",
      Anemia: "",
    });
  };

  return (
    <section className="flex flex-row justify-around px-10">
      <div className="w-3/5 flex flex-col justify-start items-end px-7">
        <div className="flex flex-row justify-center items-center">
          <GiBubblingFlask className="w-16 h-16 text-gray-700" />
          <h1 className="text-4xl font-protest text-gray-700">
            Kidney Disease Predictor
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
                  value={formData.Age}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>
            <div className="px-3">
              <label htmlFor="BloodPressure" className="block">
                Diastolic Blood Pressure(mmHg)
                <input
                  type="number"
                  id="BloodPressure"
                  name="BloodPressure"
                  value={formData.BloodPressure}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>
            <div className="px-3">
              <label htmlFor="Albumin" className="block">
                Albumin (g/dL)
                <input
                  type="number"
                  id="Albumin"
                  name="Albumin"
                  value={formData.Albumin}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="Sugar" className="block">
                Sugar (mg/dL)
                <input
                  type="number"
                  id="Sugar"
                  name="Sugar"
                  value={formData.Sugar}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="BloodGlucoseRandom" className="block">
                Blood Glucose Random (mg/dL)
                <input
                  type="number"
                  id="BloodGlucoseRandom"
                  name="BloodGlucoseRandom"
                  value={formData.BloodGlucoseRandom}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>
            <div className="px-3">
              <label htmlFor="BloodUrea" className="block">
                Blood Urea (mg/dL)
                <input
                  type="number"
                  id="BloodUrea"
                  name="BloodUrea"
                  value={formData.BloodUrea}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="SerumCreatinine" className="block">
                Serum Creatinine (mg/dL)
                <input
                  type="number"
                  id="SerumCreatinine"
                  name="SerumCreatinine"
                  value={formData.SerumCreatinine}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="Sodium" className="block">
                Sodium (mmol/L)
                <input
                  type="number"
                  id="Sodium"
                  name="Sodium"
                  value={formData.Sodium}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="Potassium" className="block">
                Potassium (mmol/L)
                <input
                  type="number"
                  id="Potassium"
                  name="Potassium"
                  value={formData.Potassium}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>
            <div className="px-3">
              <label htmlFor="SpecificGravity" className="block">
                Specific Gravity (g/mL)
                <input
                  type="number"
                  id="SpecificGravity"
                  name="SpecificGravity"
                  value={formData.SpecificGravity}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="Haemoglobin" className="block">
                Haemoglobin (g/dL)
                <input
                  type="number"
                  id="Haemoglobin"
                  name="Haemoglobin"
                  value={formData.Haemoglobin}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="PackedCellVolume" className="block">
                Packed Cell Volume (%)
                <input
                  type="number"
                  id="PackedCellVolume"
                  name="PackedCellVolume"
                  value={formData.PackedCellVolume}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="WhiteBloodCellCount" className="block">
                White Blood Cell Count (cells/mcL)
                <input
                  type="number"
                  id="WhiteBloodCellCount"
                  name="WhiteBloodCellCount"
                  value={formData.WhiteBloodCellCount}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            <div className="px-3">
              <label htmlFor="RedBloodCellCount" className="block">
                Red Blood Cell Count (million cells/mcL)
                <input
                  type="number"
                  id="RedBloodCellCount"
                  name="RedBloodCellCount"
                  value={formData.RedBloodCellCount}
                  onChange={handleChange}
                  min={0}
                  step={0.01}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                />
              </label>
            </div>

            {/* Red Blood Cells */}
            <div className="px-3">
              <label htmlFor="RedBloodCells" className="block">
                Red Blood Cells
                <select
                  id="RedBloodCells"
                  name="RedBloodCells"
                  value={formData.RedBloodCells}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">Normal</option>
                  <option value="1">Abnormal</option>
                </select>
              </label>
            </div>

            {/* Pus Cell */}
            <div className="px-3">
              <label htmlFor="PusCell" className="block">
                Pus Cell
                <select
                  id="PusCell"
                  name="PusCell"
                  value={formData.PusCell}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">Normal</option>
                  <option value="1">Abnormal</option>
                </select>
              </label>
            </div>

            {/* Pus Cell Clumps */}
            <div className="px-3">
              <label htmlFor="PusCellClumps" className="block">
                Pus Cell Clumps
                <select
                  id="PusCellClumps"
                  name="PusCellClumps"
                  value={formData.PusCellClumps}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">Absent</option>
                  <option value="1">Present</option>
                </select>
              </label>
            </div>

            {/* Bacteria */}
            <div className="px-3">
              <label htmlFor="Bacteria" className="block">
                Bacteria
                <select
                  id="Bacteria"
                  name="Bacteria"
                  value={formData.Bacteria}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">Absent</option>
                  <option value="1">Present</option>
                </select>
              </label>
            </div>

            {/* Add other input fields similarly */}
            {/* Hypertension */}
            <div className="px-3">
              <label htmlFor="Hypertension" className="block">
                Hypertension
                <select
                  id="Hypertension"
                  name="Hypertension"
                  value={formData.Hypertension}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </label>
            </div>

            {/* Diabetes Mellitus */}
            <div className="px-3">
              <label htmlFor="DiabetesMellitus" className="block">
                Diabetes Mellitus
                <select
                  id="DiabetesMellitus"
                  name="DiabetesMellitus"
                  value={formData.DiabetesMellitus}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </label>
            </div>

            {/* Coronary Artery Disease */}
            <div className="px-3">
              <label htmlFor="CoronaryArteryDisease" className="block">
                Coronary Artery Disease
                <select
                  id="CoronaryArteryDisease"
                  name="CoronaryArteryDisease"
                  value={formData.CoronaryArteryDisease}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </label>
            </div>

            {/* Coronary Artery Disease (Poor/Good) */}
            <div className="px-3">
              <label htmlFor="CoronaryArteryDiseaseStatus" className="block">
                Coronary Artery Disease
                <select
                  id="CoronaryArteryDiseaseStatus"
                  name="CoronaryArteryDiseaseStatus"
                  value={formData.CoronaryArteryDiseaseStatus}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="Good">Good</option>
                  <option value="Poor">Poor</option>
                </select>
              </label>
            </div>

            {/* Peda Edema */}
            <div className="px-3">
              <label htmlFor="PedaEdema" className="block">
                Peda Edema (swelling in the feet and ankles)
                <select
                  id="PedaEdema"
                  name="PedaEdema"
                  value={formData.PedaEdema}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </label>
            </div>

            {/* Anemia */}
            <div className="px-3">
              <label htmlFor="Anemia" className="block">
                Anemia
                <select
                  id="Anemia"
                  name="Anemia"
                  value={formData.Anemia}
                  onChange={handleChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="">Select option</option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-end p-3 gap-x-5">
            <button
              type="button"
              onClick={handleClearForm}
              className="block w-1/5 mt-4 p-2 bg-[#ee4e4e] text-white rounded-md hover:bg-[#ea5353] focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-2 focus:border-red-500"
            >
              Clear Form
            </button>
            <button
              type="submit"
              className="block w-1/5 mt-4 p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-offset-2 focus:border-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="w-full mt-5">
          <Faq data={KidneyFAQ} classes="hidden" />
        </div>
      </div>
      <div className="w-2/5">
        {result && (
          <ResultPage
            prob={result * randomNumber}
            preventions={KidneyPreventions}
          />
        )}
      </div>
    </section>
  );
};

export default KidneyPredictionForm;
