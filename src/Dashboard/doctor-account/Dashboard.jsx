import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import useFecthData from "../../hooks/useFecthData.jsx";
import { BASE_URL } from "../../config.js";
import Tabs from "./Tabs";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout.jsx";
import Profile from "../doctor-account/Profile.jsx";
import Appointments from "./Appointments.jsx";

const Dashboard = () => {
  const { data, loading, error } = useFecthData(
    `${BASE_URL}/doctors/profile/me`,
    { headers: { "Cache-Control": "no-cache" } }
  );

  const [tab, setTab] = useState("overview");

  return (
    <section className="my-10">
      <div className="px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && !loading && <Error />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div
                  className="flex p-4 mb-4 text-yellow-800 bg-yellow-50
                rounded-lg items-center"
                >
                  <FaExclamationCircle className="flex-shrink-0 w-5 h-5" />

                  <span className="sr-only">Info</span>
                  <div className="ml-2 text-sm font-medium">
                    To get approval, please complete your profile. Review
                    manually and approvae within 3 days.
                  </div>
                </div>
              )}

              <div className="">
                {tab === "overview" && (
                  <div className="bg-cardColor p-8 rounded-lg">
                    <div
                      className="flex items-center gap-4 mb-20
                      "
                    >
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={data?.photo} alt="" className="w-48 h-68" />
                      </figure>

                      <div className="flex flex-col lg:gap-1">
                        <span
                          className="bg-[#ccf0f3] text-irisBlueColor py-1
                          px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-base
                          lg:leading-6 font-semibold"
                        >
                          {data.specialization
                            ? data.specialization
                            : "surgeon"}
                        </span>
                        <h3
                          className="text-[22px] leading-9 font-bold
                        text-white"
                        >
                          {data.name}
                        </h3>

                        <div className="flex items-center gap-[6px]">
                          <span
                            className="flex items-center gap-[6px] text-white
                          text-sm leading-5 lg:leading-6 lg:text-base font-semibold"
                          >
                            <img src={starIcon} alt="" />
                            {data.averageRating}
                          </span>
                          <span
                            className="gap-[6px] text-white
                          text-sm leading-5 lg:leading-6 lg:text-base font-semibold"
                          >
                            ({data.totalRating})
                          </span>
                        </div>

                        <p className="text__para text-white font-[15px] lg:max-w-[390px] leading-6">
                          {data?.bio || "no bio"}
                        </p>
                      </div>
                    </div>

                    <DoctorAbout
                      name={data.name}
                      about={data.about}
                      qualifications={data.qualifications}
                      experiences={data.experiences}
                    />
                  </div>
                )}
                {tab === "appointments" && (
                   <div className="bg-purpleColor p-3 rounded-lg min-h-[65vh]"><Appointments appointments={data.appointments} /></div>
                )}
                {tab === "settings" && <Profile doctorData={data} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
