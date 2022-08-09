import { createAction } from '@reduxjs/toolkit';

const setPlayerNameSuccess = createAction('race/setPlayerNameSuccess');
const setListHorsesSuccess = createAction('race/setListHorsesSuccess');
const setCurrentRoundSuccess = createAction('race/setCurrentRoundSuccess');
const setResultSuccess = createAction('race/setResultSuccess');
const setStartSuccess = createAction('race/setStartSuccess');
const setStopSuccess = createAction('race/setStopSuccess');
const setRefreshSuccess = createAction('race/setRefreshSuccess');

const raceActions = {
  setPlayerNameSuccess,
  setListHorsesSuccess,
  setCurrentRoundSuccess,
  setResultSuccess,
  setStartSuccess,
  setStopSuccess,
  setRefreshSuccess,
};
export default raceActions;
