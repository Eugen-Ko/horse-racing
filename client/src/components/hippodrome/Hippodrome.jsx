import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { raceSelectors } from "../../redux/race";

export const Hippodrome = ({ onStart }) => {
  const start = useSelector(raceSelectors.getHorsesList);
  const race = useSelector(raceSelectors.getCurrentRound);

  const round = race.length === 0 ? start : race;

  return (
    <Box sx={{ margin: "0 30px" }}>
      <Button
        sx={{ marginBottom: "20px", marginRight: "20px" }}
        variant="contained"
        onClick={() => onStart()}
      >
        Start
      </Button>
      <Button
        sx={{ marginBottom: "20px", marginRight: "20px" }}
        variant="contained"
        onClick={() => onStart()}
      >
        Stop
      </Button>
      <Button
        sx={{ marginBottom: "20px" }}
        variant="contained"
        onClick={() => onStart()}
      >
        Refresh
      </Button>
      <Box>
        {round.map((el, index) => {
          return (
            <Box
              key={el.name}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "1000px",
                  padding: "3px 3px 3px 0",
                  backgroundColor: "#dad8d8",
                  border: "1px solid #000000",
                  marginBottom: "3px",
                  marginRight: "10px",
                }}
              >
                <Box
                  sx={{
                    width: `10px`,
                    height: "10px",
                    backgroundColor: `${el.color}`,
                    // backgroundColor: "red",
                    margin: `10px 0 10px ${el.distance}px`,
                  }}
                />
              </Box>
              <Typography>{el.name}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
