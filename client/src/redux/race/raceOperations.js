import raceActions from './raceActions';

const setPlayerName = (name) => dispatch => {
  dispatch(raceActions.setPlayerNameSuccess(name));
}

const setListHorses = (horses) => dispatch => {
  dispatch(raceActions.setListHorsesSuccess(horses));
}

const setCurrentRound = (round) => dispatch => {
  dispatch(raceActions.setCurrentRoundSuccess(round));
}

const setResult = (name) => dispatch => {
  dispatch(raceActions.setResultSuccess(name));
}

const setStart = () => dispatch => {
  dispatch(raceActions.setStartSuccess())
}

const setStop = () => dispatch => {
  dispatch(raceActions.setStopSuccess())
}

const setRefresh = () => dispatch => {
  dispatch(raceActions.setRefreshSuccess())
}

const raceOperations = {
  setPlayerName,
  setListHorses,
  setCurrentRound,
  setResult,
  setStart,
  setStop,
  setRefresh,
}

export default raceOperations
