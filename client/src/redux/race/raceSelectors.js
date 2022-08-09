const getHorsesList = state => state.race.raceState.horses;
const getCurrentRound = state => state.race.raceState.round;
const getResult = state => state.race.raceState.result;

const raceSelectors = {
  getHorsesList,
  getCurrentRound,
  getResult,
}

export default raceSelectors;
