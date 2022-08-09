import * as React from "react";
import { useState } from "react";
import { ModalWindow } from "../modalWindow/ModalWindow";
import { Header } from "../header/Header";
import { ListOfHorses } from "../listOfHorses/ListOfHorses";

export const Layout = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [playerName, setPlayerName] = useState("");

  return (
    <>
      {isOpenModal && (
        <ModalWindow
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          setPlayerName={setPlayerName}
        />
      )}
      {!isOpenModal && (
        <>
          <Header playerName={playerName} />
          <ListOfHorses />
        </>
      )}
    </>
  );
};
