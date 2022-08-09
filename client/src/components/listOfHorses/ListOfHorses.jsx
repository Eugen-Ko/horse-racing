import { io } from "socket.io-client";
import { useEffect, useState } from "react";

export const ListOfHorses = () => {
  const socket = io("http://localhost:3002");
  // console.log(socket.id);
  const [listHorses, setListHorses] = useState([]);
  socket.emit("connected");
  // console.log(socket);
  socket.on("listHorses", (horses) => setListHorses(horses));

  return (
    <>
      <ul>
        {listHorses.map((el) => (
          <li key={el.name}>
            <span>{el.name}</span>
            <span>rate</span>
          </li>
        ))}
      </ul>
    </>
  );
};
