import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Settings } from "./Settings";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Phone } from "@mui/icons-material";
import "../../../css/userPage.css";

export default function UserPage() {
  const history = useHistory();
  const { authMember } = useGlobals();

  if (!authMember) history.push("/");
  return (
    <div className={"user-page"}>
      <Container>
        <Stack className={"my-page-frame"}>
          <Stack className={"my-page-left"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box className={"menu-name"}>Modify Member Details</Box>
              <Box className={"menu-content"}>
                <Settings />
              </Box>
            </Box>
          </Stack>

          <Stack className={"my-page-right"}>
            <Box className={"order-info-box"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <div className={"order-user-img"}>
                  <img
                    src={
                      authMember?.memberImage
                        ? `${serverApi}/${authMember.memberImage}`
                        : "/icons/default-user.svg"
                    }
                    className={"order-user-avatar"}
                  />
                  <div className={"order-user-icon-box"}>
                    <img
                      src={
                        authMember?.memberType === MemberType.ADMIN
                          ? "/icons/restaurant.svg"
                          : "/icons/user-badge.svg"
                      }
                      className={"order-user-prof-img"}
                    />
                  </div>
                </div>
                <span className={"order-user-name"}>
                  {authMember?.memberNick}
                </span>
                <span className={"order-user-prof"}>
                  {authMember?.memberType}
                </span>
                <Box className={"linear"}></Box>
                <span className={"order-user-phone"}>
                  <div style={{ display: "flex" }}>
                    <Phone
                      style={{
                        fontSize: 24,
                        color: "#616164",
                        marginRight: "5px",
                      }}
                    />
                  </div>
                  <p className={"user-phone-number"}>
                    {authMember?.memberPhone
                      ? authMember?.memberPhone
                      : "no description"}
                  </p>
                </span>
                <span className={"order-user-address"}>
                  <div style={{ display: "flex" }}>
                    <LocationOnIcon
                      style={{
                        fontSize: 24,
                        color: "#616164",
                        marginRight: "5px",
                      }}
                    />
                  </div>
                  <span className={"spec-address-txt"}>
                    {authMember?.memberAddress
                      ? authMember.memberAddress
                      : "no address"}
                  </span>
                </span>
              </Box>
              <Box className={"user-media-box"}>
                <FacebookIcon />
                <InstagramIcon />
                <TelegramIcon />
                <YouTubeIcon />
              </Box>
              <p className={"user-desc"}>
                {authMember?.memberDesc
                  ? authMember?.memberDesc
                  : "no description"}
              </p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
