import React, { useContext, useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
import { authContext } from "../../context/AuthContext";
const Feedback = ({ reviews, totalRating, id }) => {
  const { user, role, token } = useContext(authContext);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4
          className="text-[20px] leading-[30px] font-bold
        text-white mb-[30px]"
        >
          All reviews ({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img src={review?.user?.photo} alt="" className="rounded-full"/>
              </figure>

              <div>
                <h5 className="text-base leading-6 text-white font-bold">
                  {review?.user?.name}
                </h5>
                <p className="text-sm leading-6 text-white">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text-white mt-3 font-medium text-[15px]">
                  {review?.reviewText}
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="yellow" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showFeedbackForm && id !== user._id && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give FeedBack
          </button>
        </div>
      )}

      {showFeedbackForm && id !== user._id && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
