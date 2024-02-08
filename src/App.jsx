// src/App.jsx
import React, { useState} from "react";
import { useTransition, animated } from "react-spring";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { Button,Box, Container, Stack} from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
function App() {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState([]);


  const DecreaseCount=()=>{
    if(count>0){  setCount(count-1)
      const updatedBoxes = [...boxes];  
      // console.log(updatedBoxes);
        updatedBoxes.pop();
        setBoxes(updatedBoxes);}
  

  }
  const IncreaseCount=()=>{
    setCount(count+1);
    setBoxes(prevBoxes => [
      ...prevBoxes,
      { id: prevBoxes.length }
    ]);
 
  }


  const ResetCount=()=>{
    setCount(0);
    setBoxes([])
  }
 
  const transitions = useTransition(boxes, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-40px,0)" }
  });
  return (
  
    <div>
      <Container maxWidth="xl" style={{ display:"flex",flexDirection:"column",width:"100%" ,height:"100vh", alignItems:"center",padding:"0px",backgroundColor:"black",margin:"0px"}}>
        <Box style={{position:"absolute",top:"30vh",zIndex:"5",display:"flex",flexDirection:"column" ,justifyContent:"center", alignItems:"center",padding:"0px",color:"yellow"}}>
        <Box><h1>Count is {count}</h1></Box>
       <Box style={{display:"flex"}}> 
        <Button variant="contained" color="primary" size="small" style={{ margin: "2px" }}  endIcon={<RemoveIcon />} onClick={()=>{
          DecreaseCount()
        }}>
          Decrease
        </Button>
        <Button variant="contained" color="primary"size="small" style={{ margin: "2px" }} endIcon={<ClearIcon />}onClick={()=>{
          ResetCount()
        }}>
          Reset
        </Button>
        <Button variant="contained" color="primary"size="small" style={{ margin: "2px" }} endIcon={<AddIcon />} onClick={()=>{
          IncreaseCount()
        }}>
          Increase
        </Button> 
        </Box>
        </Box>
        
        <Stack style={{alignItems:"center", flexDirection:"column-reverse",height:"100%",width:"100%",}}>
        {transitions((style, item) =>
          item && (
            <animated.div style={{ ...style}}>
              <Box style={{ backgroundColor: "white", width: "85vw", height: "30px", margin: "5px", borderRadius: 8 }}></Box>
            </animated.div>
          )
        )}
     </Stack>
      </Container>
     
    </div>
  );
}

export default App;
