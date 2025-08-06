import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";

// BASKET LOGIC
interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
    handleLogoutClick,
    anchorEl,
    handleCloseLogout,
    handleLogoutRequest,
  } = props;

  const { authMember } = useGlobals();

  /** HANDLERS **/
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

  useEffect(() => {
    if (authMember) {
      setWelcomeMessage(`Welcome back ${authMember.memberNick}`);

      const firstTimer = setTimeout(() => {
        setWelcomeMessage("Enjoy your shopping!");
      }, 4000);

      const secondTimer = setTimeout(() => {
        setWelcomeMessage(null);
      }, 14000);

      return () => {
        clearTimeout(firstTimer);
        clearTimeout(secondTimer);
      };
    }
  }, [authMember]);

  return (
    <div className="home-navbar">
      <Container className="navbar-container ">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/cav-logo.png" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                Collection
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Checkout
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            {/* BASKET */}
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />

            {!authMember ? (
              <Box className="nav-btns">
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => setLoginOpen(true)}
                >
                  LOGIN
                </Button>
                <Button
                  variant={"contained"}
                  className={"signup-btn"}
                  onClick={() => setSignupOpen(true)}
                >
                  SIGN UP
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember?.memberImage}`
                    : "/icons/default-user.svg"
                }
                aria-haspopup={"true"}
                onClick={handleLogoutClick}
              />
            )}
            {authMember ? (
              <Box className={"hover-line"}>
                <IconButton onClick={handleLogoutRequest}>
                  <Logout style={{ color: "#fff", fontSize: "28px" }} />
                </IconButton>
              </Box>
            ) : null}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>
              Crafted for the Modern Gentleman
            </Box>
            <Box className={"wel-txt"}>
              Timeless designs for the modern gentleman. Tailored fits, luxury
              details, and confident style.
            </Box>
            {/* <Box className={"service-txt"}>Tailored Support 24/7</Box> */}
            <Box className={"shopnow"}>
              <Link to={authMember ? "/products" : "/login"}>
                <Button variant={"contained"} className={"shopnow-button"}>
                  SHOP NOW
                </Button>
              </Link>
              {authMember && welcomeMessage && (
                <Typography className="member-nick" variant="body2">
                  {welcomeMessage}
                </Typography>
              )}
            </Box>
          </Stack>
          <Box className={"logo-frame"}>
            <div className={"logo-img"}>
              {" "}
              <img src="/public/img/home-2.webp" alt="" />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
