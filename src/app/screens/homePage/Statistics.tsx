import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-num">
              <img
                className="iconi"
                src="/modicons/image1.svg"
                alt="restaurant"
              />
            </Box>
            <Box className="static-txt">Guaranteed</Box>
          </Stack>

          <Divider height="64" width="1" bg="#d5c4b3" />

          <Stack className="static-box">
            <Box className="static-num">
              <img
                className="iconi"
                src="/modicons/image2.svg"
                alt="restaurant"
              />
            </Box>
            <Box className="static-txt">Size Consultation</Box>
          </Stack>

          <Divider height="64" width="1" bg="#d5c4b3" />

          <Stack className="static-box">
            <Box className="static-num">
              <img
                className="iconi"
                src="/modicons/image3.svg"
                alt="restaurant"
              />
            </Box>
            <Box className="static-txt">Easy Payment</Box>
          </Stack>

          <Divider height="64" width="1" bg="#d5c4b3" />

          <Stack className="static-box">
            <Box className="static-num">
              <img
                className="iconi"
                src="/modicons/image4.svg"
                alt="restaurant"
              />
            </Box>
            <Box className="static-txt">On Time Shipping</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
