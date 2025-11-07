import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobals } from "../../hooks/useGlobals";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: #343434;
  background-size: cover;
`;

export default function Footer() {
  const { authMember } = useGlobals();

  return (
    <Footers>
      <div className={"footer-container"}>
        <Container>
          <Stack flexDirection={"row"} sx={{ mt: "94px" }}>
            <Stack flexDirection={"column"} style={{ width: "340px" }}>
              <Box>
                <img width={"180px"} src={"/icons/cav-logo.png"} />
              </Box>
              <Box className={"foot-desc-txt"}>
                Focusing on timeless elegance and the modern gentleman’s
                lifestyle, Cavalier redefines classic luxury menswear. Each
                piece is crafted to embody sophistication, confidence, and
                enduring style — not just clothing, but a statement of
                character.
              </Box>
              <Box className="sns-context">
                <a target="_blank" rel="noopener noreferrer">
                  <img src={"/icons/facebook.svg"} />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <img src={"/icons/twitter.svg"} />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <img src={"/icons/instagram.svg"} />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <img src={"/icons/youtube.svg"} />
                </a>
              </Box>
            </Stack>
            <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
              <Stack>
                <Box>
                  <Box className={"foot-category-title"}>Fields</Box>
                  <Box className={"foot-category-link"}>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                      Home
                    </Link>
                    <Link
                      to="/products"
                      onClick={() => window.scrollTo(0, 400)}
                    >
                      Collection
                    </Link>
                    {authMember && (
                      <Link
                        to="/orders"
                        onClick={() => window.scrollTo(0, 350)}
                      >
                        Checkout
                      </Link>
                    )}
                    <Link to="/help" onClick={() => window.scrollTo(0, 0)}>
                      Help
                    </Link>
                  </Box>
                </Box>
              </Stack>
              <Stack>
                <Box>
                  <Box className={"foot-category-title"}>Shop by</Box>
                  <Box className={"foot-category-link"}>
                    <Link to="/">Suit</Link>
                    <Link to="/">Outerwear</Link>
                    <Link to="/">Shirt</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Accesories</Link>
                  </Box>
                </Box>
              </Stack>
              <Stack>
                <Box>
                  <Box className={"foot-category-title"}>Contact us</Box>
                  <Box className={"foot-category-link"}>
                    <Box flexDirection={"row"} className={"find-us"}>
                      <span>L.</span>
                      <div>Seoul, South Korea</div>
                    </Box>
                    <Box className={"find-us"}>
                      <span>P.</span>
                      <div>+82-10-8747-9313</div>
                    </Box>
                    <Box className={"find-us"}>
                      <span>E.</span>
                      <div>info@cavalier.com</div>
                    </Box>
                    <Box className={"find-us"}>
                      <span>H.</span>
                      <div>Open 24/7</div>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            style={{
              border: "1px solid #C5C8C9",
              width: "100%",
              opacity: "0.2",
            }}
            sx={{ mt: "70px" }}
          ></Stack>
          <Stack className={"copyright-txt"} direction="row">
            <div>© 2025 Cavalier. All rights reserved.</div>
            <span>Privacy StatementTerms & Conditions</span>
          </Stack>
        </Container>
      </div>
    </Footers>
  );
}
