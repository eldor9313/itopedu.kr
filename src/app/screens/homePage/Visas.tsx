"use client";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Visas() {
  const { t } = useTranslation();
  return (
    <div className="visas-frame">
      <Container>
        <Stack className="visa-main">
          <Box className="category-title">{t("other.ourResults")}</Box>
          <Swiper
            className="visa-section"
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
              "Dist.jpg",
              "Dongeu1.jpg",
              "Dongeu2.jpg",
              "Gachon1.jpg",
              "Gachon2.jpg",
              "Gachon3.jpg",
              "Hejon.jpg",
              "Hejon1.jpg",
              "Soyong.jpg",
              "Mokpo.jpg",
              "Hansung1.jpg",
              "Hansung2.jpg",
              "Hansung3.jpg",
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <Box className="visa-img">
                  <img
                    src={process.env.PUBLIC_URL + `/visas/${img}`}
                    alt={`visa-${index}`}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
