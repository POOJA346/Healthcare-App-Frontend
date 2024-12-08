import React from "react";
import useFecthData from "../../hooks/useFecthData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import DoctorCard from "../../components/Doctors/DoctorCard.jsx";
import { formateDate } from "../../utils/formateDate.js";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFecthData(`${BASE_URL}/users/appointment/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="flex flex-col">
          <div
            className="flex flex-col px-2 py-3 rounded-lg bg-white my-2"
          >
            <div className="grid grid-cols-12 items-center">
              <div className="text-base font-semibold text-gray-700 col-span-2">
                User Name
              </div>
              <div className="text-gray-700   col-span-2">Date</div>
              <div className="text-gray-700  col-span-3">Time Slot</div>
              <div className="text-gray-700  col-span-2">Status</div>
              <div className="col-span-2 flex flex-row justify-between items-center text-gray-700 ">
                Doctor Details
              </div>
            </div>
          </div>
          {appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-col px-2 py-2 rounded-lg bg-white my-1"
            >
              <div className="grid grid-cols-12 items-center">
                <div className="text-base font-semibold text-gray-700 col-span-2">
                  {item.user.name}
                </div>
                <div className="text-gray-700   col-span-2">{item.date}</div>
                <div className="text-gray-700  col-span-3">
                  {item?.timeslot.split(" ").slice(1).join(" ")}
                </div>
                <div className="text-gray-700  col-span-2">{item.status}</div>
                <div className="col-span-2 flex flex-row justify-between items-center">
                  <div className="text-gray-700   ">
                    <Link to={`/doctors/${item?.doctor?._id}`}>
                      {item.doctor.name}
                    </Link>
                  </div>
                  <div className="text-gray-700">
                    <img
                      src={item.doctor.photo}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <h2
          className="mt-5 text-center
        leading-7 text-[20px] font-semibold
        text-primaryColor"
        >
          You don't have any appointments yet
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
