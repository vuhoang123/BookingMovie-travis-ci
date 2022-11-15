import { filmManagerService } from "../../services/FilmManagerService";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await filmManagerService.getListBanner();
      dispatch({
        type: SET_CAROUSEL,
        imgCarousel: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
