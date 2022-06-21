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
import { styled } from '@mui/material/styles';

 
const Hero1 = styled("div")({  
  backgroundColor: `rgba(251, 250, 250, 1)`,  
  border: `1px solid rgba(176, 176, 176, 0.5)`,  
  boxSizing: `border-box`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  height: `306px`,  
  width: `1029px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `18px 78px`,
  marginLeft: `350px`,
  marginTop: `30px`,
});
  
const HeroContent = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Text = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const BienvenidoDavid = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `600`,  
  fontSize: `28.000001907348633px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
});
  
const YaPuedesAdministrarT = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(132, 132, 132, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `600`,  
  fontSize: `17.000001907348633px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `28.000001907348633px`,  
  textTransform: `none`,  
  margin: `10.000000953674316px 0px 0px 0px`,  
});
  
const UndrawPartyingReAt7F = styled("img")({  
  height: `270px`,  
  width: `342px`,  
  margin: `0px 0px 0px 117.00000762939453px`,  
});
 
function Dashboard(props) {
  return (
    <Hero1 >
       <HeroContent >
         <Text >
           <BienvenidoDavid >
             {`Bienvenido, ${props.username}`}
               </BienvenidoDavid>
           <YaPuedesAdministrarT >
             {props.isEmployer ? `Ya puedes administrar tus proyectos` : `Ya puedes consultar los detalles de tus pagos`}
               </YaPuedesAdministrarT>
         </Text>
         <UndrawPartyingReAt7F  src={"/assets/img/welcome.png"} alt={"welcome"}/>
       </HeroContent>
     </Hero1>
   );
}

export default Dashboard;
