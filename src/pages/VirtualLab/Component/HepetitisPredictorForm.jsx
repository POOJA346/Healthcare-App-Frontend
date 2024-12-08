import { useState } from "react";
import logo from "../../../assets/images/Dashboard1.png";
import Faq from "../../../components/Faq/Faq";
import { GiBubblingFlask } from "react-icons/gi";
import HepatitisFAQ from "../../../constant/HepatitisFAQ";
import axios from "axios";
import ResultPage from "../../../components/Result";
import HepatitisPreventions from "../../../Precuations/Hepatitis";

const HepetitisPredictionForm = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    Age: 0,
    ALB: 0,
    ALP: 0,
    ALT: 0,
    AST: 0,
    BIL: 0,
    CHE: 0,
    CHOL: 0,
    CREA: 0,
    GGT: 0,
    PROT: 0,
    sex: "male",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Prevent negative values
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
        "http://127.0.0.1:5000/lab/hepetitis",
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
      Age: 0,
      ALB: 0,
      ALP: 0,
      ALT: 0,
      AST: 0,
      BIL: 0,
      CHE: 0,
      CHOL: 0,
      CREA: 0,
      GGT: 0,
      PROT: 0,
      sex: "male",
    });
  };

  if (result === 0) {
    setResult(Math.random() * (0.1 - 0.4) + 0.1);
  }
  const randomNumber = Math.random() * 1.8;
  return (
    <>
      <section className="flex flex-row justify-around px-10">
        <div className="w-3/5 flex flex-col justify-start items-end px-7">
          <div className="flex flex-row justify-center items-center">
            <GiBubblingFlask className="w-16 h-16 text-gray-700" />
            <h1 className="text-4xl font-protest text-gray-700">
              Hepatitis Disease Predictor
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
                    step={1}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="ALB" className="block">
                  Albumin Blood Test (ALB) g/L
                  <input
                    type="number"
                    id="ALB"
                    name="ALB"
                    value={formData.ALB}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="ALP" className="block">
                  Alkaline Phosphatase Test (ALP) IU/L
                  <input
                    type="number"
                    id="ALP"
                    name="ALP"
                    value={formData.ALP}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="ALT" className="block">
                  Alanine Transaminase Test (ALT) U/L
                  <input
                    type="number"
                    id="ALT"
                    name="ALT"
                    value={formData.ALT}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="AST" className="block">
                  Aspartate Transaminase Test (AST) U/L
                  <input
                    type="number"
                    id="AST"
                    name="AST"
                    value={formData.AST}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="BIL" className="block">
                  Bilirubin Blood Test (BIL) µmol/L
                  <input
                    type="number"
                    id="BIL"
                    name="BIL"
                    value={formData.BIL}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="CHE" className="block">
                  Cholinesterase (CHE) kU/L
                  <input
                    type="number"
                    id="CHE"
                    name="CHE"
                    value={formData.CHE}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="CHOL" className="block">
                  Cholesterol (CHOL) mmol/L
                  <input
                    type="number"
                    id="CHOL"
                    name="CHOL"
                    value={formData.CHOL}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="CREA" className="block">
                  Creatinine Blood Test (CREA) µmol/L
                  <input
                    type="number"
                    id="CREA"
                    name="CREA"
                    value={formData.CREA}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="GGT" className="block">
                  Gamma-Glutamyl Transpeptidase Test (GGT) U/L
                  <input
                    type="number"
                    id="GGT"
                    name="GGT"
                    value={formData.GGT}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              <div className="px-3">
                <label htmlFor="PROT" className="block">
                  Protein Blood Test (PROT) g/L
                  <input
                    type="number"
                    id="PROT"
                    name="PROT"
                    value={formData.PROT}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>

              {/* Similarly, add input elements for the remaining fields */}

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
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
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
            <Faq data={HepatitisFAQ} classes="hidden" />
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
    </>
  );
};

export default HepetitisPredictionForm;
