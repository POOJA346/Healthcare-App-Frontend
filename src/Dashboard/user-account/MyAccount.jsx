import React, { useContext, useState } from "react";
import userImg from "../../assets/images/doctor-img01.png";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useFecthData from "../../hooks/useFecthData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const {
    data: userData,
    loading,
    error,
  } = useFecthData(`${BASE_URL}/users/profile/me`);



  return (
    <div className="px-20 mx-auto my-10">
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="pb-[50px] px-[30px] rounded-md  bg-cardColor flex flex-col justify-start h-[80vh]">
              <div className="flex items-center justify-center pt-10">
                <figure
                  className="w-[150px] h-[150px] rounded-full
                    border-2 border-solid border-primaryColor"
                >
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="mt-4">
                <h3
                  className="text-[18px] leading-[30px] text-white
                    font-bold"
                >
                  Name : {userData.name}
                </h3>
                <p
                  className="text-[18px] leading-[30px] text-white
                font-bold"
                >
                  Email : {userData.email}
                </p>
                <p
                  className="text-[18px] leading-[30px] text-white
                font-bold"
                >
                  Blood Type :
                  <span
                    className="text-[18px] leading-[30px] text-white
                  font-bold"
                  >
                    {userData.bloodType}
                  </span>
                </p>
                <p
                  className="text-[18px] leading-[30px] text-white
                font-bold"
                >
                  Gender :
                  <span
                    className="text-[18px] leading-[30px] text-white
                  font-bold"
                  >
                    {userData?.gender}
                  </span>
                </p>
                <p
                  className="text-[18px] leading-[30px] text-white
                font-bold"
                >
                  Phone :
                  <span
                    className="text-[18px] leading-[30px] text-white
                  font-bold"
                  >
                    {userData.phone ? userData.phone : "N/A"}
                  </span>
                </p>
                <p
                  className="text-[18px] leading-[30px] text-white
                font-bold"
                >
                  Weight :
                  <span
                    className="text-[18px] leading-[30px] text-white
                  font-bold"
                  >
                    {userData.weight ? userData.weight : "N/A"}
                  </span>
                </p>
              </div>

              <div className="mt-[50px]">
                <button
                  className="w-full bg-[#181a1e] p-3 text-base leading-7
                    rounded-md text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button
                  className="w-full bg-red-600 p-3 text-base leading-7
                    rounded-md text-white mt-4"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 md:px-[30px] w-2/3 bg-purpleColor p-10 rounded-lg">
            <div>
              <button
                onClick={() => setTab("bookings")}
                className={` ${
                  tab === "bookings" ? "bg-red-600 text-white font-normal" : "bg-blue-600 text-white font-light"
                } p-2 mr-5 px-5 rounded-md text-headingColor
                        font-semibold text-base leading-7 border border-solid border-primaryColor`}
              >
                My Bookings
              </button>

              <button
                onClick={() => setTab("settings")}
                className={` ${
                  tab === "settings" ? "bg-red-600 text-white font-normal" : "bg-blue-600 text-white font-light"
                } py-2 px-5 rounded-md text-headingColor
                    font-semibold text-base leading-7 border border-solid border-primaryColor`}
              >
                Profile Settings
              </button>
            </div>
            {tab === "bookings" && <MyBookings />}
            {tab === "settings" && <Profile user={userData} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
