import { useState } from "react";
import logo from "../../../assets/images/Dashboard1.png";
import Faq from "../../../components/Faq/Faq";
import { GiBubblingFlask } from "react-icons/gi";
import LungsFAQ from "../../../constant/LungsFAQ";
import axios from "axios";
import ResultPage from "../../../components/Result";
import LungPreventions from "../../../Precuations/Lung";

function getRandomNumber(prob) {
  let min, max;
  if (prob === 0) {
    min = 0.1;
    max = 0.4;
  } else if (prob === 1) {
    min = 0.5;
    max = 0.9;
  } else {
    throw new Error("Invalid probability value. Expected 0 or 1.");
  }

  const randomNumber = Math.random() * (max - min) + min;
  return randomNumber.toFixed(2); // Limit to two decimal points
}

const LungsPredictionForm = () => {
  const BooleanInputField = ({ name, label, value, onChange }) => {
    return (
      <div className="px-3">
        <label htmlFor={name} className="block">
          {label}
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
            required
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </label>
      </div>
    );
  };

  // State variables to hold form data
  const [formData, setFormData] = useState({
    age: 20,
    smoking: 0,
    yellow_fingers: 0,
    anxiety: 0,
    peer_pressure: 0,
    chronic_disease: 0,
    fatigue: 0,
    allergy: 0,
    wheezing: 0,
    alcohol_consuming: 0,
    coughing: 0,
    swallowing_difficulty: 0,
    chest_pain: 0,
    // Add other form fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  // Submit form data
  const [result, setResult] = useState();

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        "http://127.0.0.1:5000/lab/lungs  ",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.Data.Result);
      setResult(response?.data?.Data?.Probability[0][1]);
      console.log("Form submitted successfully", response.data.Data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleClearForm = () => {
    setFormData({
      age: 20,
      smoking: 0,
      yellow_fingers: 0,
      anxiety: 0,
      peer_pressure: 0,
      chronic_disease: 0,
      fatigue: 0,
      allergy: 0,
      wheezing: 0,
      alcohol_consuming: 0,
      coughing: 0,
      swallowing_difficulty: 0,
      chest_pain: 0,
    });
  };

  return (
    <>
      <section className="flex flex-row-reverse justify-between px-5">
        <div className="w-2/5">
          {typeof result !== "undefined" && (
            <ResultPage prob={result} preventions={LungPrevention} />
          )}
        </div>
        <div className="w-3/5 flex flex-col justify-start items-end px-7">
          <div className="flex flex-row justify-center items-center">
            <GiBubblingFlask className="w-16 h-16 text-gray-700" />
            <h1 className="text-4xl font-protest text-gray-700">
              Lungs Disease Predictor
            </h1>
            <img src={logo} alt="" className="h-60 z-[10]" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full bg-cardColor text-white p-5 rounded-xl mt-[-40px]"
          >
            <div className="grid grid-cols-2 gap-y-6 w-full">
              <div className="px-3">
                <label htmlFor={name} className="block">
                  Age
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min={10}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>
              <BooleanInputField
                name="smoking"
                label="Smoking"
                value={formData.smoking}
                onChange={handleChange}
              />
              <BooleanInputField
                name="yellow_fingers"
                label="Yellow Fingers"
                value={formData.yellow_fingers}
                onChange={handleChange}
              />
              <BooleanInputField
                name="anxiety"
                label="Anxiety"
                value={formData.anxiety}
                onChange={handleChange}
              />
              <BooleanInputField
                name="peer_pressure"
                label="Peer Pressure"
                value={formData.peer_pressure}
                onChange={handleChange}
              />
              <BooleanInputField
                name="chronic_disease"
                label="Chronic Disease"
                value={formData.chronic_disease}
                onChange={handleChange}
              />
              <BooleanInputField
                name="fatigue"
                label="Fatigue"
                value={formData.fatigue}
                onChange={handleChange}
              />
              <BooleanInputField
                name="allergy"
                label="Allergy"
                value={formData.allergy}
                onChange={handleChange}
              />
              <BooleanInputField
                name="wheezing"
                label="Wheezing"
                value={formData.wheezing}
                onChange={handleChange}
              />
              <BooleanInputField
                name="alcohol_consuming"
                label="Alcohol Consuming"
                value={formData.alcohol_consuming}
                onChange={handleChange}
              />
              <BooleanInputField
                name="coughing"
                label="Coughing"
                value={formData.coughing}
                onChange={handleChange}
              />
              <BooleanInputField
                name="swallowing_difficulty"
                label="Swallowing Difficulty"
                value={formData.swallowing_difficulty}
                onChange={handleChange}
              />
              <BooleanInputField
                name="chest_pain"
                label="Chest Pain"
                value={formData.chest_pain}
                onChange={handleChange}
              />
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
            <Faq data={LungsFAQ} classes="hidden" />
          </div>
        </div>
        <div className="w-2/5">
          {result && <ResultPage prob={result} preventions={LungPreventions} />}
        </div>
      </section>
    </>
  );
};

export default LungsPredictionForm;
