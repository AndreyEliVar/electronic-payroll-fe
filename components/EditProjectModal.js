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

import { TextField, Dialog, Select, FormControl, InputLabel, Button, MenuItem, Tooltip} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import { useState, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useRouter } from 'next/router';
 
const ModalBeneficio1 = styled("div")(({ theme }) =>({  
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
  height: `448px`,  
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
  
const EditarProjecto = styled("div")(({ theme }) =>({  
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
  width: `185px`,  
});
  
const TextFieldStandard2 = styled(TextField)({  
  width: `185px`,  
});

const Frame2 = styled("div")({  
  display: `flex`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  gap: `10px`,  
  padding: `0px`,
  marginTop: `10px`,
  boxSizing: `border-box`,  
});

const Date = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 0.6)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0.15000000596046448px`,  
  textDecoration: `none`,  
  lineHeight: `150%`,  
  textTransform: `none`,  
}));

const DateValue = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 0.6)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,  
  lineHeight: `150%`,  
  textTransform: `none`, 
}));

const Crc = styled("div")({  
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
  
const Cta = styled("div")(({ theme }) =>({  
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
  
const Cancelar = styled("div")(({ theme }) =>({  
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
}));
 
function EditProjectModal(props) {
  const router = useRouter();
  const [nameValue, setNameValue] = useState(props.name);
  const [frequencyValue, setFrequencyValue] = useState(props.frequency);
  const [currencyValue, setCurrencyValue] = useState(props.currency);
  const [amountValue, setAmountValue] = useState(props.maxAmountBen);
  const [benefitsValue, setBenefitsValue] = useState(props.maxBen);


  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidBenefits, setIsValidBenefits] = useState(true);
  const [validFields, setValidFields] = useState(false);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  }

  const handleFrequencyChange = (event) => {
    setFrequencyValue(event.target.value);
  }

  const handleCurrencyChange = (event) => {
    setCurrencyValue(event.target.value);
  }

  const handleAmountChange = (event) => {
    setAmountValue(event.target.value);
    if (event.target.value < 0) {
      setIsValidAmount(false);
    }
    else {
      setIsValidAmount(true);
    }
  }

  const handleBenefitsChange = (event) => {
    setBenefitsValue(event.target.value);
    if (event.target.value < 0) {
      setIsValidBenefits(false);
    }
    else {
      setIsValidBenefits(true);
    }
  }

  const validateFields = () => {
    setValidFields(() => { isValidAmount && isValidBenefits &&
        nameValue !== '' && nameValue !== props.name &&
        frequencyValue !== '' && frequencyValue !== props.frequency &&
        currencyValue !== '' && currencyValue !== props.currency &&
        amountValue !== '' && amountValue !== props.maxAmountBen &&
        benefitsValue !== '' && benefitsValue !== props.maxBen});
    }

  const sendProject = async () => {
    console.log('Send Edit Project');
//     const project = {
//       companyID: props.companyID,
//       name: nameValue,
//       frequency: frequencyValue,
//       currency: currencyValue,
//       amount: amountValue,
//       benefits: benefitsValue,
//       date: dateValue.toISOString(),
//     }
//     console.log(project);
//     await fetch('/api/project', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(project)
//     })
//     props.setIsOpen(false);
//     router.reload();
   }

    const handleCancel = () => {
        setNameValue(props.name);
        setFrequencyValue(props.frequency);
        setCurrencyValue(props.currency);
        setAmountValue(props.maxAmountBen);
        setBenefitsValue(props.maxBen);
      
        setIsValidAmount(true);
        setIsValidBenefits(true);
        setValidFields(false);
    }

  useEffect(() => { validateFields()});

  return (
    <Dialog open={props.isOpen} onClose={() => props.setIsOpen(false)} >
      <ModalBeneficio1 >
        <Content >
          <Details >
            <Frame1 >
              <NameAndTitle >
                <EditarProjecto >
                  {`Editar Proyecto`}
                </EditarProjecto>
              </NameAndTitle>
              <FrameX onClick={() => props.setIsOpen(false)} >
                <X  src={'/assets/img/x.png'} alt={"x"}/>
              </FrameX>
            </Frame1>
            <TextFieldStandard variant="standard" size="medium"  label={`Nombre`} value={nameValue} onChange={handleNameChange}   />
            <Frame11 >
            <FormControl>
              <InputLabel sx={{marginLeft: -2}}>Frecuencia de Pago</InputLabel>
              <TextFieldStandard1 variant="standard" size="medium" value={frequencyValue} onChange={handleFrequencyChange}>
                <MenuItem value={'Semanal'}>Semanal</MenuItem>
                <MenuItem value={'Quincenal'}>Quincenal</MenuItem>
                <MenuItem value={'Mensual'}>Mensual</MenuItem>
              </TextFieldStandard1>
            </FormControl>
            <FormControl>
              <InputLabel sx={{marginLeft: -2}}>Moneda</InputLabel>
              <TextFieldStandard1 variant="standard" size="medium" value={currencyValue} onChange={handleCurrencyChange} >
                <MenuItem value={'USD'}>Dólares(USD)</MenuItem>
                <MenuItem value={'CRC'}>Colones(CRC)</MenuItem>
              </TextFieldStandard1>
            </FormControl>
            </Frame11>
            <Frame11 >
              <TextFieldStandard2 variant="standard" size="medium"  label={`Monto máx. beneficios`} type="number" value={amountValue} onChange={handleAmountChange} error={!isValidAmount} />
              <TextFieldStandard2 variant="standard" size="medium"  label={`Beneficios máximos`} type="number" value={benefitsValue} onChange={handleBenefitsChange} error={!isValidBenefits} />
            </Frame11>
            <Frame2 >
              <Date >
                {`Fecha de inicio:`}
              </Date>
              <DateValue >
                {props.date}
              </DateValue>
            </Frame2>
          </Details>
        </Content>
        <Cta >
          <Links >
            <Link1 >
              <Cancelar onClick={handleCancel}>
                {`Cancelar`}
              </Cancelar>
            </Link1>
            {!validFields ? <Tooltip title={"Debes Completar todos los campos"} arrow placement='top'>
            <span><Button variant="outlined" color="primary" size='large' endIcon={<ArrowForwardIcon />} onClick={sendProject} disabled={!validFields} > {`Editar Proyecto`} </Button></span>
            </Tooltip> 
            : <Button variant="outlined" color="primary" size='large' endIcon={<ArrowForwardIcon />} onClick={sendProject} disabled={!validFields} > {`Editar Proyecto`} </Button>}
          </Links>
        </Cta>
      </ModalBeneficio1>
     </Dialog>
   );
}

export default EditProjectModal;