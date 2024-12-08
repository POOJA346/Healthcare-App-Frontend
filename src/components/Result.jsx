import React, { useState, useEffect } from "react";
import logo from "../assets/images/result.png";
import { PieChart } from "react-minimal-pie-chart";
import { findNearestSuggestion } from "../constant/Color";
const ResultPage = ({ prob, preventions }) => {
  let Chance = prob;
  if (Chance > 0.8) {
    Chance = Chance * 0.9;
  }
  if (Chance < 0.1) {
    Chance += 0.1;
  }

  console.log(Chance);
  const item = findNearestSuggestion(Chance, preventions);
  console.log(item);
  const [percentage, setPercentage] = useState(Chance * 100);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [suggestions, setSuggestions] = useState(item?.suggestions);

  const [typedSuggestion, setTypedSuggestion] = useState("");
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [generatedSuggestions, setGeneratedSuggestions] = useState([]);

  useEffect(() => {
    let timeout;
    if (showSuggestions && currentSuggestionIndex < suggestions?.length) {
      const currentSuggestion = suggestions[currentSuggestionIndex];
      if (currentSuggestion?.length > typedSuggestion?.length) {
        timeout = setTimeout(() => {
          setTypedSuggestion(
            (prev) => prev + currentSuggestion[typedSuggestion.length]
          );
        }, 5);
      } else {
        setCurrentSuggestionIndex((index) => index + 1);
        setGeneratedSuggestions((prev) => [...prev, typedSuggestion]);
        setTypedSuggestion("");
      }
    }

    return () => clearTimeout(timeout);
  }, [showSuggestions, typedSuggestion, suggestions, currentSuggestionIndex]);

  const generateEmojis = (percentage) => {
    const emojis = ["😊", "😆", "😁", "😃", "😄", "😀", "🙂", "😐", "😔", "😢"];
    const index = Math.floor((percentage - 10) / 10);
    return emojis[index].repeat(3);
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
    if (!showSuggestions) {
      setTypedSuggestion("");
      setCurrentSuggestionIndex(0);
      // Reset generated suggestions
    }
  };
  const data = [{ title: "Chance", value: percentage, color: "#ff0000" }];

  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-protest text-gray-700">
          Analysis and Prediction
        </h1>
        <img src={logo} alt="" className="h-40 z-[10]" />
      </div>
      <div className="p-5 rounded-xl bg-cardColor text-white">
        <div className="text-5xl mb-6 text-center">
          {generateEmojis(percentage)}
        </div>
        <div className="text-lg mb-6">
          You have {percentage.toFixed(2)}% chance of having this disease.
        </div>
        <div className="flex flex-col items-center gap-y-5">
          <PieChart
            style={{ width: "200px" }}
            data={data}
            lineWidth={30}
            startAngle={-90}
            lengthAngle={360}
            totalValue={100}
            animate
            animationDuration={1000}
            label={({ dataEntry }) => Math.round(dataEntry.value) + "%"}
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={toggleSuggestions}
          >
            {showSuggestions ? "Precautions" : "Show Precautions"}
          </button>
        </div>
        {showSuggestions && (
          <div className="text-left p-4">
            <ul className="list-disc">
              {generatedSuggestions.map((suggestion, index) => (
                <li key={index} className="mb-2">
                  {suggestion}
                  {console.log(suggestion)}
                </li>
              ))}
              <li>{typedSuggestion}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
