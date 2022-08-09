const getHorsesList = state => state.race.raceState.horses;
const getCurrentRound = state => state.race.raceState.round;
const getResult = state => state.race.raceState.result;
const getIsStart = state => state.race.raceState.isStart;
const getIsStop = state => state.race.raceState.isStop;
const getIsRefresh = state => state.race.raceState.isRefresh;
const getIsBetMade = state => state.race.raceState.isBetMaid;

const raceSelectors = {
  getHorsesList,
  getCurrentRound,
  getResult,
  getIsStart,
  getIsStop,
  getIsRefresh,
  getIsBetMade,
}

export default raceSelectors;
