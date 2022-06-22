/* Component generated by Quest */

import {
    InputAdornment,
    TextField,
    Dialog,
    Select,
    FormControl,
    InputLabel,
    Button,
    MenuItem,
    Tooltip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Router from "next/router";

const ModalBeneficio1 = styled("div")(({ theme }) => ({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    boxShadow: `0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)`,
    borderRadius: `8px`,
    display: `flex`,
    flexDirection: `column`,
    width: `500px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
}));

const Content = styled("div")({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    gap: `30px`,
    padding: `40px 40px 15px 40px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    height: `418px`,
});

const Details = styled("div")({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    gap: `30px`,
    padding: `0px 10px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    height: `363px`,
});

const Frame1 = styled("div")({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-end`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
});

const NameAndTitle = styled("div")({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    gap: `10px`,
    padding: `0px`,
    boxSizing: `border-box`,
    flexGrow: `1`,
});

const CrearNuevoBeneficio = styled("div")(({ theme }) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    color: `rgba(0, 0, 0, 0.87)`,
    fontStyle: `normal`,
    fontFamily: `Heebo`,
    fontWeight: `700`,
    fontSize: `24px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    alignSelf: `stretch`,
}));

const FrameX = styled("div")({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-end`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `20px`,
    height: `20px`,
    cursor: `pointer`,
});

const X = styled("img")({
    height: `12px`,
    width: `12px`,
});

const TextFieldStandard = styled(TextField)({
    alignSelf: `stretch`,
});

const Frame11 = styled("div")({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-end`,
    gap: `29px`,
    padding: `0px`,
    boxSizing: `border-box`,
    height: `53px`,
    width: `410px`,
});

const TextFieldStandard1 = styled(Select)({
    width: `200px`,
});

const TextFieldStandard2 = styled(TextField)({
    width: `170px`,
});

const Currency = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `500`,
    fontSize: `18px`,
    letterSpacing: `0.46000000834465027px`,
    textDecoration: `none`,
    textTransform: `uppercase`,
    width: `48px`,
    marginLeft: `-15px`,
});

const TextFieldOutlined = styled(TextField)({
    alignSelf: `stretch`,
    flexGrow: `1`,
});

const Cta = styled("div")(({ theme }) => ({
    backgroundColor: `rgba(0, 0, 0, 0.04)`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    gap: `14px`,
    padding: `20px 40px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
}));

const Links = styled("div")({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-end`,
    alignItems: `center`,
    gap: `30px`,
    padding: `0px`,
    boxSizing: `border-box`,
    flexGrow: `1`,
});

const Link1 = styled("div")({
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
});

const Cancelar = styled("div")(({ theme }) => ({
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
    cursor: `pointer`,
}));

function EditDeductionModal(props) {
    const [validFields, setValidFields] = useState(false);
    const [isValidAmount, setIsValidAmount] = useState(true);
    const [selectedProjectName, setSelectedProjectName] = useState("");
    const [projectCurrency, setprojectCurrency] = useState("");
    const [Values, setValues] = useState({
        companyID: props.companyID,
        deductionName: props.deductionName,
        amount: props.amount,
        description: props.description,
    });

    const handleChange = (event) => {
        setValues({ ...Values, [event.target.id]: event.target.value });
        if (event.target.id == "amount") {
            parseInt(event.target.value) > 0
                ? setIsValidAmount(true)
                : setIsValidAmount(false);
        }
    };

    const validateFields = () => {
        setValidFields(
            () =>
                isValidAmount &&
                Values.deductionName !== "" &&
                Values.amount !== "" &&
                Values.description !== ""
        );
    };

    useEffect(() => {
        validateFields();
    });

    const handleChangeProject = (e) => {
        setSelectedProjectName(e.target.value);
        props.projects.map((project) => {
            if (project.nombre == e.target.value) {
                setprojectCurrency(project.moneda);
            }
        });
    };

    const handleSubmit = async () => {
        const Data = {
            companyID: Values.companyID,
            deductionName: Values.deductionName,
            projectName: selectedProjectName,
            amount: Values.amount,
            description: Values.description,
        };
        try {
            //TODO configurar el endpoint
            await fetch("/api/employerDeductionsEdit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Data),
            });
            Router.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dialog open={props.isOpen} onClose={() => props.setIsOpen(false)}>
            <ModalBeneficio1>
                <Content>
                    <Details>
                        <Frame1>
                            <NameAndTitle>
                                <CrearNuevoBeneficio>
                                    {`Editar Deducción`}
                                </CrearNuevoBeneficio>
                            </NameAndTitle>
                            <FrameX onClick={() => props.setIsOpen(false)}>
                                <X src={"/assets/img/x.png"} alt={"x"} />
                            </FrameX>
                        </Frame1>
                        <TextFieldStandard
                            id="deductionName"
                            variant="standard"
                            size="small"
                            label={`Nombre`}
                            onChange={handleChange}
                        />
                        <Frame11>
                            <FormControl>
                                <InputLabel id="select-label">
                                    Nombre de proyecto
                                </InputLabel>
                                <TextFieldStandard1
                                    id="projectName"
                                    value={selectedProjectName}
                                    variant="standard"
                                    size="medium"
                                    onChange={handleChangeProject}
                                >
                                    {props.projects.map((project) => (
                                        <MenuItem
                                            key={project.nombre}
                                            value={project.nombre}
                                        >
                                            {" "}
                                            {project.nombre}{" "}
                                        </MenuItem>
                                    ))}
                                </TextFieldStandard1>
                            </FormControl>
                            <TextFieldStandard2
                                id="amount"
                                value={Values.amount}
                                type="number"
                                variant="standard"
                                size="medium"
                                label={`Monto`}
                                onChange={handleChange}
                                disabled={!selectedProjectName}
                                error={!isValidAmount}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {projectCurrency}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Frame11>
                        <TextFieldOutlined
                            id="description"
                            value={Values.description}
                            variant="outlined"
                            size="medium"
                            multiline
                            rows={4}
                            label="Descripción"
                            onChange={handleChange}
                        />
                    </Details>
                </Content>
                <Cta>
                    <Links>
                        <Link1>
                            <Cancelar onClick={() => props.setIsOpen(false)}>
                                {`Cancelar`}
                            </Cancelar>
                        </Link1>
                        {!validFields ? (
                            <Tooltip
                                title={"Debes Completar todos los campos"}
                                arrow
                                placement="top"
                            >
                                <span>
                                    <Button
                                        onClick={handleSubmit}
                                        variant="outlined"
                                        color="primary"
                                        size="large"
                                        endIcon={<ArrowForwardIcon />}
                                        disabled={!validFields}
                                    >
                                        {" "}
                                        {`Editar Deducción`}{" "}
                                    </Button>
                                </span>
                            </Tooltip>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                variant="outlined"
                                color="primary"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                            >
                                {" "}
                                {`Editar Deducción`}{" "}
                            </Button>
                        )}
                    </Links>
                </Cta>
            </ModalBeneficio1>
        </Dialog>
    );
}

export default EditDeductionModal;
