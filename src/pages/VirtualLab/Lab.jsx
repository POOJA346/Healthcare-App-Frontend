import LabCard from "./Component/LabCard";
import { GiBubblingFlask } from "react-icons/gi";
import labData from "../../constant/labData";
const Lab = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-center items-center mb-4 ">
        <GiBubblingFlask className="w-16 h-16 text-gray-700" />
        <h1 className="text-5xl font-protest text-gray-700">Laboratories.</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-around px-32 pb-20">
        {labData.map((item, index) => {
          return <LabCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Lab;
