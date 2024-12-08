import { useState } from "react";
import logo from "../../../assets/images/Dashboard1.png";
import Faq from "../../../components/Faq/Faq";
import LiverFAQ from "../../../constant/LiverFAQ";
import { GiBubblingFlask } from "react-icons/gi";
import axios from "axios";
import ResultPage from "../../../components/Result";
import LiverPreventions from "../../../Precuations/Liver";

const LiverPredictionForm = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    age: 45,
    totalBilirubin: 0.7,
    directBilirubin: 0.2,
    alkalinePhosphotase: 80,
    alamineAminoTransFerase: 20,
    aspartateAminoTransFerase: 25,
    totalProtiens: 7.0,
    albumin: 4.0,
    albuminAndGlobulinRatio: 1.2,
    gender: "male",
  });

  // Handle input changes
  const randomNumber = Math.random() * (1 - 0.8) + 0.8;
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
        "http://127.0.0.1:5000/lab/liver",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.Data.Probability[0][1]);
      setResult(response?.data?.Data?.Probability[0][1]);
      console.log("Form submitted successfully", response.data.Data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const handleClearForm = () => {
    setFormData({
      age: 45,
      totalBilirubin: 0.7,
      directBilirubin: 0.2,
      alkalinePhosphotase: 80,
      alamineAminoTransFerase: 20,
      aspartateAminoTransFerase: 25,
      totalProtiens: 7.0,
      albumin: 4.0,
      albuminAndGlobulinRatio: 1.2,
      gender: "male",
    });
  };

  return (
    <>
      <section className="flex flex-row justify-around px-10">
        <div className="w-3/5 flex flex-col justify-start items-end px-7">
          <div className="flex flex-row justify-center items-center">
            <GiBubblingFlask className="w-16 h-16 text-gray-700" />
            <h1 className="text-4xl font-protest text-gray-700">
              Liver Disease Predictor
            </h1>
            <img src={logo} alt="" className="h-60 z-[10]" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full bg-cardColor text-white p-5 rounded-xl mt-[-40px]"
          >
            <div className="grid grid-cols-2 gap-y-6 w-full">
              <div className="px-3">
                <label htmlFor="age" className="block">
                  Age
                  <input
                    type="number"
                    id="age"
                    name="age"
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
                <label htmlFor="totalBilirubin" className="block">
                  Total Bilirubin
                  <input
                    type="number"
                    id="totalBilirubin"
                    name="totalBilirubin"
                    value={formData.totalBilirubin}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>
              <div className="px-3">
                <label htmlFor="directBilirubin" className="block">
                  Direct Bilirubin
                  <input
                    type="number"
                    id="directBilirubin"
                    name="directBilirubin"
                    value={formData.directBilirubin}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>
              <div className="px-3">
                <label htmlFor="alkalinePhosphotase" className="block">
                  Alkaline Phosphotase
                  <input
                    type="number"
                    id="alkalinePhosphotase"
                    name="alkalinePhosphotase"
                    value={formData.alkalinePhosphotase}
                    onChange={handleChange}
                    min={0}
                    step={1}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>
              <div className="px-3">
                <label htmlFor="alamineAminoTransFerase" className="block">
                  Alamine Amino TransFerase
                  <input
                    type="number"
                    id="alamineAminoTransFerase"
                    name="alamineAminoTransFerase"
                    value={formData.alamineAminoTransFerase}
                    onChange={handleChange}
                    min={0}
                    step={1}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>
              <div className="px-3">
                <label htmlFor="aspartateAminoTransFerase" className="block">
                  Aspartate Amino TransFerase
                  <input
                    type="number"
                    id="aspartateAminoTransFerase"
                    name="aspartateAminoTransFerase"
                    value={formData.aspartateAminoTransFerase}
                    onChange={handleChange}
                    min={0}
                    step={1}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>
              <div className="px-3">
                <label htmlFor="totalProtiens" className="block">
                  Total Protiens
                  <input
                    type="number"
                    id="totalProtiens"
                    name="totalProtiens"
                    value={formData.totalProtiens}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>
              <div className="px-3">
                <label htmlFor="albumin" className="block">
                  Albumin
                  <input
                    type="number"
                    id="albumin"
                    name="albumin"
                    value={formData.albumin}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    required
                  />
                </label>
              </div>
              <div className="px-3">
                <label htmlFor="albuminAndGlobulinRatio" className="block">
                  Albumin and Globulin Ratio
                  <input
                    type="number"
                    id="albuminAndGlobulinRatio"
                    name="albuminAndGlobulinRatio"
                    value={formData.albuminAndGlobulinRatio}
                    onChange={handleChange}
                    min={0}
                    step={0.01}
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
                    name="gender"
                    value={formData.gender}
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
            <Faq data={LiverFAQ} classes="hidden" />
          </div>
        </div>
        <div className="w-2/5">
          {result && (
            <ResultPage
              prob={result * randomNumber}
              preventions={LiverPreventions}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default LiverPredictionForm;
