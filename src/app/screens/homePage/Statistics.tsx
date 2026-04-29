import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { useState } from "react";
import ConsultationModal from "../../components/modal/ConsultationModal";
import Divider from "../../components/divider";
import { useTranslation } from "react-i18next";

export default function Statistics() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack
            className="static-box"
            onClick={() => setOpenModal(true)}
            sx={{ cursor: "pointer" }}
          >
            <Box className="static-num">
              <img
                className="iconi"
                src={process.env.PUBLIC_URL + "/modicons/guaranted.png"}
                alt="restaurant"
              />
            </Box>
            <Box className="static-txt">{t("statistics.reliable")}</Box>
          </Stack>

          <Divider height="64" width="1" bg="#2f5f9e" />

          <Stack
            className="static-box"
            onClick={() => setOpenModal(true)}
            sx={{ cursor: "pointer" }}
          >
            <Box className="static-num">
              <img
                className="iconi"
                src={process.env.PUBLIC_URL + "/modicons/consultant.png"}
                alt="restaurant"
              />
            </Box>
            <Box className="static-txt">{t("statistics.free")}</Box>
          </Stack>

          <Divider height="64" width="1" bg="#2f5f9e" />

          <Stack
            className="static-box"
            onClick={() => setOpenModal(true)}
            sx={{ cursor: "pointer" }}
          >
            <Box className="static-num">
              <img
                className="iconi"
                src={process.env.PUBLIC_URL + "/modicons/docs.png"}
                alt="restaurant"
              />
            </Box>
            <Box className="static-txt">{t("statistics.support")}</Box>
          </Stack>

          <Divider height="64" width="1" bg="#2f5f9e" />

          <Stack
            className="static-box"
            onClick={() => setOpenModal(true)}
            sx={{ cursor: "pointer" }}
          >
            <Box className="static-num">
              <img
                className="iconi"
                src={process.env.PUBLIC_URL + "/modicons/contract.png"}
                alt="restaurant"
              />
            </Box>
            <Box className="static-txt">{t("statistics.contract")}</Box>
          </Stack>
        </Stack>
      </Container>
      <ConsultationModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
