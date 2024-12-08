import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div className=" p-3 rounded-lg">
        <h3
          className="text-[25px]
            font-semibold flex items-center gap-2 text-black"
        >
          About
        </h3>
        <p className="bg-[#fff9ea] rounded-lg p-4 text-base leading-6 font-medium text-textColor">{about}</p>
      </div>

      <div className="mt-10  p-3 rounded-lg">
        <h3
          className="text-[25px] leading-[30px] text-black
            font-semibold"
        >
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          {qualifications && qualifications.length > 0 ? (
            qualifications.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] bg-[#fff9ea] rounded-lg p-4"
              >
                <div>
                  <span className="text-[15px] leading-6 font-semibold text-yellowColor">
                    {formateDate(item?.startingDate)} -{" "}
                    {formateDate(item?.endingDate)}
                  </span>
                  <p className="text-base leading-6 font-medium text-textColor">
                    {item?.degree}
                  </p>
                </div>
                <p className="text-sm leading-5 font-medium text-textColor">
                  {item?.university}
                </p>
              </li>
            ))
          ) : (
            <li className="text-sm leading-5 font-medium text-textColor">-</li>
          )}
        </ul>
      </div>

      <div className="mt-10 p-3 rounded-lg">
        <h3
          className="text-[25px] leading-[30px]
            font-semibold"
        >
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences && experiences?.length > 0 ? (
            experiences.map((item, index) => (
              <li key={index} className="p-4 bg-[#fff9ea] rounded-lg">
                <span className="text-yellowColor text-base leading-6 font-semibold">
                  {formateDate(item.startingDate)} -{" "}
                  {formateDate(item.endingDate)}
                </span>
                <p className="text-base leading-6 font-medium text-textColor">
                  {item.position}
                </p>
                <p className="text-sm leading-5 font-medium text-textColor">
                  {item.hospital}
                </p>
              </li>
            ))
          ) : (
            <li className="text-sm leading-5 font-medium text-textColor">-</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
