import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";

export default function License() {
  const { t } = useTranslation();
  const images = [
    "/img/license/license1.png",
    "/img/license/license2.png",
    "/img/license/license3.png",
    "/img/license/u1.jpg",
    "/img/license/u2.jpg",
    "/img/license/u3.jpg",
    "/img/license/u4.jpg",
    "/img/license/u5.jpg",
    "/img/license/u6.jpg",
    "/img/license/u7.jpg",
    "/img/license/u8.jpg",
    "/img/license/u9.jpg",
    "/img/license/u10.jpg",
  ];

  return (
    <div className="license-frame">
      <Container>
        <Stack className="main">
          <Box className="license-title">{t("other.license")}</Box>

          <div className="license-slider-wrapper">
            {/* CUSTOM BUTTONS
            <div className="custom-prev">‹</div>
            <div className="custom-next">›</div> */}

            <Swiper
              className="license-swiper"
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true} // 🔥 smooth ishlashi uchun
              breakpoints={{
                600: { slidesPerView: 2, spaceBetween: 14 },
                900: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 4, spaceBetween: 25 },
              }}
            >
              {[
                "/img/license/license1.png",
                "/img/license/license2.png",
                "/img/license/license3.png",
                "/img/license/u1.jpg",
                "/img/license/u2.jpg",
                "/img/license/u3.jpg",
                "/img/license/u4.jpg",
                "/img/license/u5.jpg",
                "/img/license/u6.jpg",
                "/img/license/u7.jpg",
                "/img/license/u8.jpg",
                "/img/license/u9.jpg",
                "/img/license/u10.jpg",
              ].map((img, index) => (
                <SwiperSlide key={index}>
                  <Box className="license-img">
                    <img src={process.env.PUBLIC_URL + img} alt="" />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
