import { io } from "socket.io-client";
import { useEffect, useState } from "react";

export const ListOfHorses = () => {
  const socket = io("http://localhost:3002");
  const [listHorses, setListHorses] = useState([]);
  socket.emit("connected");
  useEffect(() => {
    socket.on("listHorses", (horses) => {
      console.log("hire");
      setListHorses(horses);
    });
  }, []);

  return (
    <>
      <ul>
        {listHorses.map((el) => (
          <li key={el.name}>
            <span>{el.name}</span>
            {`      `}
            <span>rate</span>
          </li>
        ))}
      </ul>
    </>
  );
};
