import React from "react";
import useFecthData from "../hooks/useFecthData";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config";
import Loading from "../components/Loader/Loading";
import Error from "../components/Error/Error";

const AppointmentDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFecthData(`${BASE_URL}/bookings/${id}`);
  console.log(data);
  return (
    <section className="max-w-[1280px] p-3">
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!error && !loading && (
        <div className="flex flex-row">
          <div className="w-1/2">
            <div className="flex flex-row bg-cardColor p-8 rounded-lg">
              <div className="h-1/3">
                <img
                  src={data.user.photo}
                  alt={data.user.name}
                  className="w-48 h-68 rounded-lg"
                />
              </div>
              <div className="px-5  space-y-1">
                <h2 className="text-lg font-bold text-white">
                  User Information
                </h2>
                <p
                  className="text_para text-[15px]  font-bold
                        text-white"
                >
                  <strong>Name:</strong> {data.user.name}
                </p>
                <p
                  className="text_para text-[15px]  font-bold
                        text-white"
                >
                  <strong>Age:</strong> {data.user.age}
                </p>
                <p
                  className="text_para text-[15px]  font-bold
                        text-white"
                >
                  <strong>Gender:</strong> {data.user.gender}
                </p>
                <p
                  className="text_para text-[15px]  font-bold
                        text-white"
                >
                  <strong>Phone:</strong> {data.user.phone}
                </p>
                <p
                  className="text_para text-[15px] font-bold
                        text-white"
                >
                  <strong>Blood Type:</strong> {data.user.bloodType}
                </p>
                <p
                  className="text_para text-[15px] font-bold
                        text-white"
                >
                  <strong>Weight:</strong> {data.user.weight}
                </p>
              </div>
            </div>
            <div className="flex flex-row bg-cardColor p-8 rounded-lg mt-5">
              <div className="h-1/3">
                <img
                  src={data.doctor.photo}
                  alt={data.doctor.name}
                  className="w-48 h-68 rounded-lg"
                />
              </div>
              <div className="px-5 space-y-1">
                <h2 className="text-lg font-bold text-white">
                  Doctor Information
                </h2>
                <p className="text_para text-[15px] font-bold text-white">
                  <strong>Name:</strong> {data.doctor.name}
                </p>
                <hr />
                <h2 className="text-lg font-bold text-white">
                  Appointment Details
                </h2>
                <p className="text_para text-[15px] font-bold text-white">
                  <strong>Date:</strong> {data.date}
                </p>
                <p className="text_para text-[15px] font-bold text-white">
                  <strong>Timeslot:</strong> {data.timeslot}
                </p>
                <p className="text_para text-[15px] font-bold text-white">
                  <strong>Status:</strong> {data.status}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-gray-400">
            {data.report ? (<img
              src={data.report}
              alt="Report"
              className="w-full h-full object-cover"
            />) : (
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl">No Report provided by user.</h1>
                </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default AppointmentDetails;
