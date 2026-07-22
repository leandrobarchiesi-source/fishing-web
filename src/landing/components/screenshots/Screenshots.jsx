import "./Screenshots.css";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Screenshots() {

  const { t } = useTranslation();

  const screenshots = [
    "/images/screenshots/Screenshot_1.png",
    "/images/screenshots/Screenshot_2.png",
    "/images/screenshots/Screenshot_3.png",
    "/images/screenshots/Screenshot_4.png",
    "/images/screenshots/Screenshot_5.png",
    "/images/screenshots/Screenshot_6.png",
  ];

  return (

    <section id="screenshots" className="screenshots">

      <div className="container">

        <div className="screenshots-title">

          <span>{t("screenshots.badge")}</span>

          <h2>{t("screenshots.title")}</h2>

          <p>{t("screenshots.description")}</p>

        </div>

<Swiper
    modules={[Navigation]}
    navigation
    loop
    grabCursor
    observer
    observeParents
    speed={500}
    navigation={{
    enabled:true
}}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
        768:{
            slidesPerView:2
        },
        1200:{
            slidesPerView:3
        }
    }}
>
            {screenshots.map((image, index) => (

            <SwiperSlide key={index}>

              <div className="phone">

                <img
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );

}