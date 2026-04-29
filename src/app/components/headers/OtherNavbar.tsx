import { Box, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";
import LangDropdown from "./LangDropdown";
import { useThemeContext } from "../../ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function OtherNavbar() {
  const { darkMode, setDarkMode } = useThemeContext();
  const { t } = useTranslation();
  return (
    <div className="other-navbar">
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
              <NavLink exact to="/">
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
              <NavLink exact to="/">
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
        <Stack className="other-toys">
          <img src={process.env.PUBLIC_URL + "img/toys/03.png"} alt="" />
          {/* <Box className="center-title">
            A trusted study abroad specialist with years of proven experience.
          </Box> */}
          <img src={process.env.PUBLIC_URL + "img/toys/01.png"} alt="" />
        </Stack>
      </Container>
    </div>
  );
}
