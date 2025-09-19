import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Process.css";
import StepSlide from "../../components/StepSlide/StepSlide";
import { stepSlides } from "../../data/process";


const Process = () => {
  return (
    <>
      <div id="process" className="process-section-container">
        <div className="process-container">
          <div className="process-text-container">
            <h1>Our Processing Technology</h1>
            <p>
              Advanced equipment and proven processes ensure maximum quality,
              nutrition retention, and minimal waste
            </p>
          </div>
          <div className="process-content-container">
            <div className="process-step-container">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={false}
                loop={false}
                centeredSlides={true}
                breakpoints={{
                  320: { 
                    slidesPerView: 1, 
                    spaceBetween: 10,  // 16px spacing on small mobile
                    centeredSlides: true
                  },
                  480: { 
                    slidesPerView: 1, 
                    spaceBetween: 15,  // 20px spacing on mobile
                    centeredSlides: true
                  },
                  640: { 
                    slidesPerView: 1, 
                    spaceBetween: 20,  // 24px spacing on large mobile
                    centeredSlides: true
                  }, 
                  768: { 
                    slidesPerView: 2, 
                    spaceBetween: 24,  // 24px spacing on tablet
                    centeredSlides: false
                  }, 
                  1024: { 
                    slidesPerView: 2, 
                    spaceBetween: 32,  // 32px spacing on desktop
                    centeredSlides: false
                  }, 
                  1280: { 
                    slidesPerView: 3, 
                    spaceBetween: 40,  // 40px spacing on large desktop
                    centeredSlides: false
                  },
                }}
              >
                {stepSlides.map((step) => {
                  return (
                    <SwiperSlide key={step.id}>
                      <StepSlide data={step} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="process-quote-container">
              <div className="process-quote-text-container">
                <h1>Complete Quality Control</h1>
                <p>
                  Every grain passes through our rigorous 8-step process,
                  ensuring consistent quality, maximum nutrition retention, and
                  premium appearance for both domestic and export markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
