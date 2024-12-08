import React from "react";
import starIcon from "../../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {

  const roundedTotalRating = Math.round(doctor?.totalRating);

  return (
    <div className="w-72 rounded-xl bg-cardColor h-96 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      <div className="h-48 overflow-hidden rounded-t-xl">
        <img src={doctor?.photo} alt="" className="" />
      </div>

      <div className="flex flex-col justify-start px-3 h-1/2">
        <div className="flex flex-row justify-between">
          <h2
            className="text-xl leading-[30px]
        text-white font-[700] mt-3"
          >
            {doctor?.name}
          </h2>
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-[6px]">
            <span
              className="flex items-center gap-[6px] text-[14px] leading-6
                lg:text-[16px] lg:leading-7 font-semibold text-white"
            >
              Rating : <img src={starIcon} alt="" /> {doctor?.avgRating}
            </span>
            <span
              className="text-[14px] leading-6
                lg:text-[16px] lg:leading-7 font-normal text-white"
            >
              ({roundedTotalRating})
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p
            className="text-[14px] leading-6
                lg:text-[16px] lg:leading-7 font-normal text-white"
          >
            Experience: {doctor?.experiences === 0 ? doctor?.experiences : "New Joined"}
          </p>
          <Link
            to={`/doctors/${doctor._id}`}
            className="w-[44px] h-[44px] rounded-full border
                border-solid border-[#181A1E]
                flex items-center justify-center group hover:bg-white
                hover:border-none"
          >
            <BsArrowRight
              className="group-hover:text-black
                    w-6 h-5"
            />
          </Link>
        </div>
        <div className="w-full text-center mt-5">
            <p
            className="bg-[#ccf0f3] text-irisBlueColor py-1
                          px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-base
                          lg:leading-6 font-semibold"
          >
            {doctor.specialization ? doctor.specialization : "surgeon"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
