import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Divider, Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import { T } from "../../../lib/types/common";
import { Message } from "@mui/icons-material";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

const ModalImg = styled.img`
  width: 62%;
  height: 100%;
  border-radius: 10px;
  background: transparent;
  margin-top: 1px;
  margin-left: 7px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes = useStyles();
  // authentication logic
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();

  /** HANDLERS **/

  const handleUserName = (e: T) => {
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: T) => {
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter" && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handleLoginRequest().then();
    }
  };

  // Signup request
  const handleSignupRequest = async () => {
    try {
      const isFulfill =
        memberNick !== "" && memberPhone !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      // Saving Authenticated user
      setAuthMember(result);
      handleSignupClose();
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  // Login request
  const handleLoginRequest = async () => {
    try {
      const isFulfill = memberNick !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      // Saving Authenticated user
      setAuthMember(result);
      handleLoginClose();
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{
              width: "850px",
              height: "500px",
              background: "#282d32",
              borderRadius: "16px",
              color: "#ffffff",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <ModalImg src={"/img/signup_logo.png"} alt="camera" />
            <Stack sx={{ marginLeft: "62px", alignItems: "center" }}>
              <h2>Create Account</h2>
              <TextField
                sx={{
                  width: "230px",
                  color: "#fff",
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ABC3D1",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#666",
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ABC3D1",
                    },
                  },
                }}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={handleUserName}
              />
              <TextField
                sx={{
                  width: "230px",
                  my: "25px",
                  color: "#fff",
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ABC3D1",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#666",
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ABC3D1",
                    },
                  },
                }}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                onChange={handlePhone}
              />
              <TextField
                sx={{
                  width: "230px",
                  color: "#fff",
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ABC3D1",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#666",
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ABC3D1",
                    },
                  },
                }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                sx={{
                  border: "1px solid #666",
                  borderRadius: "15px",
                  color: "#bbbbbb",
                  backgroundColor: "transparent",
                  fontWeight: 500,
                  fontSize: "16px",
                  marginTop: "30px",
                  width: "150px",
                  height: "46px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#181818",
                  },
                }}
                variant="extended"
                onClick={handleSignupRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
              <Divider
                sx={{ width: "100%", my: 3, mt: 3, borderColor: "#444" }}
              />
              <Fab
                sx={{
                  width: "210px",
                  height: "40px",
                  backgroundColor: "transparent",
                  color: "#bbbbbb",
                  textTransform: "none",
                  border: "1px solid #666",
                  borderRadius: "15px",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#181818",
                  },
                }}
                onClick={() => {
                  console.log("Google signup coming soon...");
                }}
              >
                <img
                  src="/img/google.png"
                  alt="Google"
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                Continue with Google
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{
              width: "850px",
              height: "500px",
              background: "#282d32",
              borderRadius: "16px",
              color: "#ffffff",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <ModalImg src={"/img/signup_logo.png"} alt="camera" />
            <Stack
              sx={{
                marginLeft: "65px",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <h2>Login</h2>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                sx={{
                  width: "230px",
                  my: "20px",
                  color: "#fff",
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ABC3D1",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#666",
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ABC3D1",
                    },
                  },
                }}
                onChange={handleUserName}
              />
              <TextField
                id={"outlined-basic"}
                label={"Password"}
                variant={"outlined"}
                type={"password"}
                sx={{
                  width: "230px",
                  color: "#fff",
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#aaa",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ABC3D1",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#666",
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ABC3D1",
                    },
                  },
                }}
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                sx={{
                  border: "1px solid #666",
                  borderRadius: "15px",
                  color: "#bbbbbb",
                  backgroundColor: "transparent",
                  fontWeight: 500,
                  fontSize: "16px",
                  marginTop: "30px",
                  width: "150px",
                  height: "46px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#181818",
                  },
                }}
                onClick={handleLoginRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
              <Divider
                sx={{ width: "100%", my: 3, mt: 3, borderColor: "#444" }}
              />
              <Fab
                sx={{
                  width: "210px",
                  height: "40px",
                  backgroundColor: "transparent",
                  color: "#bbbbbb",
                  textTransform: "none",
                  border: "1px solid #666",
                  borderRadius: "15px",
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: "#181818",
                  },
                }}
                onClick={() => {
                  console.log("Google signup coming soon...");
                }}
              >
                <img
                  src="/img/google.png"
                  alt="Google"
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                Continue with Google
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
