import { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  backgroundColor: "#fff",
  p: 4,
};

export const ModalWindow = ({ isOpenModal, setIsOpenModal, setPlayerName }) => {
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.currentTarget.value);
  };

  const onClose = () => {
    if (name === "") {
      alert("Input name!!!");
      return;
    }
    setPlayerName(name);
    setIsOpenModal(false);
  };

  return (
    <Modal
      open={isOpenModal}
      onClose={() => {
        onClose();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Input you name
        </Typography>
        <TextField
          id="standard-basic"
          label="Input you name"
          variant="standard"
          onChange={(e) => onChange(e)}
        />
        <Button onClick={() => onClose()} variant="contained">
          Contained
        </Button>
      </Box>
    </Modal>
  );
};
