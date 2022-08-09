import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Box, Button } from "@mui/material";

export const Hippodrome = () => {
  const socket = io("http://localhost:3002");

  // const [horsesDistance, setHorsesDistance] = useState([]);

  const onClickStart = () => {
    socket.emit("start");
    socket.on("ticker", (round) => {
      console.log(round);
      var horsesDistance = round;
      console.log(horsesDistance);
    });
  };

  // useEffect(() => {

  // }, [horsesDistance]);

  return (
    <>
      <Button variant="contained" onClick={() => onClickStart()}>
        Contained
      </Button>
      <Box sx={{ width: "500px", height: "60px" }}>
        {/* {horsesDistance.length !== 0 && (
          <Box
            sx={{
              // width: `${horsesDistance[0].distance}`,
              height: "10px",
              backgroundColor: "red",
            }}
          />
        )} */}
      </Box>
    </>
  );
};
