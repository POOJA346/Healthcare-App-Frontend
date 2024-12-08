import healthTeam from "../../assets/images/healthTeam.png";
import FaqList from "./FaqList";

const Faq = ({ data, classes = "" }) => {
  return (
    <section>
      <div className="">
        <div className="flex flex-col md:flex-row justify-between lg:gap-0">
          <div className={`w-3/4 md:w-auto mx-auto text-center ${classes}`}>
            <img src={healthTeam} alt="team" />
          </div>
          <div className="w-full">
            <h2 className="text-4xl font-bold text-gray-800 p-1 ">
              Frequently asked questions by our beloved patients
            </h2>
            <FaqList data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
