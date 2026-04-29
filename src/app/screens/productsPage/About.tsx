import React, { useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CATEGORY_2, CategoryType2 } from "../../../constants/about";

/* TYPE */
type CategoryType = "PRESIDENT" | "MANAGER" | "UZBEK_STAFFS";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  phone: string;
  country: string;
  kakaotalk: string;
  instagram: string;
  facebook: string;
  telegram: string;
}

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  phone: string;
  country: string;
  kakaotalk: string;
  instagram: string;
  facebook: string;
  telegram: string;
}

export default function About() {
  const { t } = useTranslation();
  const [category, setCategory] = useState<CategoryType>("PRESIDENT");
  const teamData: Record<CategoryType, TeamMember[]> = {
    PRESIDENT: [
      {
        name: "Kim Mi Ock",
        role: "Founder",
        image: "/img/team/president.png",
        phone: "02-534-15-09",
        country: "South Korea",
        kakaotalk: "#",
        instagram: "#",
        facebook: "#",
        telegram: "#",
      },
    ],
    MANAGER: [
      {
        name: "Patk Yi Seul",
        role: "Team Manager",
        image: "/img/team/manager.png",
        phone: "02-534-15-09",
        country: "South Korea",
        kakaotalk: "#",
        instagram: "#",
        facebook: "#",
        telegram: "#",
      },
    ],
    UZBEK_STAFFS: [
      {
        name: "Marjona",
        role: "UZB Manager",
        image: "/img/team/marjona.png",
        phone: "+99890 066-33-49",
        country: "Uzbekistan",
        kakaotalk: "#",
        instagram: "#",
        facebook: "#",
        telegram: "#",
      },
      {
        name: "Kyzzhibek",
        role: "CIS Manager",
        image: "/img/team/jibek.png",
        phone: "+82 10-6597-9902",
        country: "Uzbekistan",
        kakaotalk: "#",
        instagram: "#",
        facebook: "#",
        telegram: "#",
      },

      {
        name: "Saidjon",
        role: "Marketing",
        image: "/img/team/saidjon.png",
        phone: "+82 10-4363-4144",
        country: "Uzbekistan",
        kakaotalk: "#",
        instagram: "#",
        facebook: "#",
        telegram: "#",
      },
      {
        name: "Masrur",
        role: "Marketing",
        image: "/img/team/masrur.png",
        phone: "+82 10-5570-3193",
        country: "Uzbekistan",
        kakaotalk: "#",
        instagram: "#",
        facebook: "#",
        telegram: "#",
      },
    ],
  };

  const [category2, setCategory2] = useState<CategoryType2>(
    CATEGORY_2.LANGUAGE_COURSE,
  );

  const serviceData = t("aboutservice.serviceData", {
    returnObjects: true,
  }) as Record<CategoryType2, Omit<ServiceItem, "image">[]>;

  const serviceImages: Record<CategoryType2, string[]> = {
    LANGUAGE_COURSE: [
      "/img/service/language.png",
      "/img/service/language.png",
      "/img/service/language.png",
    ],
    BACHELOR: [
      "/img/service/bachelor.png",
      "/img/service/bachelor.png",
      "/img/service/bachelor.png",
    ],
    MASTER_PHD: [
      "/img/service/master.png",
      "/img/service/master.png",
      "/img/service/phd.png",
    ],
    OTHER_VISA: ["/img/service/visa.png", "/img/service/visa.png"],
  };

  return (
    <div className="about">
      <Container>
        <Stack alignItems="center">
          {/* TITLE */}
          <Box className="top-title"> {t("about.title")}</Box>

          {/* BUTTONS */}
          <div className="category-main">
            <Button
              className={`btn ${category === "PRESIDENT" ? "active" : ""}`}
              onClick={() => setCategory("PRESIDENT")}
            >
              {t("about.roles.president")}
            </Button>

            <Button
              className={`btn ${category === "MANAGER" ? "active" : ""}`}
              onClick={() => setCategory("MANAGER")}
            >
              {t("about.roles.manager")}
            </Button>

            <Button
              className={`btn ${category === "UZBEK_STAFFS" ? "active" : ""}`}
              onClick={() => setCategory("UZBEK_STAFFS")}
            >
              {t("about.roles.uzbek")}
            </Button>
          </div>

          {/* CARDS */}
          <Stack
            className={
              category === "UZBEK_STAFFS"
                ? "team-wrapper team-wrapper--uz"
                : "team-wrapper"
            }
          >
            {teamData[category].map((item, index) => (
              <div key={index} className="team-card">
                {/* LEFT - INFO */}
                <div className="team-info">
                  <h3 className="name">{item.name}</h3>
                  <p className="role">{item.role}</p>

                  <p className="extra"> {item.country}</p>
                  <p className="extra"> {item.phone}</p>

                  {category === "UZBEK_STAFFS" && (
                    <div className="socials">
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "/icons/net/instagram.png"
                          }
                          alt="instagram"
                        />
                      </a>

                      <a
                        href={item.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "/icons/net/facebook.png"
                          }
                          alt="facebook"
                        />
                      </a>

                      <a
                        href={item.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "/icons/net/telegram.png"
                          }
                          alt="telegram"
                        />
                      </a>
                    </div>
                  )}
                </div>

                {/* RIGHT - IMAGE */}
                <div
                  className="team-image"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + item.image})`,
                  }}
                />
              </div>
            ))}
          </Stack>
        </Stack>
      </Container>
      <div className="service">
        <Container>
          <Stack alignItems="center">
            {/* TITLE */}
            <Box className="top-title">{t("about.services")}</Box>

            {/* BUTTONS */}
            <div className="category-main">
              <Button
                className={`btn ${category2 === "LANGUAGE_COURSE" ? "active" : ""}`}
                onClick={() => setCategory2(CATEGORY_2.LANGUAGE_COURSE)}
              >
                {t("about.serviceTabs.language")}
              </Button>

              <Button
                className={`btn ${category2 === "BACHELOR" ? "active" : ""}`}
                onClick={() => setCategory2(CATEGORY_2.BACHELOR)}
              >
                {t("about.serviceTabs.bachelor")}
              </Button>

              <Button
                className={`btn ${category2 === "MASTER_PHD" ? "active" : ""}`}
                onClick={() => setCategory2(CATEGORY_2.MASTER_PHD)}
              >
                {t("about.serviceTabs.master_phd")}
              </Button>

              <Button
                className={`btn ${category2 === "OTHER_VISA" ? "active" : ""}`}
                onClick={() => setCategory2(CATEGORY_2.OTHER_VISA)}
              >
                {t("about.serviceTabs.other_visa")}
              </Button>
            </div>

            {/* CARDS */}
            <Stack className="service-wrapper">
              {serviceData[category2].map((item, index) => (
                <div key={index} className="service-card">
                  {/* IMAGE */}
                  <div
                    className="service-image"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + serviceImages[category2][index]
                      })`,
                    }}
                  />

                  {/* INFO */}
                  <div className="service-info">
                    <h3 className="title">{item.title}</h3>
                    <p className="desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </Stack>
          </Stack>
        </Container>
      </div>
      <div className="youtube-box">
        <div className="logo-title">{t("about.youtubeTitle")}</div>
        <Stack className="logo-box">
          {["NqM2iS2jMSA", "0IDzZb1af5A", "Jh6s7KCXy2c", "fhQsqocBIJs"].map(
            (id, i) => (
              <Box key={i} className="logo-img video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`video-${i}`}
                  allowFullScreen
                />
                <Box className="branch-location">Sec Edu & Itop Edu</Box>
              </Box>
            ),
          )}
        </Stack>
      </div>
      <div className="address">
        <Container>
          <Stack className="address-area">
            <Box className="title">{t("about.office")}</Box>

            <div className="map-address">
              <strong>{t("about.address")}:</strong>
              136 Seogang-ro, Mapo-gu, Seoul (IVY Tower 802)
            </div>

            <Box className="map-box">
              <iframe
                src="https://www.google.com/maps?q=136+Seogang-ro,+Mapo-gu,+Seoul&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </Box>

            <a
              href="https://maps.google.com?q=136+Seogang-ro,+Mapo-gu,+Seoul"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              {t("about.openMap")}
            </a>
          </Stack>
        </Container>
        <Container>
          <Stack className="address-area">
            <Box className="title">{t("about.office2")}</Box>

            <div className="map-address">
              <strong>{t("about.address")}:</strong>
              Room 209, 22 Beshyogoch Street, Shaykhantahur District, Tashkent
            </div>

            <Box className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6205.260170780265!2d69.27279876121871!3d41.27428897922596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1suz!2skr!4v1776407477996!5m2!1suz!2skr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </Box>

            <a
              href="https://www.google.com/maps?q=41.2731944,69.2764722"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              {t("about.openMap")}
            </a>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
