import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Footer = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "black",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <footer>
        <Button variant="contained" onClick={handleOpen}>
          Show Rules
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              RSC - Regeln
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Papier gewinnt gegen Stein (Papier wickelt ihn ein). Schere
              gewinnt gegen das Papier (Schere zerschneidet Papier). Stein
              gewinnt gegen die Schere (Schere wird stumpf).
            </Typography>
          </Box>
        </Modal>
      </footer>
    </>
  );
};

export default Footer;
