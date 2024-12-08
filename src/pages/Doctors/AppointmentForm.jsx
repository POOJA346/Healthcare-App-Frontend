import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { authContext } from "../../context/AuthContext";
import convertTime from "../../utils/convertTime";

function getNextOccurrencesOfDay(day) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const targetDayIndex = weekdays.indexOf(day);

  if (targetDayIndex === -1) {
    // Day not found
    return [];
  }

  const today = new Date();
  const todayIndex = today.getDay();
  const daysToAdd = (targetDayIndex - todayIndex + 7) % 7; // Number of days to add to reach the target day

  const nextOccurrences = [];
  for (let i = 0; i < 4; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + daysToAdd + 7 * i); // Add daysToAdd and additional 7 days for next occurrences
    const dateString = nextDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    nextOccurrences.push(dateString);
  }
  return nextOccurrences;
}

const AppointmentForm = ({
  doctorId,
  ticketPrice,
  timeSlots,
  isPortalOpen,
  setPortalOpen,
}) => {
  const { user } = useContext(authContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ticketPrice,
    name: "",
    age: "",
    weight: "",
    concern: "",
    photo: null,
    gender: "Male",
    phone: "",
    bloodType: "",
    dates: "",
    timeslot: "",
    report: null,
    public_id: null,
  });

  useEffect(() => {
    setFormData({
      name: user.name,
      gender: user.gender,
      bloodType: user.bloodType,
      weight: user.weight,
      age: user.age,
      phone: user.phone,
    });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setSelectedFile(data.url);
    setFormData({
      ...formData,
      report: data.url,
      public_id: data.public_id,
    });
  };
  let upcomingDates;

  if (formData?.timeslot) {
    const day = formData?.timeslot?.split(" ")[0];
    upcomingDates = getNextOccurrencesOfDay(day);
  }

  console.log(formData);
  const navigate = useNavigate();
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      navigate('/success')

      // if(data.session.url){
      //     window.location.href = data.session.url
      // }
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="w-full">
      <h1 className="text-4xl font-protest text-center text-[#fdfdfd] font-bold mb-5">
        Appointment Details..
      </h1>
      <form onSubmit={bookingHandler}>
        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="name"
            >
              Full Name :
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="FullName"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="bloodType"
            >
              Blood Group :
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleInputChange}
              placeholder="Blood Type"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="weight"
            >
              Weight :
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="Weight"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="age"
            >
              Age :
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="phone"
            >
              Phone :
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="phone"
            >
              Concern :
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="textarea"
              name="concern"
              value={formData.concern}
              onChange={handleInputChange}
              placeholder="Concern"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="phone"
            >
              TimeSlots :
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              name="timeslot"
              value={formData.timeslot}
              onChange={handleInputChange}
              className="form__input"
            >
              <option value="">Select</option>
              {timeSlots &&
                timeSlots.map((item, index) => {
                  return (
                    <option key={index}>
                      <li
                        key={index}
                        className="flex items-center justify-between mb-2"
                      >
                        <p className="text-[15px] leading-6  font-semibold mr-5">
                          {item.day.charAt(0).toUpperCase() + item.day.slice(1)}{" "}
                        </p>
                        <p className="text-[15px] leading-6  font-semibold">
                          {convertTime(item.startingTime)} -{" "}
                          {convertTime(item.endingTime)}
                        </p>
                      </li>
                    </option>
                  );
                })}
            </select>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="dates"
            >
              Upcoming Dates :
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              name="dates"
              value={formData.dates}
              onChange={handleInputChange}
              className="form__input"
            >
              <option value="">Select</option>
              {upcomingDates &&
                upcomingDates.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
            </select>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="gender"
            >
              Gender :
            </label>
          </div>
          <ul className="items-center w-2/3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center ps-3">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                />
                <label
                  htmlFor="male"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                >
                  Male
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center ps-3">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                />
                <label
                  htmlFor="female"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                >
                  Female
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center ps-3">
                <input
                  type="radio"
                  id="others"
                  name="gender"
                  value="others"
                  checked={formData.gender === "others"}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                />
                <label
                  htmlFor="others"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                >
                  Others
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <div className="ml-5 w-32">
            <label
              className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="photo"
            >
              Report :
            </label>
          </div>
          {formData.report && (
            <figure
              className="w-[60px] h-[60px] rounded-full border-2
            border-solid  flex items-center justify-center"
            >
              <img
                src={formData.report}
                alt=""
                className="w-16 h-16 rounded-full"
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="report"
              onChange={handleFileInputChange}
              id="report"
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="report"
              className="absolute top-0 left-0 w-full h-full flex items-center
                  px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                  text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 font-semibold
                  rounded-lg truncate cursor-pointer"
            >
              {selectedFile ? "Update Report" : "Upload Report"}
            </label>
          </div>
        </div>

        <div className="mt-7 flex justify-end space-x-5">
          <button
            disabled={loading && true}
            type="button"
            onClick={() => setPortalOpen(!isPortalOpen)}
            className="w-1/3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-4 py-3 text-center "
          >
            {loading ? (
              <HashLoader size={25} color="#fff" />
            ) : (
              "Confirm Details"
            )}
          </button>
          <button
            disabled={loading}
            type="submit"
            className="w-1/3 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 rounded-lg px-4 py-3"
          >
            {loading ? (
              <HashLoader size={25} color="#fff" />
            ) : (
              "Confirm Details"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
