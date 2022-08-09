import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import raceActions from './raceActions';

const raceInitialState = {
  playerName: '',
  horses: [],
  round: [],
  result: [],
};

const createColor = (payload) => {
  return payload.map(el => { return el.color = `#` + Math.floor(Math.random() * 16777215).toString(16) })
}

const copyColor = (state, payload) => {
  for (let i = 0; i < state.horses.length; i += 1) {
    payload[i]['color'] = state.horses[i].color;
  }
  return payload
}

// const addWinner = (state, payload) => {
//   const res = [...state.result];
//   res.push(payload);
//   console.log(res);
//   return res
// }

const raceState = createReducer(raceInitialState, {

  [raceActions.setPlayerNameSuccess]: (state, { payload }) => {
    return { ...state, playerName: payload }
  },
  [raceActions.setListHorsesSuccess]: (state, { payload }) => {
    createColor(payload);
    return { ...state, horses: [...payload] }
  },
  [raceActions.setCurrentRoundSuccess]: (state, { payload }) => {
    copyColor(state, payload);
    return { ...state, round: [...payload] }
  },
  // [raceActions.setResultSuccess]: (state, { payload }) => {
  //   const res = addWinner(state, payload);
  //   return { ...state, result: [...res] }
  // },

});

// const loading = createReducer(false, {
// });

// const error = createReducer(null, {
// });

export default combineReducers({
  raceState,
  // loading,
  // error,
});