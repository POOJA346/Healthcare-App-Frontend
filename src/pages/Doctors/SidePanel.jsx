import React, { useState } from "react";
import ReactDOM from "react-dom";
import convertTime from "../../utils/convertTime";
import { BASE_URL, role, token } from "../../config";
import { toast } from "react-toastify";

const SidePanel = ({
  doctorId,
  ticketPrice,
  timeSlots,
  isPortalOpen,
  setPortalOpen,
}) => {
  return (
    <>
      <div className="shadow-panelShadow p-3 lg:p-5 rounded-md bg-cardColor">
        <div className="flex items-center justify-between">
          <p className="text__para mt-0 font-semibold text-white">Price</p>
          <span
            className="text-base leading-7 lg:text-[22px]
            lg:leading-8 text-white font-bold"
          >
            {ticketPrice} INR
          </span>
        </div>

        <div className="mt-[30px]">
          <p className="text__para mt-0 font-semibold text-white">
            Available Time At:
          </p>

          <ul className="mt-3">
            {timeSlots?.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <p className="text-[15px] leading-6 text-white font-semibold">
                  {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                </p>
                <p className="text-[15px] leading-6 text-white font-semibold">
                  {convertTime(item.startingTime)} -{" "}
                  {convertTime(item.endingTime)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {role !== "doctor" && (
          <button
            onClick={() => setPortalOpen(!isPortalOpen)}
            className="btn px-2 w-full rounded-md"
          >
            Book Appointment
          </button>
        )}
      </div>
    </>
  );
};

export default SidePanel;
