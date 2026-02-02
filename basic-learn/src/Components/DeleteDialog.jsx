import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from "@mui/material";

function DeleteDialog({open,handleClose,handleDelete,id}) {

    const Btn = styled(Button)({
        width: "20%",
        color: "black",
        borderRadius: "15px",
        backgroundColor: "white",
        fontSize: "12px",
        textTransform: "capitalize",
        border:"1px solid  #d1d8be",
        padding:"10px"
        
      });

      const Buton = styled(Button)({
        width: "20%",
        color: "white",
        borderRadius: "15px",
        backgroundColor: "#7d3bed",
        fontSize: "12px",
        textTransform: "capitalize",  
        padding:"10px"
      });


  return (
    <Dialog
    PaperProps={{
        style: { 
            borderRadius: 20,
            width:"40%"
         }
      }}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
  >
    <DialogTitle id="responsive-dialog-title">
      Delete this task?
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        This can't be undone.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Btn autoFocus onClick={handleClose}>
       cancel
      </Btn>
      <Buton onClick={() => handleDelete(id)} autoFocus>
        Delete
      </Buton>
    </DialogActions>
  </Dialog>
  )
}

export default DeleteDialog
