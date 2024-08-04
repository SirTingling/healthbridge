import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// -----------------------------------------------------------------------------------------------------------------------------------
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// -----------------------------------------------------------------------------------------------------------------------------------
// Import assets and icons
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
// -----------------------------------------------------------------------------------------------------------------------------------
// Testimonial component
const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        // Install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* Testimonial slides */}
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                  Jane Smith
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “HealthBridge has truly transformed my healthcare experience. The staff is incredibly attentive and the service is exceptional.”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                  Michael Brown
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “The level of care and attention I received at HealthBridge was outstanding. I felt valued and well taken care of.”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                  Emily Johnson
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “I highly recommend HealthBridge. The seamless integration of technology and personalized care is unmatched.”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                  Daniel Williams
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “From the moment I walked in, I felt at ease. The professional and friendly staff at HealthBridge made all the difference.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
// -----------------------------------------------------------------------------------------------------------------------------------
export default Testimonial; // -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------