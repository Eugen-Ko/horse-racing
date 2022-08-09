import { createAction } from '@reduxjs/toolkit';

const setPlayerNameSuccess = createAction('race/setPlayerNameSuccess');
const setListHorsesSuccess = createAction('race/setListHorsesSuccess');
const setCurrentRoundSuccess = createAction('race/setCurrentRoundSuccess');
// const setResultSuccess = createAction('race/setResultSuccess');


const raceActions = {
  setPlayerNameSuccess,
  setListHorsesSuccess,
  setCurrentRoundSuccess,
  // setResultSuccess,
};
export default raceActions;
