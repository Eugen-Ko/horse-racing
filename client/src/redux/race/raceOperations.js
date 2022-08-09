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

const raceOperations = {
  setPlayerName,
  setListHorses,
  setCurrentRound,
  setResult,
}

export default raceOperations
