import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

import { ModalWindow } from "../modalWindow/ModalWindow";
import { Header } from "../header/Header";
import { Hippodrome } from "../hippodrome/Hippodrome";
import { raceOperations, raceSelectors } from "../../redux/race";

export const Layout = () => {
  const socket = io("http://localhost:3002");

  const [isOpenModal, setIsOpenModal] = useState(true);
  const [player, setPlayer] = useState("");
  const dispatch = useDispatch();
  // const result = useSelector(raceSelectors.getResult);
  const [winner, setWinner] = useState([]);

  const finishChecker = (round) => {
    for (let i = 0; i < round.length; i += 1) {
      if (round[i].distance >= 100) {
        if (!winner.includes(round[i].name)) {
          setWinner([winner.push(round[i].name)]);
          console.log(winner);
        }
      }
    }
  };

  const onStart = () => {
    socket.emit("start");
    socket.on("ticker", (round) => {
      dispatch(raceOperations.setCurrentRound(round));
      finishChecker(round);
    });
  };

  useEffect(() => {
    dispatch(raceOperations.setPlayerName(player));
  }, [dispatch, player]);

  useEffect(() => {
    socket.on("listHorses", (horses) =>
      dispatch(raceOperations.setListHorses(horses))
    );
  }, [dispatch, socket]);

  return (
    <>
      {isOpenModal && (
        <ModalWindow
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          setPlayer={setPlayer}
        />
      )}
      {!isOpenModal && (
        <>
          <Header playerName={player} />
          <Hippodrome onStart={onStart} />
        </>
      )}
    </>
  );
};
