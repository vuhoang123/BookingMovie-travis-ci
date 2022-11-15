import { SET_CINEMA_SYSTEM } from "../actions/types/MovieTheaterManagerType";

const stateDefault = {
  movieTheaterSystem: [],
};

export const MovieTheaterManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CINEMA_SYSTEM: {
      state.movieTheaterSystem = action.movieTheaterSystem;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
