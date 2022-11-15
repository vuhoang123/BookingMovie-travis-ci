import { movieTheaterManagerService } from "../../services/MovieTheaterManagerService";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { SET_CINEMA_SYSTEM, SET_FILM_DETAIL } from "./types/MovieTheaterManagerType";

export const getListCinemaSystem = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await movieTheaterManagerService.getInfoMovieTheaterSystem();
      if (result.status === 200) {
        dispatch({
          type: SET_CINEMA_SYSTEM,
          movieTheaterSystem: result.data.content,
        });
      }
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors.response?.data);
    }
  };
};

export const getInfoFilmDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await movieTheaterManagerService.getInfoMovieSchedule(id);
      dispatch({
        type: SET_FILM_DETAIL,
        filmDetail: result.data.content,
      });
      dispatch(hideLoadingAction);
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors.response?.data);
    }
  };
};
