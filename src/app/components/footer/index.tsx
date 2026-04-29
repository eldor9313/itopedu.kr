import React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

const Footers = styled.footer`
  width: 100%;
  min-height: 0;
  height: auto;
  display: flex;
  background: #343434;
  background-size: cover;
`;

export default function Footer() {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [type, setType] = useState<"instagram" | "telegram" | null>(null);

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>,
    snsType: "instagram" | "telegram",
  ) => {
    setAnchorEl(event.currentTarget);
    setType(snsType);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setType(null);
  };

  const links = {
    instagram: {
      korea: "https://www.instagram.com/itopedu.kr",
      uzbekistan:
        "https://www.instagram.com/i_topedu_uz?igsh=MXc3cnQ3cjB1NHllNA==",
    },
    telegram: {
      korea: "https://t.me/itopedukr",
      uzbekistan: "https://t.me/itopedu_rasmiy_kanal",
    },
  };

  return (
    <Footers>
      <div className={"footer-container"}>
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 2, sm: 2.5, md: 3 },
            px: { xs: 2, sm: 3 },
          }}
        >
          <Stack
            className={"foot-top"}
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 4 }}
            alignItems={{ xs: "stretch", md: "flex-start" }}
            justifyContent="space-between"
          >
            <Stack
              className={"footer-right"}
              direction="column"
              sx={{ maxWidth: { md: 400 }, width: "100%" }}
            >
              <Box className={"logofoot"}>
                <img
                  className="foot-logo"
                  src={process.env.PUBLIC_URL + "/icons/itop1.png"}
                  alt="ITOP EDU"
                />
                <span className="text-foot">ITOP EDU</span>
              </Box>
              <Box className={"foot-desc-txt"}>{t("footer.description")}</Box>
              <Box className="sns-context">
                <a href="mailto:info@itopedu.com" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/net/mail.png"}
                    alt="Email"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleOpen(e, "instagram")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/icons/net/instagram.png"}
                    alt="Instagram"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleOpen(e, "telegram")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/icons/net/telegram1.png"}
                    alt="telegram"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@masrurjamol?_r=1&_t=ZS-95WFqOG8c0y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/icons/net/tiktok.png"}
                    alt="Facebook"
                  />
                </a>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  className="sns-menu"
                  PaperProps={{
                    className: "sns-menu-paper",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      window.open(links[type!].korea, "_blank");
                      handleClose();
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/icons/flag/korea.png"}
                      className="flag-icon"
                    />
                    Korea
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      window.open(links[type!].uzbekistan, "_blank");
                      handleClose();
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + " /icons/flag/uzbek.png"}
                      className="flag-icon"
                    />
                    Uzbekistan
                  </MenuItem>
                </Menu>
              </Box>
            </Stack>

            <Stack
              className={"footer-left"}
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 6, md: 10 }}
            >
              <Box sx={{ minWidth: { sm: 140 } }}>
                <Box className={"foot-category-title"}>
                  {t("footer.explore")}
                </Box>
                <Box className={"foot-category-link"}>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    {t("navbar.home")}
                  </Link>
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                    {t("navbar.about")}
                  </Link>
                </Box>
              </Box>

              <Box sx={{ minWidth: { sm: 200 }, flex: { sm: "1 1 240px" } }}>
                <Box className={"foot-category-title"}>
                  {t("footer.contact")}
                </Box>
                <Box className={"foot-category-link"}>
                  <Box className={"find-us"}>
                    <div>{t("footer.location")}</div>
                  </Box>
                  <Box className={"find-us"}>
                    <div>{t("footer.phone")}</div>
                  </Box>
                  <Box className={"find-us"}>
                    <div>{t("footer.email")}</div>
                  </Box>
                  <Box className={"find-us"}>
                    <div>{t("footer.hours")}</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>

          <Divider
            sx={{
              mt: { xs: 2, md: 3 },
              mb: 1.5,
              borderColor: "rgba(197, 200, 201, 0.35)",
            }}
          />

          <Stack
            className={"copyright-txt"}
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <div>{t("footer.privacy")}</div>
            <span>{t("footer.terms")}</span>
          </Stack>
        </Container>
      </div>
    </Footers>
  );
}
