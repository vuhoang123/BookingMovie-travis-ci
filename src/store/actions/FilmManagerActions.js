import { filmManagerService } from "../../services/FilmManagerService";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { SET_LIST_FILM } from "./types/FilmManagerType";

export const getListFilmAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await filmManagerService.getListFilm();
      dispatch({
        type: SET_LIST_FILM,
        lstFilm: result.data.content,
      });

      dispatch(hideLoadingAction);
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("error", error);
    }
  };
};
