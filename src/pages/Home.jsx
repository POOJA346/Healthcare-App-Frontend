import heroImg01 from "../assets/images/hero-img01.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      {/* // Hero section */}
      <section
        className="
        mb-20"
      >
        <div className="my-[-30px]">
          <div
            className="flex flex-col lg:flex-row
            items-center justify-around"
          >
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px] text-headingColor
                    font-[800] md:text-[60px] md:leading-[70px]"
                >
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                We empower individuals to achieve optimal health and wellness, fostering longevity and vitality. Our dedicated team is committed to providing personalized care and innovative solutions tailored to each patient's unique needs. With a focus on preventive medicine and holistic approaches, we strive to enhance quality of life and promote well-being at every stage.
                </p>
                <Link to="/doctors">
                  <button className="btn bg-cardColor">Request an Appointment</button>
                </Link>
              </div>

              {/* hero counter */}
              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row
                  lg:items-center gap-5 lg:gap-[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px]
                      lg:leading-[54px] font-[700] text-headingColor"
                  >
                    30+
                  </h2>
                  <span
                    className="w-[100px] h-2 bg-yellowColor rounded-full
                      block mt-[-14px]"
                  ></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px]
                      lg:leading-[54px] font-[700] text-headingColor"
                  >
                    15+
                  </h2>
                  <span
                    className="w-[100px] h-2 bg-cardColor rounded-full
                      block mt-[-14px]"
                  ></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px]
                      lg:leading-[54px] font-[700] text-headingColor"
                  >
                    100%
                  </h2>
                  <span
                    className="w-[100px] h-2 bg-irisBlueColor rounded-full
                      block mt-[-14px]"
                  ></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* hero content */}
            <div className="flex gap-[30px] justify-end h-screen">
              <img src={heroImg01} alt="" className="p-10" />
            </div>
          </div>
        </div>
      </section>

      {/* // Hero section Ends */}
      <section className="my-20">
        <div className="container">
          <div className="lg:w-[470px] mx-auto mb-5">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World-Class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-5 lg:gap-[40px]"
          >
            <div className=" px-5 bg-cardColor p-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-white
                  font-[700] text-center"
                >
                  Find a Doctor
                </h2>
                <p
                  className="text-[16px] leading-7 text-white
                  font-[400] mt-4 text-center"
                >
                  World-Class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border
                    border-solid border-[#181A1E] mt-[30px] mx-auto
                    flex items-center justify-center group hover:bg-white
                    hover:border-none"
                >
                  <BsArrowRight
                    className="group-hover:text-[#181A1E]
                      w-6 h-5"
                  />
                </Link>
              </div>
            </div>

            <div className="px-5 bg-cardColor p-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-white
                  font-[700] text-center"
                >
                  Find a Location
                </h2>
                <p
                  className="text-[16px] leading-7 text-white
                  font-[400] mt-4 text-center"
                >
                  World-Class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border
                    border-solid border-[#181A1E] mt-[30px] mx-auto
                    flex items-center justify-center group hover:bg-white
                    hover:border-none"
                >
                  <BsArrowRight
                    className="ggroup-hover:text-[#181A1E]
                      w-6 h-5"
                  />
                </Link>
              </div>
            </div>

            <div className="px-5 bg-cardColor p-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-xl">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2
                  className="text-[26px] leading-9 text-white
                  font-[700] text-center"
                >
                  Book Appointment
                </h2>
                <p
                  className="text-[16px] leading-7 text-white
                  font-[400] mt-4 text-center"
                >
                  World-Class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border
                    border-solid border-[#181A1E] mt-[30px] mx-auto
                    flex items-center justify-center group hover:bg-white
                    hover:border-none"
                >
                  <BsArrowRight
                    className="group-hover:text-[#181A1E]
                      w-6 h-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
            Our Medical Services cover everything from routine check-ups to advanced treatments, all delivered with expertise and care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* faq */}
      <section className="container px-28">
        <h2 className="heading">Most questions by our beloved patients</h2>
        <FaqList />
      </section>

      {/* testimonial */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients says</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              aliquid quibusdam perferendis <br></br>
              quam ullam optio impedit fuga, vitae enim reiciendis! Soluta quae
              rem natus perspiciatis
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Home;
