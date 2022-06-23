/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import { TextField, Button, Alert } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";


const StateNormal = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1665.69px`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `195px 662px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Frame = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
});

const Frame1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Logo = styled("img")({
  height: `62.23px`,
  width: `341.69px`,
  margin: `0px`,
});

const InicioDeSesión = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `800`,
  fontSize: `34px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `30px 0px 0px 0px`,
});

const Input1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldOutlined = styled(TextField)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const TextFieldOutlined1 = styled(TextField)({
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
});

const Btm = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const ButtonContained = styled(Button)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const Link1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `24px 0px 0px 0px`,
});

const OlvidasteTuContraseñ = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(25, 118, 210, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  margin: `0px`,
}));

const Link2 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `24px 0px 0px 0px`,
  cursor: `pointer`,
});

const NoTienesCuentaRegíst = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(25, 118, 210, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  margin: `0px`,
}));

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enabledAlert, setEnabledAlert] = useState(false);
  const [errorType, setErrorType] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setErrorType(0);
    }
  }, [email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    const result = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await result.json();
    if (data.type === 1) {
      Cookies.set("token", data.token, { expires: 7 });
      router.push("/");

    }
    setEnabledAlert(true);
    setErrorType(data.type);
  };

  const renderAlert = () => {
    if (enabledAlert) {
      if (errorType === -1) {
        return (
          <Alert severity="error" sx={{ marginTop: 3, width: "100%" }}>
            Correo o contraseña incorrecta
          </Alert>
        );
      } else if (errorType === -2) {
        return (
          <Alert
            severity="error"
            sx={{
              marginTop: 3,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => {
                  sendVerificationEmail();
                  setErrorType(2);
                }}
              >
                Reenviar{" "}
                <MailOutlineIcon
                  color="error"
                  sx={{ marginLeft: 1, opacity: 0.8 }}
                />
              </Button>
            }
          >
            Debes confirmar tu correo
          </Alert>
        );
      } else if (errorType === 2) {
        return (
          <Alert
            severity="success"
            sx={{
              marginTop: 3,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => sendVerificationEmail()}
              >
                Reenviar{" "}
                <MailOutlineIcon
                  color="success"
                  sx={{ marginLeft: 1, opacity: 0.7 }}
                />
              </Button>
            }
          >
            Correo de confirmación enviado
          </Alert>
        );
      }
    }
  };

  const sendVerificationEmail = () => {
    // TODO: Send verification email
  }

  return (
    <StateNormal>
      <Frame>
        <Frame1>
          <Logo src="/assets/img/Logo.png" alt={"Logo"} />
          <InicioDeSesión>{`Inicio de Sesión`}</InicioDeSesión>
          {renderAlert()}
        </Frame1>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Input1>
            <TextFieldOutlined
              variant="outlined"
              size="medium"
              label={`Correo`}
              type="email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              error={errorType < 0}
              inputProps={{"data-testid": "email-input"}}
            />
            <TextFieldOutlined1
              variant="outlined"
              size="medium"
              label={`Contraseña`}
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              error={errorType < 0}
              inputProps={{"data-testid": "password-input"}}
            />
          </Input1>
          <Btm>
            <ButtonContained
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              disabled={email.length == 0 || password.length == 0}
              data-testid="submit-button"
            >
              {" "}
              Iniciar Sesion{" "}
            </ButtonContained>
            <Link1>
              <OlvidasteTuContraseñ>
                {`¿Olvidaste tu contraseña?`}
              </OlvidasteTuContraseñ>
            </Link1>
            <Link href={"/SignUp"}>
              <Link2>
                <NoTienesCuentaRegíst>
                  {`¿No tienes cuenta? Regístrate`}
                </NoTienesCuentaRegíst>
              </Link2>
            </Link>
          </Btm>
        </form>
      </Frame>
    </StateNormal>
  );
}

export default Login;
