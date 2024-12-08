import React, { useState } from "react";
import noPhoto from "../../assets/images/no-photo.jpg";
import { createPortal } from "react-dom/client";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { useParams } from "react-router-dom";
import useFecthData from "../../hooks/useFecthData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import AppointmentForm from "./AppointmentForm";

const DoctorDetails = () => {
  const [isPortalOpen, setPortalOpen] = useState(false);
  const [tab, setTab] = useState("about");
  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFecthData(`${BASE_URL}/doctors/${id}`, {
    headers: { "Cache-Control": "no-cache" },
  });

  return (
    <>

      <section className={`mt-10 ${isPortalOpen && ""}`}>
        <div className="max-w-[1170px] px-5 mx-auto">
          {loading && <Loading />}
          {error && <Error errMessage={error} />}
          {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-[50px] ">
              {
                isPortalOpen && (
                  <div className="md:col-span-2 bg-cardColor p-5 rounded-lg">
                  <AppointmentForm doctorId={doctor._id}
                  ticketPrice={doctor.ticketPrice}
                  timeSlots={doctor.timeSlots}
                  isPortalOpen={isPortalOpen}
                  setPortalOpen={setPortalOpen}/>
                  </div>
                )
              }
              {!isPortalOpen && (
                <div className="md:col-span-2 bg-cardColor p-5 rounded-lg">
                  <div
                    className="flex items-center gap-4 mb-20
                      "
                  >
                    <figure className="max-w-[200px] max-h-[200px]">
                      <img src={doctor?.photo} alt="" className="w-48 h-68" />
                    </figure>

                    <div className="flex flex-col lg:gap-1">
                      <span
                        className="bg-[#ccf0f3] text-irisBlueColor py-1
                          px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-base
                          lg:leading-6 font-semibold"
                      >
                        {doctor.specialization
                          ? doctor.specialization
                          : "surgeon"}
                      </span>
                      <h3
                        className="text-[22px] leading-9 font-bold
                        text-white"
                      >
                        {doctor.name}
                      </h3>

                      <div className="flex items-center gap-[6px]">
                        <span
                          className="flex items-center gap-[6px] text-white
                          text-sm leading-5 lg:leading-6 lg:text-base font-semibold"
                        >
                          <img src={starIcon} alt="" />
                          {doctor.averageRating}
                        </span>
                        <span
                          className="gap-[6px] text-white
                          text-sm leading-5 lg:leading-6 lg:text-base font-semibold"
                        >
                          ({doctor.totalRating})
                        </span>
                      </div>

                      <p className="text__para text-white font-[15px] lg:max-w-[390px] leading-6">
                        {doctor?.bio || "no bio"}
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-[50px] border-b border-solid
            border-[#ffffff] "
                  >
                    <button
                      onClick={() => setTab("about")}
                      className={`${
                        tab === "about" &&
                        "border-b border-solid border-primaryColor"
                      }
                py-2 px-5 mr-5 text-base leading-7
                text-white font-semibold`}
                    >
                      About
                    </button>
                    <button
                      onClick={() => setTab("feedback")}
                      className={`${
                        tab === "feedback" &&
                        "border-b border-solid border-primaryColor"
                      }
                py-2 px-5 mr-5 text-base leading-7
                text-white font-semibold`}
                    >
                      Feedback
                    </button>
                  </div>

                  <div className="mt-10">
                    {tab === "about" && (
                      <DoctorAbout
                        name={doctor.name}
                        about={doctor.about}
                        experiences={doctor.experiences}
                        qualifications={doctor.qualifications}
                      />
                    )}
                    {tab === "feedback" && (
                      <Feedback
                        reviews={doctor.reviews}
                        totalRating={doctor.totalRating}
                        id={id}
                      />
                    )}
                  </div>
                </div>
              )}

              <div>
                <SidePanel
                  doctorId={doctor._id}
                  ticketPrice={doctor.ticketPrice}
                  timeSlots={doctor.timeSlots}
                  isPortalOpen={isPortalOpen}
                  setPortalOpen={setPortalOpen}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DoctorDetails;
