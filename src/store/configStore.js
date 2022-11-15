import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { BookingManagerReducer } from "./reducers/BookingManagerReducer";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmManagerReducer } from "./reducers/FilmManagerReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { MovieTheaterManagerReducer } from "./reducers/MovieTheaterManagerReducer";
import { UserManagerReducer } from "./reducers/UserManagerReducer";

const rootReducer = combineReducers({
  // State
  CarouselReducer,
  FilmManagerReducer,
  MovieTheaterManagerReducer,
  UserManagerReducer,
  BookingManagerReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
