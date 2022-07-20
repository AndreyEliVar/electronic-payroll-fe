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

import { styled } from "@mui/material/styles";
import SidebarRow from "./SidebarRow";
import Router from "next/router";
import { Avatar, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import Link from "next/link";

const CollapsableOpened = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    borderRight: `1px solid rgba(0, 0, 0, 0.12)`,
    boxSizing: `border-box`,
    display: `flex`,
    flexDirection: `column`,
    height: `100vh`,
    width: `290px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    gap: `6px`,
    padding: `16px`,
});

const Top = styled("div")({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    gap: `39px`,
    padding: `30px 0px 0px 0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    height: `100%`,
});

const Logo = styled("div")({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px 0px 0px 15px`,
    boxSizing: `border-box`,
    height: `32px`,
});

const Logo1 = styled("img")({
    height: `40px`,
    width: `218px`,
});

const List = styled("div")({
    display: `flex`,
    justifyContent: `space-between`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    gap: `10px`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    height: `100%`,
});

const SidebarRow1 = styled(SidebarRow)(({ theme }) => ({
    alignSelf: `stretch`,
    height: `40px`,
}));

const SidebarRow2 = styled(SidebarRow)(({ theme }) => ({
    alignSelf: `stretch`,
    height: `40px`,
}));

const SidebarRow3 = styled(SidebarRow)(({ theme }) => ({
    alignSelf: `stretch`,
    height: `40px`,
}));

const SidebarRow4 = styled(SidebarRow)(({ theme }) => ({
    alignSelf: `stretch`,
    height: `40px`,
}));

const SidebarRow5 = styled(SidebarRow)(({ theme }) => ({
    alignSelf: `stretch`,
    height: `40px`,
}));

const SidebarRow6 = styled(SidebarRow)(({ theme }) => ({
    alignSelf: `stretch`,
    height: `40px`,
}));

const Account = styled("div")({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    gap: `8px`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
});

const Divider = styled("div")({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: `10px`,
    padding: `10px 0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
});

const div = styled("div")({
    alignSelf: `stretch`,
    height: `1px`,
});

const User = styled("div")({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    gap: `30px`,
    padding: `0px 15px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    cursor: "pointer",
});

const Avatar1 = styled(Avatar)({
    width: `32px`,
    height: `32px`,
});

const UserName = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    color: `rgba(53, 53, 53, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `16px`,
    letterSpacing: `0.64px`,
    textDecoration: `none`,
    textTransform: `none`,
    flexGrow: `1`,
});

function Sidebar(props) {
    const handleLogout = () => {
        Cookies.remove("token");
        Router.push("/LogIn");
    };

    return (
        <CollapsableOpened
            style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }}
        >
            <Top>
                <Logo>
                    <Logo1 src={"/assets/img/Logo.png"} alt={"Logo"} />
                </Logo>
                <List>
                    <div>
                        {props.isEmployer && (
                            <>
                                <SidebarRow1
                                    icon="home"
                                    text="Inicio"
                                    isSelected={props.selected == 1}
                                    href={"/"}
                                />
                                <SidebarRow2
                                    icon="project"
                                    text="Proyectos"
                                    isSelected={props.selected == 2}
                                    href={"/project"}
                                />
                                <SidebarRow3
                                    icon="account"
                                    text="Empleados"
                                    isSelected={props.selected == 3}
                                    href={"/employees"}
                                />
                                <SidebarRow5
                                    icon="voluntary"
                                    text={"Deducciones"}
                                    isSelected={props.selected == 5}
                                    href={"/deductions"}
                                />
                                <SidebarRow6
                                    icon="benefit"
                                    text={"Beneficios"}
                                    isSelected={props.selected == 6}
                                    href={"/benefits"}
                                />
                                <SidebarRow6
                                    icon="receipt"
                                    text={"Pago de Planilla"}
                                    isSelected={props.selected == 7}
                                    href={"/payroll"}
                                />
                            </>
                        )}
                        {props.isEmployer === false && (
                            <>
                                <SidebarRow1
                                    icon="home"
                                    text="Inicio"
                                    isSelected={props.selected == 1}
                                    href={"/"}
                                />
                                <SidebarRow2
                                    icon="project"
                                    text="Proyectos"
                                    isSelected={props.selected == 2}
                                    href={"/project"}
                                />
                                <SidebarRow4
                                    icon="addTime"
                                    text={"Registro de Horas"}
                                    isSelected={props.selected == 4}
                                    href={"/hours"}
                                />
                                <SidebarRow5
                                    icon="voluntary"
                                    text={"Deducciones"}
                                    isSelected={props.selected == 5}
                                    href={"/deductions"}
                                />
                                <SidebarRow6
                                    icon="benefit"
                                    text={"Beneficios"}
                                    isSelected={props.selected == 6}
                                    href={"/benefits"}
                                />
                            </>
                        )}
                    </div>
                    <Account>
                        <Divider></Divider>
                            <User>
                                <Avatar1
                                    variant="circular"
                                    src={"/"}
                                    alt={props.username}
                                />
                                <Link href={"/profile"}>
                                    <UserName>{props.username}</UserName>
                                </Link>
                                <IconButton
                                    size="small"
                                    color="primary"
                                    onClick={handleLogout}
                                >
                                    <LogoutIcon />
                                </IconButton>
                            </User>
                    </Account>
                </List>
            </Top>
        </CollapsableOpened>
    );
}

export default Sidebar;
