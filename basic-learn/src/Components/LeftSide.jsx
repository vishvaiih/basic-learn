import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



const MainBox = styled(Box)({
   width:"60%",
   border:"1px solid #d1d8be",
   minHeight:"55vh",
   borderRadius:"15px",
   marginTop:"4%",
   padding:"2%"
  });

  const AddTask = styled(Box)({
    display:"flex",
    alignItems:"center"

  })


function LeftSide() {

  return (
   <MainBox>
    <AddTask>
        <AddOutlinedIcon sx={{fontSize:"12px",marginRight:"2%"}}/>
        <Typography sx={{fontSize:"12px"}}>Add a task</Typography>

    </AddTask>

   </MainBox>
  )
}

export default LeftSide