import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";
import ConsultationModal from "../modal/ConsultationModal";
import { useTranslation } from "react-i18next";
import LangDropdown from "./LangDropdown";
import { useThemeContext } from "../../ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { motion, useReducedMotion } from "framer-motion";

export default function HomeNavbar() {
  const shouldReduceMotion = useReducedMotion();
  const { darkMode, setDarkMode } = useThemeContext();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const currentLang =
    typeof window !== "undefined" ? localStorage.getItem("lang") : null;
  const isKorean = currentLang === "kr";
  const titleText = isKorean
    ? t("navbar.title").replace(" 함께 시작하세요", "\n함께 시작하세요")
    : t("navbar.title");
  const descText = isKorean
    ? t("navbar.desc").replace(
        " 완벽하게 지원합니다.",
        "\n완벽하게 지원합니다.",
      )
    : t("navbar.desc");
  return (
    <div className="home-navbar">
      <Stack className="menu1">
        <div className="scroll-track">
          <div className="scroll-text">
            <span>{t("banner.line1")}</span>
            <span className="sep">·</span>
            <span>{t("banner.line2")}</span>
            <span className="sep">·</span>
            <span>{t("banner.line3")}</span>
            <span className="sep">·</span>
            <span>{t("banner.line4")}</span>
            <span className="sep">·</span>
            <span>{t("banner.line5")}</span>
            <span className="sep">·</span>
            <span className="phone">
              <a href="tel:+8225341509">
                <PhoneIcon style={{ fontSize: "16px", position: "relative" }} />
                <span>02-534-1509</span>
              </a>
            </span>
          </div>
          <div className="scroll-text">
            <span>{t("banner.line1")}</span>
            <span className="sep">·</span>
            <span>{t("banner.line2")}</span>
            <span className="sep">·</span>
            <span>{t("banner.line3")}</span>
            <span className="sep">·</span>
            <span>{t("banner.line4")}</span>
            <span className="sep">·</span>
            <span>{t("banner.line5")}</span>
            <span className="sep">·</span>
            <span className="phone">
              <a href="tel:+8225341509">
                <PhoneIcon style={{ fontSize: "16px", position: "relative" }} />
                <span>02-534-1509</span>
              </a>
            </span>
          </div>
        </div>
      </Stack>
      <Container className="navbar-container ">
        <Stack className="menu">
          <Stack className="menu-top">
            <Box>
              <NavLink to="/">
                <Box className="logos">
                  <img
                    className="brand-logo"
                    src={process.env.PUBLIC_URL + "/icons/logo.png"}
                  />
                  <span className="text-logo">ITOP EDU</span>
                </Box>
              </NavLink>
            </Box>
            <Box className="lang-mobile">
              <LangDropdown />
            </Box>
          </Stack>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink exact to="/" activeClassName={"underline"}>
                {t("navbar.home")}
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink exact to="/about" activeClassName={"underline"}>
                {t("navbar.about")}
              </NavLink>
            </Box>
            <Box className="lang-desktop">
              <LangDropdown />
            </Box>
            <button
              className={`theme-toggle ${darkMode ? "dark" : "light"}`}
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              type="button"
            >
              <span className="theme-icon sun">
                <LightModeOutlinedIcon style={{ fontSize: 17 }} />
              </span>
              <span className="theme-icon moon">
                <DarkModeOutlinedIcon style={{ fontSize: 17 }} />
              </span>
              <span className="theme-thumb" />
            </button>
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>{titleText}</Box>
            <Box className={"wel-txt"}>{descText}</Box>
            <Box className={"shopnow"}>
              <Box>
                <Button
                  variant="contained"
                  className="shopnow-button"
                  onClick={() => setOpen(true)}
                >
                  {t("navbar.consultation")}
                </Button>
              </Box>
            </Box>
          </Stack>
          <Box className={"logo-frame"}>
            <div className={"logo-img"}>
              <motion.div
                className="mascot-wrap"
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
                    : { opacity: 0, x: 180, y: -220, scale: 0.88, rotate: 8 }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
                    : { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
                }
                transition={{
                  duration: 3.2,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                <motion.div
                  className="mascot-inner"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -8, 0],
                          rotate: [0, -0.8, 0.6, 0],
                        }
                  }
                  transition={{
                    duration: 4,

                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/img/itop2.png"}
                    alt="ITOP mascot"
                    className="mascot-img-el"
                  />
                </motion.div>

                <motion.div
                  className="mascot-shadow"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0.16, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 0.16, scale: 1 }
                      : {
                          opacity: [0.14, 0.2, 0.14],
                          scaleX: [1, 0.92, 1],
                          scaleY: [1, 0.96, 1],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: shouldReduceMotion ? 0 : 1.9,
                  }}
                />
              </motion.div>
            </div>
          </Box>
        </Stack>
      </Container>
      <ConsultationModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
